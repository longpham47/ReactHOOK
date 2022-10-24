import React, { useMemo, useState } from 'react'
import Cart from './Cart';




export default function useMemoDemo() {
    let [like, setLike] = useState(0)

    let cart = [
        { id: 1, name: 'iphone', price: 1000 },
        { id: 2, name: 'htc phone', price: 2000 },
        { id: 3, name: 'lg phone', price: 3000 }
    ];



    //! useMemo : LƯU lại các biến kiểu array và obj
    let cartMemo = useMemo(() => {
        return cart
    }, [])

    return (
        <div className='container pt-5'>
            <div className="card w-75">
                <div className="card-body">
                    like : <span>{like}</span> <span onClick={() => {
                        setLike(like + 1)
                    }} style={{ cursor: "pointer" }}>❤️</span>
                </div>
                <Cart cart={cartMemo} />
            </div>

        </div>
    )
}
