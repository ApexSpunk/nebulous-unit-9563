import { Link } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { getProducts } from '../Redux/products/actions'
import styles from "../Styles/product.module.css"
const Childs = () => {
    const dispatch = useDispatch()
    const { getProducts: { loading, error }, products } = useSelector(state => state.product)
    useEffect(() => {
        dispatch(getProducts({ category: "Child" }))
    }, [dispatch])
    return (
        <div >
            <div className={styles.smallcontainer}>
                <div>GIRL</div>
                <div>BOY</div>
                <div>BABY GIRL</div>
                <div>BABY BOY</div>
                <div>NEW BORN</div>

            </div>

            <div className={styles.container} >
                {loading ? `loading` :
                    products.map(el => (
                        <Link to={`/product/${el._id}`} key={el._id}>
                            <div className={styles.childs} >
                                <p>
                                    <img src={el.images} alt="image not found" />
                                </p>
                                <div className={styles.price}>
                                    <p>{el.title}</p>
                                    <p>{el.price}</p>
                                </div>
                            </div>
                        </Link>
                    ))



                }
            </div>

        </div>

    )
}

export default Childs