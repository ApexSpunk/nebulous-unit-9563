import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { getProducts } from '../Redux/products/actions'
import styles from "../Styles/product.module.css"
const Childs = () => {
    const dispatch = useDispatch()
    const { loading, data, error } = useSelector(state => state.product)
    useEffect(() => {

        dispatch(getProducts('Child'))
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.smallcontainer}>
                <div>GIRL</div>
                <div>BOY</div>
                <div>BABY GIRL</div>
                <div>BABY BOY</div>
                <div>NEW BORN</div>
                
            </div>

            <div  >
                {loading ? `loading` :
                    data.map(el => (
                        <div key={el.id} className={styles.childs} >
                            <p>


                            <img src="https://static.zara.net/photos///2022/I/0/3/p/5802/702/664/103/w/1920/5802702664_1_1_1.jpg?ts=1656589941127" alt="image not found" />
                            </p>
                            
                             {el.title} {el.price} </div>
                    ))



                }
            </div>

        </div>

    )
}

export default Childs