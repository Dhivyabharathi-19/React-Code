// Scenario: Order Tracking App
// You are building an Order Tracking feature for an e-commerce website.
// Flow:

// OrderApp → main component (has orderStatus)

// Dashboard → does NOT use the status

// OrdersPage → does NOT use the status

// OrderDetails → finally displays the status

// 📌 Only OrderDetails needs the data, but it must pass through multiple components.

//  Task

// Store orderStatus (example: "Out for Delivery ") in OrderApp.

// Pass it through:

// Dashboard

// OrdersPage

// Display the order status inside OrderDetails.

// This should clearly show props drilling.
function OrderApp() {
  return <Dashboard status="Out For Delivery" />;
}

function Dashboard({ status }) {
  return <OrdersPage status={status} />;
}

function OrdersPage({ status }) {
  return <OrderDetails status={status} />;
}

function OrderDetails({ status }) {
  return <h3>Order Details: {status}</h3>;
}

const container = document.querySelector(".js-container");
ReactDOM.createRoot(container).render(<OrderApp />);
