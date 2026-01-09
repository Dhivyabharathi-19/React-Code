function NewProps() {
  return <h1>Hello</h1>;
}
const container = document.querySelector(".js-container");
const root = ReactDOM.createRoot(container); //where to display (root is not a keyword)
root.render(<NewProps />); //Display the content
