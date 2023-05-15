import { Fragment, useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Frase from './Frase'

const Button = styled.button`
background: -webkit-linear-gradient( left, #007d35 0%, #007d35 40%, #0f574e 100%);
background-size: 300px;
font-family: arial, Helvetica,sans-serif;
color: #fff;
margin-top: 3rem;
padding: 1rem 3rem ;
font-size: 2rem;
border: solid 2px black;
`

const Contenedor = styled.div`
display: flex;
align-items: center;
padding-top: 5rem;
flex-direction: column;
`





function App() {
 
  const [phrase, setPhrase] = useState("")



  const getPhrase = async () => {
   let api = await fetch("https://api.breakingbadquotes.xyz/v1/quotes")
    let result = await api.json()
    setPhrase(result[0])
    
   
   }

   useEffect(() => {
    getPhrase()
  },[])
   
  return (
    <Contenedor>
      <Frase phrase={phrase}/>
      <Button onClick={getPhrase}>
    obtener frase
   </Button>
    </Contenedor>
   
  )
}

export default App
