import {Box, Button, Flex, Text} from "@chakra-ui/react"
import { useSelector } from "react-redux"
import CartSingleCard from "../Components/cartSingleCard"
export default function Cart(){
   let {carts}=useSelector((store)=>store.cart)
   
    return (
        <Box display={"grid"} justifyItems={"flex-end"} mt={100} p={10} fontSize={12}>
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
           <Box pos={"absolute"} bottom={"0px"} w="22%" >
              <Flex justifyContent={"space-between"} fontSize={10}>
                    <Text>TOTAL   ₹ total <br/>INCLUDING GST<br/>EXCL SHIPPING COST</Text>
                    <Box w="60%"  ><Button w="100%"  bgColor="black" color={"white"}  >CONTINUE</Button></Box>
              </Flex>
           </Box>
           
        </Box>
    )
}