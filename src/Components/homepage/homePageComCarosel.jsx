import { Box, Image } from "@chakra-ui/react";
import img1 from "../homepagePhotos/img1.jpg"
import img2 from "../homepagePhotos/img2.jpg"
import img3 from "../homepagePhotos/img3.jpg"
import img4 from "../homepagePhotos/img4.jpg"
import img5 from "../homepagePhotos/img5.jpg"
import vid1 from "../homepagePhotos/subhome-xmedia-43-2_0.mp4"
import HomePageCarosel from "./HomePageSlider";
export default function HomePageComCarosel(){
    const images=[{item:img1,isvedio:false},{item:vid1,isvedio:true},{item:img2,isvedio:false},{item:img3,isvedio:false},{item:img4,isvedio:false},{item:img5,isvedio:false}];
    return (
        <Box>
            <HomePageCarosel images={images} />
        
            
        </Box>
    )
}