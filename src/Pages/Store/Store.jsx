import { Box, Grid, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Link, useSearchParams } from 'react-router-dom'
import { getProducts } from '../../Redux/products/actions'
import styles from "./Store.css"

const filtercolor = ['red', "blue", "black", "green", "orange", "white"]
const filterprice = ["2000-3000", "4000-6000", "6000-8000", "8000-10000", "10000-14000", "15000-200000"]
const ProductsData = () => {
    const dispatch = useDispatch()
    const { getProducts: { loading, error }, products } = useSelector(state => state.product)
    const [selectedColor, setSelectedColor] = useState([])
    const [selectedprice, setSelectedprice] = useState('')
    const [isOpen, setIsOpen] = useState({ filter: false, color: false, price: false })

    const [searchParams, setSearchParams] = useSearchParams()
    var category = searchParams.get('category')

    useEffect(() => {
        if (category) {
            dispatch(getProducts({ category: category.charAt(0).toUpperCase() + category.slice(1) }))
        } else {
            dispatch(getProducts())
        }
    }, [category])
    return (
        <div>
            <Box justifyContent='center' gap='6' mx='auto' mt='4' display='flex' w='60%'>
                <div>VIEW ALL</div>
                <div>DRESSES</div>
                <div>SHIRTS</div>
                <div>TOPS|SWEATERS</div>
                <div>TROUSERS</div>
                <div>SHOES</div>
            </Box>

            <Box mx={{ base: 0, md: 10, lg: 20, xl: 24 }}>
                <Text cursor='pointer' align='right' my='4' onClick={() => setIsOpen({ ...isOpen, filter: !isOpen.filter })}>FILTER</Text>
                {
                    isOpen.filter ? <Box align='right' my='4' >
                        <Box >
                            <Box position='absolute' zIndex='20' right='10' p='8' bg='white' width='300px'>
                                <Box cursor='pointer' className={styles.filtercolor} onClick={() => setIsOpen({ ...isOpen, color: !isOpen.color })}>
                                    <p>COLOUR</p> <button >+</button>
                                </Box>
                                {isOpen.color ? <Box bg='white' className={styles.filtercolordiff} >
                                    {filtercolor.map(el => <p onClick={() => {
                                        if (selectedColor.includes(el)) {
                                            const l = selectedColor.filter(item => item !== el);
                                            setSelectedColor([...l])
                                        } else {
                                            setSelectedColor([...selectedColor, el.toLowerCase()]);
                                        }
                                    }} style={{ backgroundColor: selectedColor.includes(el) ? '#ddd' : '' }} className={styles.color}>{el}</p>)}
                                </Box> : null}
                                <div cursor='pointer' className={styles.filtercolor} onClick={() => setIsOpen({ ...isOpen, price: !isOpen.price })}>PRICE <button >+</button></div>
                                {isOpen.price ? <Box className={styles.filtercolordiff} >
                                    {filterprice.map(el => <Text onClick={() => setSelectedprice(el)}
                                        style={{ backgroundColor: selectedprice === el ? "#ddd" : "" }}
                                        className={styles.color}>{el}</Text>)}
                                </Box> : null}
                            </Box>
                        </Box>
                    </Box> : null

                }
            </Box>



            <Grid templateColumns="repeat(4, 1fr)" gap={6} mx={{ base: 0, md: 10, lg: 20, xl: 24 }} >
                {loading ? `loading` :
                    products
                        .filter(product => {
                            if (selectedColor.length === 0) return true;
                            if (selectedColor.includes(product.color.toLowerCase())) return true;
                            return false;
                        })
                        .filter(product => {
                            if (!selectedprice) return true;
                            const priceRange = selectedprice.split('-').map(Number);
                            if (product.price >= priceRange[0] && product.price <= priceRange[1]) return true;
                            return false;
                        })
                        .map(el => (
                            <Link to={`/product/${el._id}`} key={el._id}>
                                <div className={styles.childs}  >
                                    <p><img src={el.images[el.images.length - 3]} alt="image not found" /></p>
                                    <div className={styles.price}>
                                        <Text fontSize='xs'>{el.title}</Text>
                                        <Text fontSize='xs' ml='4'>₹{el.price}</Text>
                                    </div>
                                </div>
                            </Link>
                        ))
                }
            </Grid>

        </div>

    )
}

export default ProductsData