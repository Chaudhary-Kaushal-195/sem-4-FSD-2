function InputFocus() {
  const handleFocus = () => {
    console.log("Input field focused");
  };

  return <input type="text" onFocus={handleFocus} />;
}
export default InputFocus;
