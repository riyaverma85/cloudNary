import axios from "axios";
import { useState } from "react";
const Home=()=>{
    const[image,setImage]=useState("");
    const handleImage=(e)=>{
          console.log(e.target.files);
          setImage(e.target.files[0]);
    }
     const handleSubmit=async()=>{
        let api="https://api.cloudinary.com/v1_1/dxu8qers5/image/upload"
        const formData=new FormData();
        formData.append("file",image);
        formData.append("upload_preset","shivani");
        formData.append("cloud_name","dxu8qers5")
        try {
            const response=await axios.post(api,formData)
        console.log(response);
        console.log(response.data.url);
        alert("Image successfully uploaded");
        } catch (error) {
            console.log(error);
            alert("Error while uploading image");
        }
        
     }
    return(
        <>
        <h3>My Project!!!</h3>
        Upload Images: <input type="file" onChange={handleImage}/><br/><br/>
        <button onClick={handleSubmit}>Upload!</button>
        </>
    )
}
export default Home;