function Notification() {
  const showMessage = (msg) => {
    alert(msg);
  };

  return (
    <button onClick={() => showMessage("Order placed successfully!")}>
      Place Order
    </button>
  );
}
export default Notification;
