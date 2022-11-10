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
                    data.map(el => (
                        <div key={el.id} className={styles.childs} >
                            <p>
                         <img src={el.images} alt="image not found" />
                            </p>
                            
                            <div className={styles.price}><p>{el.title}</p> <p>{el.price}</p></div> </div>
                    ))



                }
            </div>

        </div>

    )
}

export default Childs