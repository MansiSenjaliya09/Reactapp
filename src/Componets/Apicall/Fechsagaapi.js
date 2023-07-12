const url ="https://fakestoreapi.com/products";
// const url ="https://api.storerestapi.com/products";
// const url ="https://www.omdbapi.com/?s=har&apikey=43d751c";

const Fechsagaapi = () => {
  return fetch(url,{
    method :"GET",
  })
    .then((response)=>response.json())
    .catch((error)=>{
       throw error;
    })
  
}

export default Fechsagaapi ;