import React, { useState } from 'react'

const SignIn = () => {
    const [textUserName , setUserName ] = useState("")
    const [textPassword , setPassword] = useState("")

    async function handleSignIn (){
        const respones = await axios.post("Api//SignIn/")
    }


  return (
    <div>
        <form action="">
            <input onChange={(ev)=>{setUserName(ev.target.value)}} type="text" placeholder='User name'/>
            <input onChange={(ev)=>{setPassword(ev.target.value)}} type="text" placeholder='Password'/>
            <button>sign in</button>
        </form>

    </div>
  )
}

export default SignIn