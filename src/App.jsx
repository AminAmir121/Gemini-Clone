import './App.css'
import Container from './components/Container'
import Header from './components/Header'
import Title from './components/Title'
import Search from './components/Search'
import Output from './components/Output'


function App() {
  return(
    <Container>
        <Header></Header>
        <Title></Title>
        <Search></Search>
        <Output></Output>
    </Container>
  )
  
}

export default App