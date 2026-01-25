function Parent() {
  const [count, setCount] = React.useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  function Child(props) {
    return <button onClick={props.increment}>Click</button>;
  }
  return (
    <div>
      <h2>{count}</h2>
    </div>
  );
}
const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render(<Parent />);
