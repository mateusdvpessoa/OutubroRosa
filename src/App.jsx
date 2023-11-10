import Header from './Components/Header'
import { useState } from 'react'
import { createGlobalStyle } from 'styled-components'
import MainComponent from './Components/MainComponent'
import Footer from './Components/Footer'

function App() {

  const GlobalStyle = createGlobalStyle
  `
    *{
      padding:0;
      margin:0;
      box-sizing:border-box;
      font-family: 'Caveat', cursive;
    }  
  `

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <MainComponent/>
      <Footer/> 
    </>
  )
}

export default App
