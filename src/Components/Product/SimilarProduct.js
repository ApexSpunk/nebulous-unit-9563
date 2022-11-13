import { Box, Grid, GridItem, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function SimilarProduct() {
    const dispatch = useDispatch();
    const { getProducts: { loading, error }, products } = useSelector(state => state.product );
    return (
        <Grid gap={6} templateColumns="repeat(12, 1fr)">
            {
                loading ? <Text>Loading...</Text> : error ? <Text>Products Not Found</Text> :
                    products.map((product, index) => (
                        <GridItem key={index} colSpan={{ base: 12, md: 4, lg: 3, xl: 2 }}>
                            <Link to={`/product/${product._id}`}>
                                <Box>
                                    <img src={product.images[product.images.length - 3]} alt={product.title} />
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