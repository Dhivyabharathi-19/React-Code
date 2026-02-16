function Form() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name, email);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br></br>

      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button type="submit">Submit</button>
    </form>
  );
}
const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render(<Form />);
