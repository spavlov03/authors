import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Header from './components/Header';
import List from './components/List'
import Form from './components/Form'
import Edit from './components/Edit'
import { useState } from 'react';

function App() {
  const [authors,setAuthors] = useState([]); 

  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List authors={authors} setAuthors={setAuthors}/>}/>
          <Route path="/new" element={<Form authors={authors} setAuthors={setAuthors}/>}/>
          <Route path="/edit/:id" element={<Edit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
