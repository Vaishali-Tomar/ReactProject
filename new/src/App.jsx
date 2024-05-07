import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Color1 from './Components/Color1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Color1 text ="#ff6663" name="PINK" />
      <Color1 text ="#333333" name="GRAY" />
      <Color1 text ="#000000" name="BLACK" />
      <Color1 text ="#388814" name="GREEN" />
      <Color1 text ="#C90808" name="RED" />
      <Color1 text ="#FF8000" name="ORANGE" />
      <Color1 text ="#FFF500" name="YELLOW" />
      <Color1 text ="#CCCCCC" name="LIGHT GRAY" />
      <Color1 text ="#7E41A2" name="PURPLE" />
      <Color1 text ="#C14911" name="BROWN" />
    </div>
  )
}

export default App
