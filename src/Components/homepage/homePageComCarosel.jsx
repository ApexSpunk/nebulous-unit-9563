import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FiChevronLeft,FiChevronRight} from "react-icons/fi";
import img1 from "../homepagePhotos/img1.jpg"
import img2 from "../homepagePhotos/img2.jpg"
import img3 from "../homepagePhotos/img3.jpg"
import img4 from "../homepagePhotos/img4.jpg"
import img5 from "../homepagePhotos/img5.jpg"
import vid1 from "../homepagePhotos/subhome-xmedia-43-2_0.mp4"
import man1 from "../homepagePhotos/man1.jpg"
import man2 from "../homepagePhotos/man2.jpg"
import kid1 from "../homepagePhotos/kids1.jpg"
import kid2 from "../homepagePhotos/kids2.jpg"
import kid3 from "../homepagePhotos/kids3.jpg"
import kidvid from "../homepagePhotos/kidvid.mp4"
import HomePageCarosel from "./HomePageSlider";
import {motion} from "framer-motion"
import { useState } from "react";
export default function HomePageComCarosel(){
    const woman=[{item:img1,isvedio:false},{item:img2,isvedio:false},{item:img3,isvedio:false},{item:img4,isvedio:false},{item:img5,isvedio:false}];
    let man=[{item:man1,isvedio:false},{item:vid1,isvedio:true},{item:man2,isvedio:false},{item:img5,isvedio:false}];
    let kids=[{item:kid1,isvedio:false},{item:kidvid,isvedio:true},{item:kid2,isvedio:false},{item:kid3,isvedio:false},{item:img5,isvedio:false}]
    let [count,setCount]=useState(1)
    let [isleft,setIsleft]=useState(false)
    return (
        <Box w="100%"  h={"100vh"} >
            
            <Flex alignItems={"center"}  >
                <Box alignItems={"center"}
                as={motion.div} whileHover={{scale:1.3,cursor:"pointer",  } } transition={{duration:0.8}}
                pos={"absolute"} left={10} visibility={count<=1?"hidden":"visible"} zIndex="10" ><Flex alignItems={"center"}><FiChevronLeft size={40} onClick={()=>{
                    setCount(count-1);
                    setIsleft(true)
                }}/> <Text fontSize={9} ml={-3}>{count===2?"WOMAN":"MAN"}</Text></Flex></Box>
                <Box  w="100%"  h={"100vh"} >
            {count===1&&<HomePageCarosel images={woman} isleft={isleft} />}
            {count===2&&<HomePageCarosel images={man} isleft={isleft}/>}
            {count===3&&<HomePageCarosel images={kids} isleft={isleft}/>}
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