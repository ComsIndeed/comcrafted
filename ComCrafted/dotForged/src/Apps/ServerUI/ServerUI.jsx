import { ModalFormPanel } from "./Components/builder"

let array = ["Item1", "Item2", "Item3"]

function output(input) {
  input.forEach(element => {
    return toString(element)    
  });
}

export function ServerUI_Page() {
  return (
    <>
    
    <ModalFormPanel />

    <p>
      {output(array)}
    </p>

    </>
  )
}