const api=process.env.REACT_APP_API?process.env.REACT_APP_API:'http://localhost:8000';
export const createCategory=async (parentId)=>{
    const response=await fetch(`${api}/createCategory`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({parent_id:parentId})
    });
    return await response.json();
        
}
export const getCategories=async ()=>{
    console.log(process.env.REACT_APP_API);
    const response=await fetch(`${api}/getCategories`);
    return await response.json();
}