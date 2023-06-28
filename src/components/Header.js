import React from 'react'
import { moneyFormat } from './Helpers'

function Header({ total, money }) {
    return (
        <>
            <div className="header">
                {total > 0 && money - total !== 0 && (
                    <>
                        Harcayacak <span>{moneyFormat(money - total)}</span> ₺  paranız var!
                    </>
                )}
                {total === 0 && (
                    <div className='spandMoney'>Harcamak İçin <span>{moneyFormat(money)}</span> ₺ paranız var!</div>
                )}
                {money - total === 0 && (
                    <div className='andmoney'>Paranız Bitti !</div>
                )}
                <style jsx>{`
                .header{
                    background: linear-gradient(to bottom,#20b820,#14be2a);
                    height: 80px;
                    display:flex;
                    align-items: center;
                    justify-content:center;
                    color: white;
                    font-size: 24px
                    letter-spacing: 1 px;
                    position: sticky;
                    top:0px;
                }
                .andmoney{
                    color:red;
                    font-size: 25px;
                    font-weight: bold;
                }
                .header span{
                    margin: 0 10px;
                    font-weight: bold;
                    font-size: 30px;

                }
                .spandMoney{
                    font-size: 30px
                }
                
                `}

                </style>
            </div>
        </>
    )
}

export default Header
