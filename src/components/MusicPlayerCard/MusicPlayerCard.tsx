import { useState, useRef, useEffect } from "react";
import "./MusicPlayerCard.css";
import { songsServices, type SongResponse } from "../../services/songsServices";

function MusicPlayerCard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataSongs, setDataSongs] = useState<SongResponse | null>(null);
  const [nextSong, setNextSong] = useState(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const portada = dataSongs?.data?.[nextSong]?.album?.cover_big;

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!searchTerm.trim()) return;

    try {
      setLoading(true);
      setError(null);

      const data = await songsServices.getSongs(searchTerm);
      setDataSongs(data);

      if (data.data.length === 0) {
        setError("No se encontraron canciones para este artista.");
      }
    } catch (err) {
      setError("Hubo un error al conectar con el servidor.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    if (!dataSongs) return;
    setNextSong((prev) => (prev + 1) % dataSongs.data.length);
    setIsPlaying(false);
  };

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play();
    }
  }, [nextSong]);

  return (
    <div>
      <form onSubmit={handleSearch} className="search-box">
        <input
          type="text"
          placeholder="Ej: Sabaton, Ghost, Metallica..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Buscando..." : "Buscar"}
        </button>
      </form>
      {dataSongs?.data[nextSong] && (
        <div
          className="player-card"
          style={{
            backgroundImage: `url(${dataSongs.data[nextSong].album.cover_big})`,
          }}
        >
          {/* Badge de artista (arriba) */}
          <div className="artist-info-badge">
            <img
              src={dataSongs.data[nextSong].artist.picture_small}
              alt="artist"
            />
            <div>
              <p style={{ margin: 0, fontSize: "12px", fontWeight: "bold" }}>
                {dataSongs.data[nextSong].artist.name}
              </p>
              <p style={{ margin: 0, fontSize: "10px", opacity: 0.7 }}>
                @
                {dataSongs.data[nextSong].artist.name
                  .toLowerCase()
                  .replace(/\s/g, "")}
              </p>
            </div>
          </div>

          <audio
            ref={audioRef}
            src={dataSongs.data[nextSong].preview}
            onTimeUpdate={() =>
              setCurrentTime(audioRef.current?.currentTime || 0)
            }
            onEnded={handleNext}
          />

          {/* Progreso */}
          <div className="progress-container">
            <div className="time-info">
              <span>
                0:{Math.floor(currentTime).toString().padStart(2, "0")}
              </span>
              <span>
                -0:
                {Math.floor(30 - currentTime)
                  .toString()
                  .padStart(2, "0")}
              </span>
            </div>
            <input
              type="range"
              min="0"
              max="30"
              step="0.1"
              value={currentTime}
              onChange={(e) =>
                (audioRef.current!.currentTime = Number(e.target.value))
              }
            />
          </div>

          {/* Controles */}
          <div className="controls">
            <button
              onClick={() => setNextSong((prev) => (prev > 0 ? prev - 1 : 0))}
            >
              ⏮
            </button>
            <button onClick={togglePlay} className="play-btn">
              {isPlaying ? "⏸" : "▶"}
            </button>
            <button onClick={handleNext}>⏭</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MusicPlayerCard;
