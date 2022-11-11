import { Box, Flex, Text } from "@chakra-ui/react";
import { FiChevronLeft,FiChevronRight} from "react-icons/fi";
import {woman,man,kids,manLinks,womanLinks,kidLinks} from "../homepage/homepageProps"
import HomePageCarosel from "./HomePageSlider";
import {motion} from "framer-motion"
import { useState } from "react";
import { useTheme } from "../theme/usetheme";
export default function HomePageComCarosel(){
   let {Theme,ChangeTheme}=useTheme()
    let [count,setCount]=useState(1)
    let [isleft,setIsleft]=useState(false)
    function toggle(isdark){
        isdark?ChangeTheme("light"):ChangeTheme("dark")
    }
    return (
        <Box w="100%"  h={"100vh"} color={Theme.textColor} >
            
            <Flex alignItems={"center"}  >
                <Box alignItems={"center"}
                as={motion.div} whileHover={{scale:1.3,cursor:"pointer",  } } transition={{duration:0.8}}
                pos={"absolute"} left={10} visibility={count<=1?"hidden":"visible"} zIndex="10" ><Flex alignItems={"center"}><FiChevronLeft size={40} onClick={()=>{
                    setCount(count-1);
                    setIsleft(true)
                }}/> <Text fontSize={9} ml={-3}>{count===2?"WOMAN":"MAN"}</Text></Flex></Box>
                <Box  w="100%"  h={"100vh"} >
            {count===1&&<HomePageCarosel toggle={toggle} images={woman} isleft={isleft} links={womanLinks} />}
            {count===2&&<HomePageCarosel toggle={toggle} images={man} isleft={isleft} links={manLinks}/>}
            {count===3&&<HomePageCarosel toggle={toggle} images={kids} isleft={isleft} links={kidLinks} />}
                </Box >
                <Box 
                as={motion.div} whileHover={{scale:1.3,cursor:"pointer",  } } transition={{duration:0.8}}
                pos={"absolute"} right={10} visibility={count>=3?"hidden":"visible"} ><Flex alignItems={"center"}><Text fontSize={9} mr={-3}>{count===2?"KIDS":"MAN"}</Text>
                <FiChevronRight size={40} onClick={()=>{
                    setCount(count+1);
                    setIsleft(false)
                }}/></Flex></Box>
            </Flex>
        
            
        </Box>
    )
}