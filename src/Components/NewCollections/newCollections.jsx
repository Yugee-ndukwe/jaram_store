// import '../NewCollections/newCollections.css'
// import './newCollections.css';
// import './NewCollections/newCollections.css'
import '../NewCollections/newCollections.css';
import { Items } from '../Items/items';
import data_product from '../Data/data';

export default function NewCollections(){
    return(
        <>
            <div className="new-collections">
                <h1>NEW COLLECTION</h1>
                <hr />
                <div className="collections">
                    {data_product.map((item, i) =>{
                       return  <Items key={i} id= {item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                    })}
                </div>

            </div>
        </>
    )
}