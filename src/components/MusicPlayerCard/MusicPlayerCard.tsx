import { useEffect, useState } from "react";
import "./MusicPlayerCard.css";
import { songsServices, type SongResponse } from "../../services/songsServices";

function MusicPlayerCard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataSongs, setDataSongs] = useState<SongResponse | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

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
  return (
    <div className="musicContainer">
      <h1>canciones</h1>
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
      {dataSongs?.data.map((song) => (
        <div key={song.id}>
          <p>{song.title}</p>
        </div>
      ))}
    </div>
  );
}

export default MusicPlayerCard;
