import { Box, Button, Flex, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { updateProductInCart } from "../../Redux/cart/actions";

export default function CartSingleCard({title,price,images,color,quantity,category,_id}){
    let dispach=useDispatch()
    return (
        <Box w="400px">
            <Text>{title}</Text>
            <Flex gap="2">
                <Box>
                    
                    <Image src={images[1]} />
                </Box>
                <Flex direction={"column"} justifyContent="space-between">
                    <VStack>
                        <Text>{category}</Text>
                        <Text>{color}</Text>
                        <Text>size</Text>
                        <Flex>
                            <Button bgColor={"transparent"} onClick={()=>{
                                dispach(updateProductInCart(_id,Number(quantity)+1))
                                }}>-</Button>
                            <Button bgColor={"transparent"}>{quantity}</Button>
                            <Button bgColor={"transparent"}>+</Button>
                        </Flex>
                    </VStack>
                    <HStack>
                        <Text>₹ {price}</Text>
                    </HStack>
                    <VStack>
                        <Text>SAVE FOR LETER</Text>
                        <Text>Delete</Text>
                    </VStack>
                </Flex>
            </Flex>
        </Box>
    )
}