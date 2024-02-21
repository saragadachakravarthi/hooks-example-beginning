import {useState} from 'react'
import './index.css'

const GreetUser = () => {
  const [name, setName] = useState(' ')
  const onChangeName = event => setName(event.target.value)
  console.log()
  return (
    <div className='main-container'>
      <div className='sec-main-container'>
        <div className='input-container'>
      <input className='input'
        type="text"
        placeholder="Your name"
        value={name}
        onChange={onChangeName}
      />
      </div>
      <h1 className='heading'>
        Hello <span className='spanbro'>{name}</span>
      </h1>
      </div>
    </div>
  )
}

export default GreetUser
