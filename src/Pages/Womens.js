import React, { useEffect } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { getProducts } from '../Redux/products/actions'
import styles from "../Styles/product.module.css"
const Womens = () => {
    const dispatch = useDispatch()
    const { loading, data, error } = useSelector(state=>state.product)
    useEffect(() => {
        
        dispatch(getProducts('Womens'))
    }, [])
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
            <div  className={styles.container}>
            {loading ? `loading` :
                data.map(el => (
                    <div key={el.id} className={styles.childs}  >
                        <p><img src={el.images[1]} alt="image not found" /></p>
                        <div className={styles.price}><p>{el.title}</p> <p>₹{el.price}</p> </div> </div>
                ))



            }
</div>

        </div>

    )
}

export default Womens