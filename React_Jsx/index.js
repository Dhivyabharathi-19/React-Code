function App() {
  const childName = "Tom";
  const isHappy = true;
  const toys = ["Car", "Doll", "Ball", "Robot"];

  function sayHello() {
    return "Welcome to React and JSX!";
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Comic Sans MS" }}>
      <h1 style={{ color: "blue" }}>Hello {childName}</h1>

      <h2>{sayHello()}</h2>

      <p>{isHappy ? " I am Happy!" : " I am Sad!"}</p>

      <h3>My Toys:</h3>

      <ul>
        {toys.map((toy, index) => (
          <li key={index}>{toy}</li>
        ))}
      </ul>

      <p style={{ color: "green", fontSize: "18px" }}>React + JSX is fun</p>
    </div>
  );
}
const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render(<App />);
