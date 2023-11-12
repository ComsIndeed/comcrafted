function Panel(props) {
  return (
    <>
      <div className="preview-panel">{props.children}</div>
    </>
  );
}
function Button(props) {
  return (
    <>
      <button className="preview-button"> {props.children} </button>
    </>
  );
}
function Text(props) {
  return (
    <>
      <p className="preview-text"> {props.children} </p>
    </>
  );
}
function Slider(props) {
  return (
    <>
      <input type="range" className="preview-slider" />
    </>
  );
}
// function Form(props) {
//   return (
//     <>
//       <div className="preview-form-container">
//         {() => {
//           if(props.children != undefined) {
//             return <>
//               <label>
//             </>
//           }
//         }}
//         <input type="text" className="preview-form" />
//       </div>
//     </>
//   )
// }

export function Preview(props) {
  const entry = JSON.stringify(props.entry, null, 2);

  return (
    <>
      <pre className="preview">{entry}</pre>
    </>
  );
}
