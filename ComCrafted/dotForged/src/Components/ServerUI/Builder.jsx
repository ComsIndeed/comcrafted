export function Section(props) {
  return (
    <>
      <section className="section">{props.children}</section>
    </>
  );
}

export function Panel(props) {
  return (
    <>
      <div className="panel">{props.children}</div>
    </>
  );
}

export function BuilderElement(props) {
  return (
    <>
      <div className="builderElement">
        <button className="builderElement-button" />
        <p className="builderElement-type"> {props.type} </p>
      </div>
    </>
  );
}
