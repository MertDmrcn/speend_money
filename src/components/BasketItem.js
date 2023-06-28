import React from 'react'

function BasketItem({ item, product }) {
    return (
        <div className='toplam'>
            {product.title} x {item.amount}
        </div>
    )
}

export default BasketItem
