
import './App.css'
import Lists from './components/Lists';
import SimpleSlider from './components/ListsSlider';
import Search from './components/Search';
import { useGetContext } from "./components/getContext";


function App() {
  const { newData } = useGetContext();
  return (

    <div className="App">
      <SimpleSlider />
      <Search />
      <Lists />
    </div>
  )
}

export default App
