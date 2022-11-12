import { Box, Button, Flex, Grid, GridItem, Image, Text, useToast } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addProductToCart } from '../Redux/cart/actions';
import { getProducts, getSingleProduct } from '../Redux/products/actions';
import SimilarProduct from './SimilarProduct';

function Product() {

    const { id } = useParams();
    const dispatch = useDispatch()
    const { getProduct: { loading, error }, singleProduct } = useSelector(state => state.product)
    const { carts } = useSelector(state => state.cart)
    useEffect(() => {
        dispatch(getSingleProduct(id))
        dispatch(getProducts({ category: singleProduct.category  }))
    }, [id, dispatch])
    singleProduct.sizes = ["S", "M", "L", "XL", "XXL"]
    const { title, price, images, description, color, sizes } = singleProduct;
    const toast = useToast()

    return (
        <Box>
            {
                loading ? <Text>Loading...</Text> : error ? <Text>Error</Text> :
                    <Box>
                        <Grid templateColumns="repeat(7, 1fr)" gap={6} mx={{ base: '0', md: '10', lg: '20', xl: '28' }} >
                            <GridItem colSpan={2} placeItems='end' display={{ base: 'none', lg: 'grid' }}>
                                <Box ml='0' mr='20' mb='6'>
                                    <Text fontSize="md" fontWeight='semibold'>MATERIALS, CARE AND ORIGIN</Text>
                                    <Text fontSize="sm" fontWeight='semibold' my={4}>JOIN LIFE</Text>
                                    <Text fontSize="sm" my={2}>Care for fiber: at least 25% recycled polyester.</Text>
                                    <Text fontSize="sm" my={2}>We use the Join Life label on clothing that is produced using technology and raw materials that help us to reduce the environmental impact of our products.</Text>
                                    <Text fontSize="sm" fontWeight='semibold' my={4}>MATERIALS</Text>
                                    <Text fontSize="sm" my={2}>We work with monitoring programmes to ensure compliance </Text>
                                    <Text fontSize="sm" my={2} textDecoration="underline">View More</Text>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={{ base: 7, sm: 7, md: 4, lg: 3 }} mx={{ base: 10, md: 0 }} >
                                <Box h='85vh' mb='6vh' w='100%' display={{ base: 'none', md: 'block' }} overflowY='scroll' overflowX='hidden' >
                                    {
                                        images.map((image, index) => (
                                            <Image key={index} src={image} alt={title} />
                                        ))
                                    }
                                </Box>
                                <Box display={{ base: 'block', md: 'none' }}>
                                    <Image src={images[0]} alt={title} />
                                </Box>
                            </GridItem>
                            <GridItem colSpan={{ base: 7, sm: 7, md: 3, lg: 2 }} flexDirection='column' justifyContent='space-between' display='grid' placeItems='end'>
                                {
                                    <Box p={4} mr='2' mb='4'>
                                        <Text fontSize="md" fontWeight='semibold'>{title}</Text>
                                        <Text fontSize="sm" my={2}>{description}</Text>
                                        <Text fontSize="sm" my={2}>{color.toUpperCase()} | 3067/206</Text>
                                        <Text fontSize="sm" mt={2}>₹ {price.toLocaleString()}</Text>
                                        <Text fontSize="xs" color='gray.500' mb={6}>MRP incl. of all taxes</Text>
                                        <Box h='1px' bg='gray.200' mb={6}></Box>
                                        {
                                            sizes.map((size, index) => (
                                                <Box key={index} display='flex' justifyContent='space-between' alignItems='center' mb={2} cursor='pointer' _hover={{ bg: 'gray.50' }} p='1' borderRadius='md'>
                                                    <Text fontSize="xs">{size}</Text>
                                                    <Box w='20px' h='20px' borderRadius='50%' bg='gray.200'></Box>
                                                </Box>
                                            ))
                                        }
                                        <Box h='1px' bg='gray.200' mt='4' mb={2}></Box>
                                        <Text fontSize="xs" >This product has a larger fit than usual.</Text>
                                        <Box h='1px' bg='gray.200' mt='2' mb='2'></Box>
                                        <Flex justifyContent='space-between' alignItems='center'>
                                            <Text fontSize="xs" >FIND YOUR SIZE</Text>
                                            <Text fontSize="xs" color='gray.500'>SIZE GUIDE</Text>
                                        </Flex>
                                        <Box h='1px' bg='gray.200' mt='2' mb={6}></Box>
                                        <Button onClick={() => {
                                            dispatch(addProductToCart(id))
                                            // find product in cart
                                            console.log(carts)
                                            const product = carts.find(product => product.productId === id)
                                            // if product is in cart
                                            if (product) {
                                                toast({
                                                    title: `${title} is already in your cart.`,
                                                    description: "We have updated the quantity.",
                                                    status: "warning",
                                                    duration: 2000,
                                                    isClosable: true,
                                                })
                                            }else{
                                                toast({
                                                    title: `${title} is added to your cart.`,
                                                    description: "Please check your cart.",
                                                    status: "success",
                                                    duration: 2000,
                                                    isClosable: true,
                                                })
                                            }

                                        }} mt='2' p='5' w='full' bg='black' rounded='none' size="sm" color='white' _hover={{ bg: 'black' }} _active={{ bg: 'black' }} _focus={{ bg: 'black' }}>ADD TO BAG</Button>
                                        <Text fontSize="xs" mt='8' mb='2'>CHECK IN-STORE AVAILABILITY</Text>
                                        <Text fontSize="xs" my='2'>DELIVERY, EXCHANGES AND RETURNS</Text>
                                    </Box>
                                }
                            </GridItem>
                        </Grid>
                        <Box p={4} ml='8' mr='2' mb='4'>
                            <Text fontSize="md" fontWeight='semibold'>OTHER YOU MIGHT LIKE</Text>
                            <SimilarProduct />
                        </Box>
                    </Box>
            }
        </Box>
    )
}

export default Product