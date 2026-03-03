import { useState } from "react";

const MultiTags = () => {
  const [lenguajes, setLenguajes] = useState<
    { name: string; selected: boolean }[]
  >([
    { name: "Javascript", selected: false },
    { name: "Java", selected: false },
    { name: "PHP", selected: false },
    { name: "C#", selected: false },
  ]);

  const handleTag = (itemClickeado) => {
    setLenguajes((prev) =>
      prev.map((item) =>
        item.name === itemClickeado.name
          ? { ...item, selected: !item.selected }
          : item,
      ),
    );
  };

  return (
    <>
      <h1>Tags</h1>
      {lenguajes
        .filter((item) => item.selected)
        .map((item, index) => (
          <div
            key={index}
            onClick={() => handleTag(item)}
            style={{
              cursor: "pointer",
            }}
          >
            {item.name}
          </div>
        ))}

      <h2>___________________________________________</h2>

      {lenguajes
        .filter((item) => !item.selected)
        .map((item, index) => (
          <div
            key={index}
            onClick={() => handleTag(item)}
            style={{ cursor: "pointer" }}
          >
            {item.name}
          </div>
        ))}
    </>
  );
};

export default MultiTags;
