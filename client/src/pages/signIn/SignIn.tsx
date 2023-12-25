import React, { useState } from 'react'

const SignIn = () => {
    const [textUserName , setUserName ] = useState("")
    const [textPassword , setPassword] = useState("")

    async function handleSignIn (){
      try {
        const respones = await axios.post("Api//SignIn/")
        
      } catch (error) {
        console.error(error)
      }
    }


  return (
    <div>
        <form onSubmit={handleSignIn}>
            <input name='userName' className="userNameInput" onChange={(ev)=>{setUserName(ev.target.value)}} type="text" placeholder='User name'/>
            <input name='password' className="passwordInput" onChange={(ev)=>{setPassword(ev.target.value)}} type="text" placeholder='Password'/>
            <button type='submit'>Sign in</button>
        </form>

    </div>
  )
}

export default SignIn