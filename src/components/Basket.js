import React from 'react'
import BasketItem from './BasketItem'

function Basket({ basket, resetBasket, total, products }) {
    return (

        <>
            {basket.map(item => (
                <BasketItem item={item} product={products.find(p => p.id === item.id)} />
            ))}

            <div className='toplam'>
                Toplam: {total} ₺
            </div>
            <button onClick={resetBasket}>Sepete Sıfırla</button>
        </>

    )
}

<style jsx >{`
.toplam {
    align-center: center;
    

}

`}</style>

export default Basket
