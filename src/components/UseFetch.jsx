import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data, setData] = useState([]);
    useEffect(()=>{
        console.log(`UseFetch 사용`);
        fetch(url)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setData(res);
        })
    },[url]);
    return data;
}

export default UseFetch;