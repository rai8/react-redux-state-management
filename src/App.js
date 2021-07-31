import { BrowserRouter, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Counter from './screens/Counter'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={Counter} />
    </BrowserRouter>
  )
}

export default App
