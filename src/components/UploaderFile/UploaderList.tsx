import { useEffect, useState } from "react";

const UploaderList = ({ files }) => {
  const [progress, setProgress] = useState({});

  useEffect(() => {
    files.forEach((file) => {
      if (!progress[file.name]) {
        simulateUpload(file.name);
      }
    });
  }, [files]);

  const simulateUpload = (fileName) => {
    let value = 0;

    const interval = setInterval(() => {
      value += Math.random() * 15;

      setProgress((prev) => ({
        ...prev,
        [fileName]: Math.min(100, Math.floor(value)),
      }));

      if (value >= 100) {
        clearInterval(interval);
      }
    }, 500);
  };

  return (
    <div>
      {files.map((file, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <img src={URL.createObjectURL(file)} alt={file.name} width="60" />

            <div style={{ flex: 1 }}>
              <p>{file.name}</p>

              <div
                style={{
                  height: "6px",
                  background: "#eee",
                  borderRadius: "4px",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    width: `${progress[file.name] || 0}%`,
                    height: "100%",
                    background: "black",
                    transition: "width 0.3s",
                  }}
                />
              </div>
            </div>

            <span>{progress[file.name] || 0}%</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UploaderList;
