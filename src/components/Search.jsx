import React from 'react'
import { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { Fetching, setUserPrompt } from '../store/store';

const Search = () => {

  const UserInp = useRef();
  const dispatch = useDispatch();

  const Enter = (event)=>{
    if (event.key === 'Enter') {
      const search  = UserInp.current.value;
      dispatch(setUserPrompt(search))
      dispatch(Fetching(search));
      UserInp.current.value = " ";
    }
  }

  return (
    <div className='search'>

        <div className="input">
            <input type="text"  id="Inp" placeholder='Ask Me Anything!'  ref={UserInp} onKeyDown={Enter} />
        </div>
        
    </div>
  )
}

export default Search