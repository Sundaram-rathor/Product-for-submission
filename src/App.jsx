import React from 'react'
import { BrowserRouter , Route, Routes  } from 'react-router-dom';
import Tag from './componets/tag/Tag'
import IndivProduct from './componets/indivProduct/IndivProduct';
import Home from './componets/home/Home'
import Sorted from './componets/Sorted/Sorted';

function App() {
  
  return (
    <div>
      <BrowserRouter>
      <Tag/>
      <Routes>
        <Route path='/' element={<Home/>}/> 
        <Route path='/product/:productId' element={<IndivProduct/>}/>
        <Route path='/sorted' element={<Sorted/>}/>
      </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App