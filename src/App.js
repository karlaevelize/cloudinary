import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [loading, setLoading] = useState(false)
  const [image, setImage] = useState("")
  
  const uploadImage = async(e) => {
    console.log("triggered")
    const files = e.target.files
    const data = new FormData()
    data.append("file", files[0])
    data.append('upload_preset', "lpsty2kc")
    //first parameter is always upload_preset, second is the
    setLoading(true)

    const res = await fetch("https://api.cloudinary.com/v1_1/delvoxvyc/image/upload", {
      method: "POST",
      body: data
    })

    const file = await res.json()
    console.log("file", file)
    setImage(file.url)
  }

  return (
    <div className="App">
      <h1>Cloudinary Upload</h1>
      <input type="file" name="file" placeholder="drag it here" onChange={uploadImage}/>
      <img src={image}/>
    </div>
  );
}

export default App;
