 export const travleData = async()=>{
    const res = await fetch("http://localhost:5000/users")
    if(!res.ok){
        throw new Error ("faied to fetched all data")
    }
    const data = await res.json()
    return data;
}

 export const getTravleDataById=async(travleId)=>{
    const res =await fetch(`http://localhost:5000/users/${travleId}`)
     if(!res.ok){
        throw new Error ("faied to fetched single data")
    }
    const data = await res .json()
    return data;
}