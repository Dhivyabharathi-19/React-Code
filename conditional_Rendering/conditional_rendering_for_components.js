function App() {
  const isAdmin = true;

  return <div>{isAdmin ? <AdminPanel /> : <UserPanel />}</div>;
}
