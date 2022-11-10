import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { getProducts } from '../Redux/products/actions'
import styles from "../Styles/product.module.css"
const Mens = () => {
    const dispatch = useDispatch()
    const { loading, data, error } = useSelector(state => state.product)
    useEffect(() => {

        dispatch(getProducts('Mens'))
    }, [])
    return (
        <div className={styles.container}>


                {loading ? `loading` :

                    data.map(el => (
                        <div key={el.id} className={styles.childs} >
                            <p >

                             
                                <img src={el.images[1]} alt="image not found" />
                            </p>


                        <div className={styles.price}>  <p>{el.title} </p> <p>₹{el.price}</p> </div></div>
                    ))



                }

        </div>

    )
}

export default Mens