function Mom() {
  const [icecream, setIcecream] = React.useState(5);

  return (
    <>
      <KidA icecream={icecream} />
      <KidB icecream={icecream} setIcecream={setIcecream} />
    </>
  );
}
function KidA({ icecream }) {
  return <h3>icecream Left:{icecream}</h3>;
}
function KidB({ icecream, setIcecream }) {
  return <button onClick={() => setIcecream(icecream - 1)}>Count</button>;
}

const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render(<Mom />);
