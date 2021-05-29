import React,{useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
} from "react-router-dom";
import api from './api'
import {uuid} from 'uuidv4'
import './App.css'
import CreateItem from './components/CreateItem';
import Item from './components/Item';
import UpdateItem from './components/UpdateItem';


function App() {
 const [items, setItems] = useState([])
 const [search, setSearch] = useState('')
  
// READ
 const getHandler = async()=> {
  const res = await api.get('/items')
    return res.data
 }

// CREATE
 const addHandler = async(input)=> {
   const payload = {id:uuid(), ...input}
   const res = await api.post('/items', payload)
   
    setItems([...items, res.data])
 }
// UPDATE
 const updateHandler = async(clickedItem)=> {
   const res = await api.put(`/items/${clickedItem.id}`, clickedItem)
   const {id, name} = res.data;
   const newItem = items.map(item => {
      return item.id === id ? res.data : clickedItem
   })

   setItems(newItem)
 }
// UPDATE
 const deleteHandler = async(id)=> {
    await api.delete(`/items/${id}`)
    const newItems = items.filter(item => {
      return item.id !== id
    })
    setItems(newItems)
 }


 useEffect(() =>{
      const  getItems= async()=>{
      const  allItems= await getHandler()
      if(allItems) setItems(allItems)

    }
    getItems()
 },[])
 

  return (
    <div className="">
      <Router>
        <Link to='/' style={{color:'inherit', textDecoration:'none'}}>
        <h1 className='text-center mb-4'>App Item Management</h1>
        </Link>
      <Switch>

        <Route path='/add' exact 
        render={(props) => 
        (<CreateItem  {...props} 
        addHandler={addHandler}
        />
        )} 
        />

        <Route path='/' exact 
        render={(props) => 
        (<Item  {...props} 
          items={items}
          deleteHandler={deleteHandler}
        />
        )} 
        />

          <Route path='/edit' exact   
          render={(props) => (<UpdateItem {...props} 
            updateHandler={updateHandler}
            />)}
          />    
            </Switch>   
      </Router>  
    </div>
  );
}

export default App;
