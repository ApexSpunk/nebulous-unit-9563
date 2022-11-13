import { Box, Flex, Text } from "@chakra-ui/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { woman, man, kids, manLinks, womanLinks, kidLinks } from "../homepage/homepageProps"
import HomePageCarosel from "./HomePageSlider";
import { motion } from "framer-motion"
import { useState } from "react";
import { changeTheme } from "../../Redux/theme/actions";
import { useDispatch, useSelector } from "react-redux";
export default function HomePageComCarosel() {
    let [count, setCount] = useState(1)
    let [isleft, setIsleft] = useState(false)
    const { theme } = useSelector(state => state.theme)
    const dispatch = useDispatch()
    function toggle(isdark) {
        isdark ? dispatch(changeTheme("dark")) : dispatch(changeTheme("light"))
    }
    return (
        <Box w="100%" h={"100vh"} color={theme.textColor} >

            <Flex alignItems={"center"}  >
                <Box alignItems={"center"}
                    onClick={() => {
                        setCount(count - 1);
                        setIsleft(true)
                    }}
                    as={motion.div} whileHover={{ scale: 1.3, cursor: "pointer", }} transition={{ duration: 1 }}
                    pos={"absolute"} left={10} visibility={count <= 1 ? "hidden" : "visible"} zIndex="10" ><Flex alignItems={"center"}>
                        <FiChevronLeft size={40}  /> <Text fontSize={9} ml={-3}>{count === 2 ? "WOMAN" : "MAN"}</Text></Flex></Box>
                <Box w="100%" h={"100vh"} >
                    {count === 1 && <HomePageCarosel toggle={toggle} images={woman} isleft={isleft} links={womanLinks} />}
                    {count === 2 && <HomePageCarosel toggle={toggle} images={man} isleft={isleft} links={manLinks} />}
                    {count === 3 && <HomePageCarosel toggle={toggle} images={kids} isleft={isleft} links={kidLinks} />}
                </Box >
                <Box onClick={() => {
                            setCount(count + 1);
                            setIsleft(false)
                        }}
                    as={motion.div} whileHover={{ scale: 1.3, cursor: "pointer", }} transition={{ duration: 1 }}
                    pos={"absolute"} right={10} visibility={count >= 3 ? "hidden" : "visible"} ><Flex alignItems={"center"}><Text fontSize={9} mr={-3}>{count === 2 ? "KIDS" : "MAN"}</Text>
                        <FiChevronRight size={40}  /></Flex></Box>
            </Flex>


        </Box>
    )
}