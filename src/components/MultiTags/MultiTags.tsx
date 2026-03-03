import { useState } from "react";
import "./MultiTags.css";

const MultiTags = () => {
  const [lenguajes, setLenguajes] = useState<
    { name: string; selected: boolean }[]
  >([
    { name: "Javascript", selected: false },
    { name: "Node", selected: false },
    { name: "React", selected: false },
    { name: "Angular", selected: false },
    { name: "Typescript", selected: false },
    { name: "Jest", selected: false },
    { name: "Express", selected: false },
  ]);

  const handleTag = (itemClickeado: { name: string; selected: boolean }) => {
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
      <div className="tags-container">
        <h1 className="title">TAGS</h1>

        {/* Seleccionados */}
        <div className="selected-container">
          {lenguajes
            .filter((item) => item.selected)
            .map((item, index) => (
              <div
                key={index}
                onClick={() => handleTag(item)}
                className="tag selected"
              >
                {item.name}
                <span className="close">×</span>
              </div>
            ))}
        </div>

        {/* Disponibles */}
        <div className="available-container">
          {lenguajes
            .filter((item) => !item.selected)
            .map((item, index) => (
              <div key={index} onClick={() => handleTag(item)} className="tag">
                {item.name}
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MultiTags;
