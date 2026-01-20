function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div>
      <h2>{isLoggedIn ? "Logged In" : "Logged Out"}</h2>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle</button>
    </div>
  );
}
const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render(<LoginStatus />);
