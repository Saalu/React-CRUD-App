import React from 'react'
import ItemList from './ItemList'
import {Link} from 'react-router-dom'

function Item({items, deleteHandler}) {

    const renderList = items.map(item => {

       return <ItemList  key={item.id} item={item}  deleteHandler={deleteHandler}/>
    })


    
  

    return (
        <div className='container'>
            <div className="d-flex">
            <h3 className='display'>List Items</h3>
            <Link to='/add' style={{color:'inherit', textDecoration:'none'}} >
                <button type="submit" className="btn btn-primary">Add Item</button>
            </Link>
            </div>
            {renderList.length > 1 ? renderList : 'No Items Available'}
        </div>
    )
}

export default Item
