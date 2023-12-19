import React, {useEffect, useState} from 'react';
import { useLoaderData } from 'react-router-dom';
function Github(){
    // const [data, setData] = useState({})

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/Kevin0403")
    //     .then((response) => response.json())
    //     .then((response) => setData(response))
    // })


    const data = useLoaderData()
    
    return (
        <>
        <h2 className=' text-center text-2xl text-orange-400  bg-gray-700'> Followers : {data.followers}</h2>
        <div className=' flex justify-center bg-gray-700'>
            <img src={data.avatar_url} alt="Github Profile" />
        </div>
        </>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch("https://api.github.com/users/Kevin0403")

    return response.json()
}