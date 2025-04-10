import React from 'react'
import Nav from './components/Nav/Nav'
import CH from './components/ContactHeader/CH'
import Form from './components/contactForm/Form'


const App = () => {
  return (
    <div>
      <Nav />
      <main className="main_container">
      <CH />
      <Form />
      </main>

    </div>
  )
}

export default App