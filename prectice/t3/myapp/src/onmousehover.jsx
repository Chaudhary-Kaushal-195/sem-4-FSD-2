function HelpText() {
  const showMessage = () => {
    alert("Password must be at least 8 characters.");
  };

  return <span onMouseOver={showMessage}>Hover here for help</span>;
}
export default HelpText;
