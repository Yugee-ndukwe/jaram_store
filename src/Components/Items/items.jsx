import '../Items/items.css'

export function Items({image,name,new_price,old_price}) {
    return (
        <>
        <div className="items">
            <img src={image} alt="" />
            <p>{name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${new_price}
                </div>
                <div className="item-price old">
                    ${old_price}

                </div>
            </div>
        </div>
        </>
    )
}