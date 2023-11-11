export function Preview(props) {
  const entry = JSON.stringify(props.entry, null, 2)

  return (<>
  <pre className="preview"> {entry} </pre>
  </>)
}