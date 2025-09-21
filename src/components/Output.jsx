import React from 'react'
import { useSelector } from 'react-redux';
import Loader from './Loader'
import TypingEffect from './TypingEffect'

const Output = () => {

const {Api, loading , error , hasSearched , userPrompt} = useSelector((state)=>state.gemini) 

  
  return (
    <div className='output'
      style={{ opacity: hasSearched ? 1 : 0 }}
    >
        <div className="response">
            {userPrompt && <div className='prompt' >{userPrompt}</div>}
            {loading && <Loader></Loader>}
            {error && <p style={{ color: 'red' }}>{error}</p>}
            { Api && <div className='api' ><br /><TypingEffect text={Api} ></TypingEffect></div>}
        </div>

    </div>
  )
}

export default Output