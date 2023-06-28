import React from 'react'

function Product({ total, money, product, basket, setBasket }) {

    const basketİtem = basket.find(item => item.id === product.id)

    const addBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        // Ürün Daha önce eklenmiş
        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        } else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeBasket = () => {
        const currentBasket = basket.find(item => item.id === product.id)
        const basketWithoutCurrent = basket.filter(item => item.id !== product.id)
        currentBasket.amount -= 1

        if (currentBasket.amount === 0) {
            setBasket([...basketWithoutCurrent])
        } else {
            setBasket([...basketWithoutCurrent, currentBasket])
        }

    }





    return (
        <>
            <div className="product">
                <img src={product.image} />
                <h5>{product.title}</h5>
                <div className="price">{product.price} ₺</div>
                <div className="actions">
                    <button className='dmc' disabled={!basketİtem} onClick={removeBasket}>Sat</button>
                    <span className="amount">{basketİtem && basketİtem.amount || 0}</span>
                    <button className='mrt' disabled={total + product.price > money} onClick={addBasket}>Satın Al</button>
                </div>
                <style jsx >{`
                .product {
                    padding: 15px;
                    background: #fff;
                    border: 1px solid #ddd;
                    margin-bottom: 20px;
                    width: 25%;

                }
                .products img {
                   width: 100%;
                   height: 198px;
                }
                .profucts h6{
                    font-size:20px;
                }
                .products .price{
                    font-size: 20px;
                    color: #179b17;
                }
                .products .actions{
                    display:flex;
                    align-items: center;
                }
                `}</style>

            </div>
        </>
    )
}

export default Product
