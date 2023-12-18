import { useEffect, useState } from "react";

function useCurrancyInfo(currancy){
const [data, setData] = useState({})

    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currancy}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currancy]))
    }, [currancy])

    return data
}

export default useCurrancyInfo;