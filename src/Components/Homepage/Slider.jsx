import { Box } from '@chakra-ui/react'
import { useState } from "react"
import { motion } from "framer-motion"
import SingleImage from './SingleImage'



export default function HomePageCarosel({ images, isleft, links, toggle }) {

    let [cindex, setCindex] = useState(0)
    let [isup, setIsup] = useState(false)

    let run = false;
    const handleNext = () => {

        if (run) {
            return
        } else {
            run = true
            setIsup(true)
            setTimeout(() => {
                if (cindex >= images.length - 1) {
                    setCindex(0)
                } else {
                    setCindex(cindex + 1)
                }
                run = false
            }, 1300)
        }

    }
    const handlePrev = () => {
        if (run) {
            return
        } else {
            run = true
            setIsup(false)
            setTimeout(() => {
                if (cindex < 1) {
                    setCindex(images.length - 2)
                } else {
                    setCindex(cindex - 1)
                }
                run = false
            }, 1300)
        }


    }
    return (
        <motion.div initial={{ opacity: 0, x: isleft ? "-100vh" : "100px", scaleX: 0.5 }}
            animate={{ opacity: 1, x: 0, scaleX: 1 }}
            transition={{ type: "tween", duration: 1 }}>
            <Box w="100%" h="100vh" overflowY="hidden" overflow={"hidden"} objectFit={"contain"} onWheel={(e) => { e.deltaY > 0 ? handleNext() : handlePrev() }} >
                {images.slice(cindex, cindex + 1).map((el) => {
                    return (
                        <SingleImage el={el} isup={isup} cindex={cindex} images={images} toggle={toggle} links={links} />
                    )
                })}
            </Box>

        </motion.div>
    )
}