import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function SimilarProduct({ category }) {
    const [productsData, setProductsData] = useState({
        products: {},
        loading: true,
        error: false
    });


    const getProduct = async () => {
        setProductsData({ ...productsData, loading: true });
        try {
            const response = await fetch(`https://cultwear.onrender.com/products?category=${category}`);
            const data = await response.json();
            data.data.sizes = ['XS', 'S', 'M', 'L', 'XL']
            console.log(data.data);
            setProductsData({ ...productsData, products: data.data, loading: false });
        } catch (error) {
            setProductsData({ ...productsData, error: true, loading: false });
        }
    }

    useEffect(() => {
        getProduct(category);
    }, [category]);

    return (
        <Grid gap={6} templateColumns="repeat(12, 1fr)">
            {
                productsData.loading ? <Text>Loading...</Text> : productsData.error ? <Text>Products Not Found</Text> :
                    productsData.products.map((product, index) => (
                        <GridItem key={index} colSpan={{ base: 12, md: 4, lg: 3, xl: 2}}>
                            <Link to={`/product/${product._id}`}>
                            <Box>
                                <img src={product.images[product.images.length-3]} alt={product.title} />
                                <Text fontSize="xs">{product.title}</Text>
                                <Text fontSize="xs">₹ {product.price}</Text>
                            </Box>
                            </Link>
                        </GridItem>
                    ))

            }
        </Grid>
    )
}

export default SimilarProduct