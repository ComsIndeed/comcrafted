const elements = ["title", "dropdown", "slider", "textField", "toggle"];

export function ModalFormPanel() {
  return (
    <>
      <div className="modalFormPanel">
        <form>
          <p>Set Modal Form Title</p>
          <input type="text" />
          <input type="submit" />
        </form>
        <form>
          <p>Add Elements</p>
          <input type="radio" />
          <input type="submit" />
        </form>
      </div>
    </>
  );
}
