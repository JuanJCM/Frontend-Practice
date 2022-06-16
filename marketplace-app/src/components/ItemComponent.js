import React from "react";

const ItemComponent =(props) =>{
    return (
        <div className="ItemComponent">
            <div className="outborderbox">
                {/**Aqui viene la foto que esperamos de parametro? */}
                <img src={props.source} alt="source" className="Sourceimg"/>
                <p className="Priceitemtext"> $ {props.priceitem}</p>
                <p className="Descriptionitemtext">{props.descriptionitem}</p>
            </div>
        </div>
    );
}
export default ItemComponent;