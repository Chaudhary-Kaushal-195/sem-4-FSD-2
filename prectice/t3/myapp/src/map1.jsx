function Map1() {
  let arr = [2, 4, 6, 3, 7, 5];
  const val = arr.sort();
  console.log(val);
  console.log(arr);
  return (
    <div>
      <h1>Output: </h1>
      {arr.map((value) => {
        const val = value + 3 + "2";
        return <h2>{val}</h2>;
      })}
    </div>
  );
}
export default Map1;
