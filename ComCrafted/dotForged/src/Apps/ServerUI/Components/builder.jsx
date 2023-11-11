import { useState } from "react";

const elements = ["title", "dropdown", "slider", "textField", "toggle"];

function Element(props) {
  return <>
  
  <li>
    <div>
      <p>{props.entry.type}</p>
      <button>Up</button>
      <button>Down</button>

      {/* HERE, HOW DO I REMOVE THE ENTRY FROM THE ARRAY OF OBJECTS SO THAT IT REMOVES THE THING? */}
      <button>Remove</button>
    </div>
  </li>
  
  </>;
}

export function ModalFormPanel() {
  const [elements, setElements] = useState([]);
  const newElement = (type) => {
    setElements([...elements, { type }]);
  };

  return (
    <>
      <div className="modalFormPanel">
        <div className="modalFormControlPanel">
          <button
            onClick={() => {
              newElement("form");
            }}
          >
            Add Form
          </button>
          <button
            onClick={() => {
              newElement("dropdown");
            }}
          >
            Add Dropdown
          </button>
        </div>

        <ul className="elementList">
          {elements.map((entry, index) => {
            return <Element key={index} entry={entry} />;
          })}
        </ul>
      </div>
    </>
  );
}
