import { Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function PageLinks(){
    return (
        <Box w="100%" pos={"absolute"}  zIndex={1000} bottom={"20%"}>
                            <Flex w="60%" justify={"space-around"} h="70px" m="auto">
                            <Link to="/" ><Text as={"b"} fontSize={32}>new</Text> </Link>
                            <Link to="/" ><Text fontSize={32}>new</Text></Link>
                            <Link to="/" ><Text fontSize={32}>new</Text></Link>
                            </Flex>
                        </Box>
    )
}