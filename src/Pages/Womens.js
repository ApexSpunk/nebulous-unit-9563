import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { getProductsByCategory } from '../Redux/products/actions'
import styles from "../Styles/product.module.css"
const Womens = () => {
    const dispatch = useDispatch()
    const { getProductsByCategory: { loading, error }, products } = useSelector(state => state.product)
    useEffect(() => {
        dispatch(getProductsByCategory("Womens"))
    }, [dispatch])
    return (
        <div >
            <div className={styles.smallcontainer}>
                <div>VIEW ALL</div>
                <div>DRESSES</div>
                <div>SHIRTS</div>
                <div>TOPS|SWEATERS</div>
                <div>TROUSERS</div>
                <div>SHOES</div>
            </div>
            <div className={styles.container}>
                {loading ? `loading` :
                    products.map(el => (
                        <Link to={`/product/${el._id}`} key={el._id}>
                            <div className={styles.childs}  >
                                <p><img src={el.images[el.images.length - 3]} alt="image not found" /></p>
                                <div className={styles.price}>
                                    <p>{el.title}</p>
                                    <p>₹{el.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))



                }
            </div>

        </div>

    )
}

export default Womens