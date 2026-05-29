

export default function Product(prop) {
  return (
    <div>{
        prop.data.map((i)=>(
            <>
            <h1>{i.name}</h1>
            <h1>{i.price}</h1>
            <img src={i.pic}  />
            </>
        )
        )
        }</div>
  )
}
