import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from "react-redux"
import { Link } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../Redux/products/actions'
import styles from "../Styles/product.module.css"

const filtercolor = ['red',"blue","black","green","pink","white"]
const Womens = () => {
    const dispatch = useDispatch()
    const { getProducts: { loading, error }, products } = useSelector(state => state.product)
    const [selectedColor, setSelectedColor] = useState([])
    const [isOpen, setIsOpen] = useState({filter:false,color:false,price:false})
    useEffect(() => {
        dispatch(getProducts({ category: "Womens" }))
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

            <div>
               <p onClick={()=>setIsOpen({...isOpen,filter:!isOpen.filter})}>FILTER</p> 
                {
                    isOpen.filter ? <div >
                    <div className={styles.filtercolor}><p>COLOUR</p> <button color='red'>+</button></div>
                    <div className={styles.filtercolordiff} >
                        {filtercolor.map(el => <p onClick={() => {
                            if(selectedColor.includes(el)) {
                                const l = selectedColor.filter(item => item !== el);
                                setSelectedColor([...l])
                            }else {
                                setSelectedColor([...selectedColor, el.toLowerCase()]);
                            }
                        } } style={{ backgroundColor: selectedColor.includes(el) ? '#ddd' : '' }} className={styles.color}>{el}</p>)}
                    </div>
                </div> : null
                }
            </div>



            <div className={styles.container}>
                {loading ? `loading` :
                    products.filter( product => {
                        if(selectedColor.length === 0) return true;
                        if(selectedColor.includes(product.color.toLowerCase())) return true;
                        return false;
                    }
                    ).map(el => (
                        <Link to={`/product/${el._id}`} key={el._id}>
                            <div className={styles.childs}  >
                                <p><img src={el.images[el.images.length - 4]} alt="image not found" /></p>
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