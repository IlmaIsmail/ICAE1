
import '../assets/CSS/layout.css';
import { flowers } from './FlowerDB';
import { useState } from 'react';
import Product from './Product';
import Cart from './Cart';

export default function Products(){

    const [cart,setCart]=useState([]);

    const addToCart = (flower) =>{
        const prevailingItem = cart.find((item) => item.id === flower.id)
        if(prevailingItem){
            setItem(
                
                    cart.map((item)=>
                        item.id === flower.id ?
                        {
                            ..cart.item,qty:item.qty +flower.qty
                        } : 
                    )
                
            );
        }else{
            setItem([...cart,{...flower}])
        }
    
    }
   
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        //product
                        flowers.map((flower)=>(
                            <Product 
                                key={flower.id}
                                flower={flower}
                                onChange={addToCart}/>
                        ))
                    }
                </div>

            </div>
            <div className="item3">
                {
                //cart
                }
            </div>
        </>
    );

}