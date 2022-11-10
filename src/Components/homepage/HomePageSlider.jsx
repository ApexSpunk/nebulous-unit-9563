import {Box, Flex, Heading, Text} from '@chakra-ui/react'

import {useState} from "react"
import {motion} from "framer-motion"
import { Link } from 'react-router-dom'
import Footer from './fotter'
import PageLinks from './pagesLinks'



export default function HomePageCarosel({images,isleft,links}){
    let [cindex,setCindex]=useState(0)
    let [isup,setIsup]=useState(false)
  
    let run=false;
    const handleNext=()=>{
        
        if(run){
           return
        }else{
            run=true
            setIsup(true)
           setTimeout(()=>{
            if(cindex>=images.length-1){
                setCindex(0)
            }else{
                setCindex(cindex+1)
            }
            run =false
           },800)
        }   
        
    }
    const handlePrev=()=>{
        if(run){
            return
         }else{
            run=true
            setIsup(false)
            setTimeout(()=>{
                if(cindex<1){
                    setCindex(images.length-2)
                }else{
                    setCindex(cindex-1)
                }
             run =false
            },800)
         }
        
       
    }
    return (
        <motion.div initial={{opacity:0,x:isleft?"-100vh":"100vh"}}
        animate={{opacity:1,x:0,}}
        transition={{type:"tween", duration:0.9}}>
            <Box w="100%"  h={"100vh"} overflow="hidden" onWheel={(e)=>{e.deltaY>0?handleNext():handlePrev()}} >
                
                {images.slice(cindex,cindex+1).map((el)=>{
                    return(

                        <Box key={el.item} pos="relative">{!el.isvedio?<motion.img  
                        initial={{opacity:0,y:isup?"100vh":"-100vh"}}
                        animate={{opacity:1,y:0}}
                        transition={{type:"tween", duration:0.5}}
                        width="100%" height={"100%"}  src={el.item} 
                        />:
                        <motion.video autoPlay muted loop initial={{opacity:0,y:isup?"100vh":"-100vh"}}
                        animate={{opacity:1,y:0}}
                        transition={{type:"tween", duration:0.5}}
                        width="100%" height={"100%"} >
                        <source   src={el.item} type="video/mp4"/>
                        </motion.video>
                        
                        }
                        {cindex!==images.length-1&&<PageLinks />}
                     {  cindex===images.length-1&&<Footer />}
                        </Box>
                    )
                    
                    })}
            </Box>

            </motion.div>
    )
}