import { Box, Button, Grid, Heading } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import AddProduct from './AddProduct';
import SingleProduct from './SingleProduct'

function Products() {

  const [products, setProducts] = useState([])

  const updateProduct = async (id, product) => {
    const response = await fetch(`https://cultwear.onrender.com/products/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'token': '636aad2323c2e54f773ad8f9:chandan@gmail.com:123'
      },
      body: JSON.stringify(product)
    });
    const data = await response.json();
    
    setProducts(products.map((product) => product._id === id ? data.data : product))
  }

  const deleteProduct = async (id) => {
    await fetch(`https://cultwear.onrender.com/products/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'token': '636aad2323c2e54f773ad8f9:chandan@gmail.com:123'
      }
    });
    setProducts(products.filter((product) => product._id !== id))
  }

  const addProduct = async (product) => {
    console.log(product)
  }

  const getProducts = async () => {
    const response = await fetch('https://cultwear.onrender.com/products');
    const data = await response.json();
    setProducts(data.data);
  }

  useEffect(() => {
    getProducts();
  }, [])


  return (
    <Box p={4}>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Heading as="h2" size="lg" mb={4}>
          Products
        </Heading>
        <AddProduct type="add" addProduct={addProduct} />
      </Box>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {
          products.map((product) => (
            <SingleProduct key={product._id} product={product} updateProduct={updateProduct} deleteProduct={deleteProduct} addProduct={addProduct} />
          ))
        }
      </Grid>
    </Box>
  )
}

export default Products