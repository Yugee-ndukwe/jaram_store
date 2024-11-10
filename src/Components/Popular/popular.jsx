import '../Popular/popular.css'
import data_product from '../Data/data'
import {Items} from '../Items/items'

export function Popular() {
    return(
        <>
        <div className="popular">
            <h1>Popular Stock</h1>
            <hr />
            <div className="popular-items">
                {data_product.map((item, i)=>{
                    return <Items key={i} id= {item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
            
        </div>
        </>
    )
}