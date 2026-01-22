function Status({ status }) {
  const renderStatus = () => {
    if (status === "loading") return <p>Loading...</p>;
    if (status === "success") return <p>Success!</p>;
    return <p>Error</p>;
  }; //{condtional rendering using function}

  return <div>{renderStatus()}</div>;
}
