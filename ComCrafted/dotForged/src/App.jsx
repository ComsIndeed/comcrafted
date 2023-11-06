import { useState } from 'react'

function App() {

  return (
    <>

    <NavigationBar header="dotForge" />

    <Card></Card>
    
    </>
  )
}

function NavigationBar(props) {
  return (
    <>
    <div className='navBar'>
      <h1> {props.header} </h1>
    </div>
    </>
  )
}

function Card() {
  return (
    <>
    <div className='card'>
      <h3>Title</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis voluptas consequatur labore consequuntur sit fugiat ipsam rerum beatae odit iusto deserunt eaque officia molestias pariatur, quas corporis similique assumenda perspiciatis!</p>
    </div>
    </>
  )
}











export default App