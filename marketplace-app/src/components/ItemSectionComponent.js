import React, { useEffect, useState } from "react";
import ItemComponent from "./ItemComponent";

const axios = require('axios').default;

const ItemSectionComponent = () =>{
    const [items, setItems] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData(){
            const response = await axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                setItems(res.data)
            })
            .catch(console.error);
    }

    return(
        <div className="ItemSectionComponents">
            {items.map((item) => {
                return <ItemComponent source={item.image} priceitem ={item.price} descriptionitem ={item.title}/>
            })}
        </div>
    );
}
export default ItemSectionComponent;