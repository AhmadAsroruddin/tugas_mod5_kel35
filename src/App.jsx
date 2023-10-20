import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Page1 from './pages/first_page.jsx'
import Page2 from './pages/second_page.jsx'
import axios from 'axios'

export const Context = React.createContext(1);

function App() {

  const api_url = 'https://pokeapi.co/api/v2/pokemon/'

  const [data, setData] = useState([]);

  useEffect(() => {
      const getData = async () => {
          await axios.get(api_url).then((res) => { 
              const responseData = res.data.results;
              setData(responseData);
          })
          .catch((error) => {
              window.alert(error); 
          });
      }
      getData();
  }, [])

  return (
    <Context.Provider value={data}>
      <div className='App'>
        <h1>DAFTAR POKEMON KELOMPOK 35</h1>
        <Router>
            <div className="button-container">
              <Link to="/1" className="button">Page 1</Link>
              <Link to="/2" className="button">Page 2</Link>
            </div>
          <Routes>
            <Route path='/' exact element={<Page1 />}></Route>
            <Route path='/1' exact element={<Page1 />}></Route>
            <Route path='/2' exact element={<Page2 />}></Route>
          </Routes>
        </Router>
      </div>
    </Context.Provider>
  )
}

export default App