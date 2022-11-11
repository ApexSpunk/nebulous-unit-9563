import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";

export default function Footer(){
    return (
        <Box w="100%" h="60%"  pos={"absolute"}  zIndex={1000} bottom={"10%"} display="grid" gap={100} p={20} >
                            <Box textAlign={"center"}><Link><Heading>JOIN OUR NEWSLETTER</Heading></Link></Box>
                            <Box>
                                <Flex w="50%" justifyContent={"space-around" } m="auto" fontSize={12} gap={2} >
                                    <Link href="https://www.instagram.com/zara/" isExternal>INSTAGRAM</Link>
                                    <Link href="https://www.facebook.com/Zara" isExternal>FACEBOOK</Link>
                                    <Link href="https://twitter.com/ZARA" isExternal>TWITTER</Link>
                                    <Link href="https://www.pinterest.es/zaraofficial/" isExternal>PINTREST</Link>
                                    <Link href="https://www.youtube.com/user/zara" isExternal>YOUTUBE</Link>
                                    <Link href="https://open.spotify.com/user/r6ivwuv0ebk346hhxo446pbfv" isExternal>SPOTIFY</Link>
                                </Flex>
                            </Box>
                            <Box fontSize={11}><Box><Text>Name and address of the manufacturer:<br/>
                            Industria de Diseño Textil, S.A. (INDITEX, S.A.)<br/>
                            Avenida de la Diputación, Edificio Inditex, 15143, Arteixo (A Coruña), Spain
                            </Text></Box></Box>
                            {/* ksfamfgrwgmr */}
                        </Box>
    )
}