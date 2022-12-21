import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CartSingleCard from "../../Components/Cart/SingleCart"
export default function Cart() {
  let { carts, total } = useSelector((store) => store.cart)
  let navigate = useNavigate()

  return (<>
    <Box display={"grid"} justifyItems={"flex-end"} mt={10} p={10} fontSize={12}>
      <Box display={"flex"} w="100%" overflowX={"hidden"} scrollBehavior={"smooth"}>
        <Box display={"flex"} flexDirection={{ base: "column", md: "row" }} css={{
          '&::-webkit-scrollbar': {
            width: '1px',
          },
          '&::-webkit-scrollbar-track': {
            width: '6px',
          },
          '&::-webkit-scrollbar-thumb': {

            borderRadius: '24px',
          },
        }} overflow={"auto"}>
          {// mapping trough the cart array 
            carts.map((el) => {
              return (
                <Box key={el._id}>
                  <CartSingleCard {...el.productId} _id={el._id} quantity={el.quantity} />
                </Box>
              )
            })
          }


        </Box >
      </Box>


    </Box>
    <Box bottom={"0px"} textAlign='center' className="hi" >
      {
      //if cart empty then show this
        carts.length === 0 ? <Box h='70vh' display='grid' justifyContent='center' alignItems='center'>
        <Text fontSize='2xl'>Your cart is empty</Text>
        <Button w='96' onClick={() => navigate("/")} colorScheme="blackAlpha" >Continue Shopping</Button>
        </Box> : <Flex mt='24' justifyContent={"flex-end"} fontSize={10}>
          <Box w='40%' display='flex' gap='6' justifyContent='center'>
            <Text>TOTAL   ₹ {total} <br />INCLUDING GST<br />EXCL SHIPPING COST</Text>
            <Box w="60%"  ><Button w="100%" bgColor="black" color={"white"} onClick={() => navigate("/payment")}  >CONTINUE</Button></Box>
          </Box>
        </Flex>
      }
    </Box>
  </>
  )
}