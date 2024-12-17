export const getPosts = async()=>{
   const response = await fetch("http://localhost:8001/allproduct",{method:"GET",})
   return await response.json()
}