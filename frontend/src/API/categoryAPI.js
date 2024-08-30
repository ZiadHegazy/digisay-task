const api=process.env.API?process.env.API:'http://localhost:8000';
export const createCategory=async (parentId)=>{
    console.log(api);
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
    console.log(api);
    const response=await fetch(`${api}/getCategories`);
    return await response.json();
}