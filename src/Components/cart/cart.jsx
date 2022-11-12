import {Box, Flex} from "@chakra-ui/react"
import { useSelector } from "react-redux"
import CartSingleCard from "./cartSingleCard"
export default function Cart(){
   let {carts}=useSelector((store)=>store.cart)
   console.log(carts)
   
    return (
        <Box display={"grid"} justifyItems={"flex-end"} mt={100} p={10}>
           <Box display={"flex"}  w="100%" overflowX={"hidden"} scrollBehavior={"smooth"}>
            <Box display={"flex"} flexDirection={{base:"column",md:"row"}}
             css={{
                '&::-webkit-scrollbar': {
                  width: '1px',
                },
                '&::-webkit-scrollbar-track': {
                  width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                  
                  borderRadius: '24px',
                },
              }}
              ///
            
            overflow={"auto"}>
            {carts.map((el)=>{
                return (
                    <Box key={el.id}>
                <CartSingleCard {...el.productId} _id={el._id} quantity={el.quantity} />
                </Box>
                )
            })}
            
            
           </Box >
           </Box>
           <Box>
              <Flex>

              </Flex>

           </Box>
           
        </Box>
    )
}