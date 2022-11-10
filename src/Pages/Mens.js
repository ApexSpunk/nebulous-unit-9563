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

            <div>
                {loading ? `loading` :
                    data.map(el => (
                        <div key={el.id}  >{el.images} {el.title} {el.price} </div>
                    ))



                }
            </div>

        </div>

    )
}

export default Mens