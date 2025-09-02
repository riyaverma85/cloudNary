
import { useState } from "react";
const Home=()=>{
    const[image,setImage]=useState("");
    const handleImage=(e)=>{
          console,log(e.target.files);
          setImage(e.target.files[0]);
    }
     
    return(
        <>
        <h3>My Project!!!</h3>
        Upload Images: <input type="file" onChange={handleImage}/><br/><br/>
        <button>Upload!</button>
        </>
    )
}
export default Home;