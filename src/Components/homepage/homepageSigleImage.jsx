import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Footer from "./fotter";
import PageLinks from "./pagesLinks";
export default function  SigngleImage({el,isup,cindex,images,toggle,links}){
    const {theme} = useSelector(state => state.theme)
    console.log(el.isdark,theme)
   useEffect(()=>{
    toggle(el.isdark)
   },[el])
   return( <Box key={el.item} pos="relative" w="100%"  h="100%" >
    
    {!el.isvedio?<Image as={motion.img} 
                        
    initial={{opacity:0,y:isup?"100vh":"-100vh"}}
    animate={{opacity:1,y:0}}
    transition={{type:"tween", duration:0.8}}
    w="100%"  h="100%"  src={el.item} 
    />:
    <motion.video autoPlay muted loop initial={{opacity:0,y:isup?"100vh":"-100vh"}}
    animate={{opacity:1,y:0}}
    transition={{type:"tween", duration:0.8}}
    width="100%"  height="100%" >
    <source   src={el.item} type="video/mp4"/>
    </motion.video>
    
    }
    
    {cindex!==(images.length-1)&&<PageLinks links={links} />}
 {  cindex===(images.length-1)&&<Footer />}
 {/* /// */}
    </Box>
   )

}