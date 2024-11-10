import React from "react";
import { createContext } from "react";
import data_product from "../Components/Data/data";


export const ShopContext =createContext (null);

const ShopContextProvider = (props) => {
    const contextValue = {data_product}

    return(
        <ShopContext.Provider value={contextValue}> 
        {props.food}   
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;