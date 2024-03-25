import { useState } from "react";
import { useEffect } from "react";

const Home = ({data}) => {
    const [data,setdata]=useState([])
useEffect(()=>{
    fetch("Data.json")
    .then(res=>res.json())
    .then(data=>(setdata(data)))
},[])
    return (
        <div>
            <h1>Bangladesh:{data.length}</h1>
            <h2><Card ></Card></h2>
        </div>
    );
};

export default Home;