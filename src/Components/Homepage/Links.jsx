import { Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Links({ links }) {
    return (
        <Box w="100%" pos={"absolute"} zIndex={1000} bottom={"4%"} fontSize={10}>
            <Flex w="50%" justify={"space-around"} h="70px" m="auto">
                {links.map((el,index) => {
                    return (<Link key={index} to={el.path}>{el.text}</Link>)
                })}
            </Flex>
        </Box>
    )
}