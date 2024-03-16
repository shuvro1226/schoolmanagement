import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [greeting, setGreeting] = useState<string>('');

  const handleFetchGreeting = () => {
    fetch('/api').then(response => response.text()).then(data => {
      setGreeting(data);
    })
  }

  useEffect(() => {
    handleFetchGreeting();
  }, [])

  return (
    <>
      <h1>{greeting}</h1>
    </>
  )
}

export default App
