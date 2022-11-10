import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { getProducts } from '../Redux/products/actions'
import styles from "../Styles/product.module.css"
const Mens = () => {
    const dispatch = useDispatch()
    const { getProducts: { loading, error }, products } = useSelector(state => state.product)
    useEffect(() => {
        dispatch(getProducts({ category: "Mens" }))
    }, [dispatch])
    return (
        <div className={styles.container}>
            {loading ? `loading...` :
                products.map(el => (
                    <Link to={`/product/${el._id}`} key={el._id}>
                        <div key={el._id} className={styles.childs} >
                            <p>
                                <img src={el.images[el.images.length - 3]} alt="image not found" />
                            </p>
                            <div className={styles.price}>
                                <p>{el.title}</p>
                                <p>₹{el.price}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default Mens