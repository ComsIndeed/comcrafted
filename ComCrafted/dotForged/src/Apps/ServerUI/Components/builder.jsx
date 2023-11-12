import { useEffect, useState } from "react";
import { Preview } from "./preview";

// const elements = ["title", "dropdown", "slider", "textField", "toggle"];

function Element(props) {
  // props.index is the element's index in the array
  // props.entry is the object its represented by in the array
  // the value of props.entry.type is the element's type
  // the properties and methods available for the element depends on its type value in the object in the array

  const renderElementOptions = () => {
    switch (props.entry.type) {
      case "dropdown":
        return (
          <>
            <input type="radio" />
          </>
        );

      case "slider":
        return <>
          <input type="range" />
        </>;

      case "textField":
        return <>
          <input type="text" />
        </>

      case "toggle":
        return <>
          <input type="checkbox" />
        </>

      default:
        return (
          <>
            <p>No Additional Control</p>
          </>
        );
    }
  };

  return (
    <>
      <li>
        <div className="elementControls">
          <p>{props.entry.type}</p>
          <button
            onClick={() => {
              props.moveUp(props.index);
            }}
          >
            Up
          </button>
          <button
            onClick={() => {
              props.moveDown(props.index);
            }}
          >
            Down
          </button>
          <button
            onClick={() => {
              props.removeElement(props.index);
            }}
          >
            Remove entry number {props.index}{" "}
          </button>

          <div className="elementOptions">{renderElementOptions()}</div>
        </div>
      </li>
    </>
  );
}


export function ModalFormPanel() {
  const [elementID, setElementID] = useState(0)
  const [elements, setElements] = useState([]);
  const newElement = (type) => {
    setElementID(elementID + 1)
    setElements([...elements, { type, elementID }]);
  };
  const removeElement = (index) => {
    // Use filter to create a new array excluding the item at the specified index
    const updatedElements = elements.filter((_, i) => i !== index);
    setElements(updatedElements);
  };
  const moveUp = (index) => {
    if (index > 0) {
      const updatedElements = [...elements];
      [updatedElements[index - 1], updatedElements[index]] = [
        updatedElements[index],
        updatedElements[index - 1],
      ];
      setElements(updatedElements);
    }
  };

  const moveDown = (index) => {
    if (index < elements.length - 1) {
      const updatedElements = [...elements];
      [updatedElements[index], updatedElements[index + 1]] = [
        updatedElements[index + 1],
        updatedElements[index],
      ];
      setElements(updatedElements);
    }
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
          <button
            onClick={() => {
              newElement("slider");
            }}
          >
            Add Slider
          </button>
          <button
            onClick={() => {
              newElement("textField");
            }}
          >
            Add TextField
          </button>
          <button
            onClick={() => {
              newElement("toggle");
            }}
          >
            Add Toggle
          </button>
        </div>

        <ul className="elementList">
          {elements.map((entry, index) => {
            return (
              <Element
                key={index}
                entry={entry}
                index={index}
                removeElement={removeElement}
                moveUp={moveUp}
                moveDown={moveDown}
              />
            );
          })}
        </ul>
      </div>

      <Preview entry={elements} />
    </>
  );
}