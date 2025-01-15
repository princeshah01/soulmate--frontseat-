import { GoogleLogin } from "@react-oauth/google";
import  {jwtDecode}  from "jwt-decode";
import axios from "axios";
import { useState } from "react";
const App = () => {

  const api = axios.create({
    baseURL: "http://localhost:5000",
   })

  const clickGoogledata = async (credentialResponse) =>{
   try{

     const data = jwtDecode( credentialResponse.credential);
     const newDate = {
      given_name: data.given_name,
      family_name : data.family_name , 
      email : data.email,
      email_verified: data.email_verified,
      picture:data.picture ,
      clientId:credentialResponse.clientId,
    }
  
    console.log(newDate);
    await api.post("/login-with-google",newDate,{withCredentials:true});
  }
  catch(err){
    console.log(err);
  }

  }

  const [email , setEmail] = useState("prince.rjb839@gmail.com");
  const [password , setPassword] = useState("Password@123");
  

  const  handelLogin = async()=>{
   await api.post("/login",{emailId:email , password : password},{withCredentials:true});
  }


  return (


    <div>
    <div>
      <input type="email" value={email}  onChange={(e)=>setEmail(e.target.value)} placeholder="Email here " />
      <input type="pass" value={password} placeholder="passWord Here"  onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={handelLogin}>submit</button>
    </div>

    <GoogleLogin onSuccess={(credentialResponse)=>
    clickGoogledata(credentialResponse)
    }/>
    </div>
  );
};
export default App;
