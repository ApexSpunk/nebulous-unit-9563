import { Box, Button, Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function Product() {

    const { id } = useParams();
    const [productState, setProductState] = useState({
        product: {},
        loading: true,
        error: false
    });

    const { title, price, description, images, color, category, sizes } = productState.product;

    const getProduct = async (id) => {
        setProductState({ ...productState, loading: true });
        try {
            const response = await fetch(`https://cultwear.onrender.com/products/${id}`);
            const data = await response.json();
            data.data.sizes = ['XS', 'S', 'M', 'L', 'XL']
            setProductState({ ...productState, product: data.data, loading: false });
        } catch (error) {
            setProductState({ ...productState, error: true, loading: false });
        }
    }

    useEffect(() => {
        getProduct(id);
    }, [id]);


    return (
        <Box>
            {
                productState.loading ? <Text>Loading...</Text> :
                    productState.error ? <Text>Error</Text> :
                        <Grid templateColumns="repeat(7, 1fr)" gap={6} mx={28}>
                            <GridItem colSpan={2} display='grid' placeItems='end'>
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
                            <GridItem colSpan={3}>
                                <Box h='89vh' my='6vh' w='100%' overflowY={'scroll'} >
                                    {
                                        images.map((image, index) => (
                                            <img key={index} src={image} alt={title} />
                                        ))
                                    }
                                </Box>
                            </GridItem>
                            <GridItem colSpan={2} flexDirection='column' justifyContent='space-between' display='grid' placeItems='end'>
                                {
                                    <Box p={4} ml='8' mr='2' mb='4'>
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
                                        <Button mt='2' p='5' w='full' bg='black' rounded='none' size="sm" color='white' _hover={{ bg: 'black' }} _active={{ bg: 'black' }} _focus={{ bg: 'black' }}>ADD TO BAG</Button>
                                        <Text fontSize="xs" mt='8' mb='2'>CHECK IN-STORE AVAILABILITY</Text>
                                        <Text fontSize="xs" my='2'>DELIVERY, EXCHANGES AND RETURNS</Text>
                                    </Box>
                                }
                            </GridItem>
                        </Grid>
            }
        </Box>
    )
}

export default Product