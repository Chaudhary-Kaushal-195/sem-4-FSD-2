function SearchBox() {
  function handleChange(event) {
    console.log("Searching:", event.target.value);
  }

  return (
    <>
      <input
        type="text"
        placeholder="Search products"
        onChange={handleChange}
      />
    </>
  );
}
export default SearchBox;
