function Button() {
  function handleClick() {
    alert("Clicked!");
  }

  return <button onClick={handleClick}>Click</button>;
}
const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render(<Button />);
