function Parent() {
  const [name, setName] = useState("");

  return (
    <>
      <Input setName={setName} />
      <Display name={name} />
    </>
  );
}

function Input({ setName }) {
  return <input onChange={(e) => setName(e.target.value)} />;
}

function Display({ name }) {
  return <p>Hello {name}</p>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<Parent />);
