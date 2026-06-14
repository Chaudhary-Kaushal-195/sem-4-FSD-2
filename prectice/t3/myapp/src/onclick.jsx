function SaveButton() {
  const handleClick = () => {
    alert("Data saved successfully!");
  };

  return <button onClick={handleClick}>Save</button>;
}
export default SaveButton;
