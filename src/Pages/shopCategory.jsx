import { useContext } from 'react';
// import '../Pages/CSS/ShopCategory.css';
import './CSS/shopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import { Items } from '../Components/Items/items';

export function ShopCategory(props) {

    const {data_product} = useContext(ShopContext)
    return (
        <>

            <div className="shop-Category">
                <img src="" alt="" />
                <div className="shopcatergory-indexSrt">
                    <p>
                        <span>Showing 1-4</span> out of 10 products
                    </p>
                    <div className="shopcategory-sort">
                        sort by <img src="" alt="dropdown" />
                    </div>
                </div>
                <div className="shopcategory-products">
                    {data_product.map((item, i) => {
                        if(props.category === item.category){
   
                            return <Items key={i} id= {item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>

                        }

                    })}
                </div>
            </div>
        </>
    )
}