import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { getProducts } from '../Redux/products/actions'
import styles from "../Styles/product.module.css"
const Womens = () => {
    const dispatch = useDispatch()
    const { loading, data, error } = useSelector(state=>state.product)
    useEffect(() => {
        
        dispatch(getProducts('women'))
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.smallcontainer}>
                <div>VIEW ALL</div>
                <div>DRESSES</div>
                <div>SHIRTS</div>
                <div>TOPS|SWEATERS</div>
                <div>TROUSERS</div>
                <div>SHOES</div>
            </div>
            {loading ? `loading` :
                data.map(el => (
                    <div key={el.id}  >{el.images} {el.title} {el.price} </div>
                ))



            }


        </div>

    )
}

export default Womens