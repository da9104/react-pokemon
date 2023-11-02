import { useState } from 'react'
import Button from '../components/Button'
import { GoBell } from 'react-icons/go'

function ButtonPage() {
  const handleClick = () => {
    console.log('click')
  }

  return (
    <>
     <h1 className='underline'> Tailwind CSS </h1>
     <Button className="mt-10" success rounded onClick={handleClick} > <GoBell/> Hello</Button> <br/>
     <Button className="bg-red-500" primary >Shop now</Button> < br/>
     <Button warning rounded>Try today</Button> <br />
     <Button secondary>Sign up</Button> <br />
    </>
  )
}

export default ButtonPage
