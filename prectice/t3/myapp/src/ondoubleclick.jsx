function DeleteItem() {
  const handleDoubleClick = () => {
    alert("Item deleted successfully!");
  };

  return (
    <button onDoubleClick={handleDoubleClick}>Double Click to Delete</button>
  );
}
export default DeleteItem;
