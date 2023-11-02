import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './App.css'
import api from './api'
import Pokemon from './Pokemon'

const num1 = Math.floor(Math.random() * 100) +1;

function App() {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [term, setTerm] = useState(num1)
  const [error, setError] = useState(null)
  const searchQueryRef = useRef()



  useEffect(() => {
    getPokemon()
  },[])

  const getPokemon = async () => {
    setLoading(true)
    try {
      let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${term}`)
      console.log(response.data[0])
      setResults(response.data)
    } catch (err) {
      console.log(err)
      setError(err)
    }
      setLoading(false)
   }
  
   const handleSubmit = (e) => {
    e.preventDefault()
    getPokemon()
    setTerm('')
   }

  
  return (
    <>
    <h1 className='text-lg font-bold uppercase underline'>Vite + Poketmon Search</h1>
     <form onSubmit={handleSubmit}>
     <input
      type="text" 
      value={term} 
      ref={searchQueryRef}
      onChange={event => setTerm(event.target.value)} />
     <button type='submit'>Search</button>
     {/* <button type='button' onClick={handleClear}>Clear</button> */}
     </form>
    <hr />
    {error && <div className='text-red-700 font-extrabold'> {error.message} </div>}
    {loading ? (<div className='text-blue-700 font-extrabold'> Loading... </div>)
     : ( <Pokemon pokemon={results}/> )
    }
    </>
  )
}

export default App
