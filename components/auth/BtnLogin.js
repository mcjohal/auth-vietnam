import React, {useState} from 'react'
import {signIn} from 'next-auth/client';

const BtnLogin = ({ children, provider, bgColor, txtColor, csrfToken, options }) => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await signIn(provider.id, options);
    setLoading(false);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="hidden" name="csrfToken" defaultValue={csrfToken} />
      {children}
        <button type="submit" className="btn w-100 my-2 py-3"
        style={{background:`${bgColor}`, color:`${txtColor}`,fontSize:'1rem',fontWeight:'700'}}>
            Sign in with {provider.name}
        </button>
    </form>
  )
}
BtnLogin.defaultProps={
    txtColor:'#eee'
}
export default BtnLogin