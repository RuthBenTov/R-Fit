import axios from 'axios'
import React, { useState } from 'react'

const SignIn = () => {
    const [textUserName , setUserName ] = useState("")
    const [textPassword , setPassword] = useState("")

    async function handleSignIn (userName:string, password:string){
      try {
      
        const {data} = await axios.post("/API/users/add-user" , {userName, password})
        
        if(data === "OK")
        console.log(userName +  password +"-------success")
        
      } catch (error) {
        console.error(error)
      }
    }


  return (
    <div>
        <form onSubmit={(ev)=>{
          ev.preventDefault();
          handleSignIn(textUserName, textPassword)}}>
            <input name='userName' className="userNameInput" onChange={(ev)=>{setUserName(ev.target.value)}} type="text" placeholder='User name'/>
            <input name='password' className="passwordInput" onChange={(ev)=>{setPassword(ev.target.value)}} type="text" placeholder='Password'/>
            <button type='submit'>Sign in</button>
        </form>

    </div>
  )
}

export default SignIn