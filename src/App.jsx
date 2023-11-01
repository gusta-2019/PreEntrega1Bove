import NavBar from './components/NavBar/NavBar'
import Banner from './components/Banner/banner'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Home from './components/Home/Home'
function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Banner/>
      <ItemListContainer greeting = {'Bienvenidos'}/>
      <Home />
    </div>
  )
}

export default App
