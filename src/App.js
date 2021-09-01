import logo from './logo.svg';
import './App.css';
import Student from './modules/Student'
import Header from './components/Header/header'
import{useSelector} from 'react-redux'

function App() {
  const store= useSelector(store=>store)
  console.log('store', store)
  return (
    <div className="App">
      <Header/>
     <Student/>
    </div>
  );
}

export default App;
