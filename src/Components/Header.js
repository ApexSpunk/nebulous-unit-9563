import { Box, Flex, Image, Input, Spacer, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { authLogout } from "../Redux/auth/actions";
import { getCart } from "../Redux/cart/actions";
const Cookies = require("js-cookie");

function Header({ page }) {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useSelector(state => state.theme)

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 150) {
        setIsOpen(true);
      }

      if (window.scrollY > 120) {
        setNavbar(true);
      }

      if (window.scrollY === 0) {
        setNavbar(false);
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", changeBackground);
  }, [navbar]);

  const { carts, loading, error, message } = useSelector((state) => state.cart);
  const {
    data: { isAuthenticated, user },
  } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart())
  }, [dispatch, isAuthenticated])

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box
      mt="3"
      position={page == "home" ? "fixed" : navbar ? "sticky" : "relative"}
      zIndex={10}
      transition="all 0.5s ease-in-out"
      width="100%"
      top={page == "home" ? 0 : isOpen ? "1" : "-30%"}
    >
      <Flex>
        <Flex >
          <Box onClick={() => setMenuOpen(!menuOpen)} >
            <Image className={page == 'home' ? theme.textColor == 'white' ? 'yourImage' : null : null} w='30px' mx='8' cursor='pointer' src='https://cultwear.netlify.app/menu.png' display={menuOpen ? 'none' : 'block'} />
            <Image w='30px' p='6px' mt='0' mx='8' cursor='pointer' src='https://icons.veryicon.com/png/o/education-technology/radio-and-tv-cloud/x-22.png' display={menuOpen ? 'block' : 'none'} />
          </Box>
          <Box>
            <Link to="/">
              {/* make image black to white */}
              <Image
                w="200px"
                className={page == 'home' ? theme.textColor == 'white' ? 'yourImage' : null : null}
                src="https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png"
                filter={menuOpen ? "invert(0%)" : null}
              />
            </Link>
          </Box>
        </Flex>
        <Spacer />
        <Flex height="70%" justifyContent={"center"} alignItems={"center"}>
          <Link to="/search">
            <Text
              mx={{ base: 0, lg: 20, xl: 40 }}
              display={{ base: "none", md: "block" }}
              fontSize="sm"
              color={page == 'home' ? theme.textColor : 'black'} 
              borderBottom={"1px"}
              pr="8"
            >
              SEARCH
            </Text>
          </Link>
          <Box gap="6" display={{ base: "none", md: "flex" }}>
            <Link to={isAuthenticated ? null : "/login"}>
              <Text fontSize="sm" onClick={isAuthenticated ? () => {dispatch(authLogout()); dispatch(getCart())} : null} color={page == 'home' ? theme.textColor : 'black'} >
                {isAuthenticated ? user.name.toUpperCase() : "LOGIN"}
              </Text>
            </Link>
            <Text color={page == 'home' ? theme.textColor : 'black'}  fontSize="sm">HELP</Text>
          </Box>
          <Link to="/cart">
            <Box mx='7'>
              <Image src='https://cultwear.netlify.app/cart.png' w='45px' className={page == 'home' ? theme.textColor == 'white' ? 'yourImage' : null : null} />
              <Text color={page == 'home' ? theme.textColor : 'black'}  fontSize='sm' position='absolute' mt='-32px' ml='17px'>{carts.length}</Text>
            </Box>
          </Link>
        </Flex>
      </Flex>
      {/* make sidebar */}
      <Box
        display={menuOpen ? "block" : "none"}
        position="fixed"
        top="0"
        left="0"
        height="100%"
        bg="white"
        zIndex="-2"
        width={{ base: "100%", md: "30%" }}
      >
        <Flex flexDirection="column" mt="32" alignItems="center" height="100%">
          <Flex gap="8">
            <Link to="/store?category=mens">
              <Text fontSize="xs" color="black">
                MENS
              </Text>
            </Link>
            <Link to="/store?category=womens">
              <Text fontSize="xs" color="black">
                WOMENS
              </Text>
            </Link>
            <Link to="/store?category=kids">
              <Text fontSize="xs" color="black">
                KIDS
              </Text>
            </Link>
            <Link to="/store">
              <Text fontSize="xs" color="black">
                NEW
              </Text>
            </Link>
          </Flex>
          <Box></Box>
          <Box w="80%">
            <Box textAlign="left" my="8">
              <Text fontSize="xs" color="black">
                PARTY NEW
              </Text>
              <Text fontSize="xs" color="black">
                ZARA ORIGINALS
              </Text>
            </Box>
            <Flex textAlign="left" my="8" flexDirection="column" gap="1">
              <Text fontSize="xs" color="black">
                NEW
              </Text>
              <Text fontSize="xs" color="black">
                ZARA HOME
              </Text>
              <Text fontSize="xs" color="black">
                ZARA TRF
              </Text>
              <Text fontSize="xs" color="black">
                COATS | PUFFER JACKETS
              </Text>
              <Text fontSize="xs" color="black">
                BASICS
              </Text>
              <Text fontSize="xs" color="black">
                JACKETS
              </Text>
              <Text fontSize="xs" color="black">
                DRESSES
              </Text>
              <Text fontSize="xs" color="black">
                TROUSERS
              </Text>
              <Text fontSize="xs" color="black">
                SKIRTS
              </Text>
              <Text fontSize="xs" color="black">
                SHOES
              </Text>
              <Text fontSize="xs" color="black">
                ACCESSORIES
              </Text>
              <Text fontSize="xs" color="black">
                BAGS
              </Text>
              <Text fontSize="xs" color="black">
                BEAUTY
              </Text>
              <Text fontSize="xs" color="black">
                SALE
              </Text>
            </Flex>
            <Box textAlign="left" my="8">
              <Text fontSize="xs" color="black">
                GIFT CARD
              </Text>
              <Text fontSize="xs" color="black">
                EDITED
              </Text>
            </Box>
            <Box textAlign="left" my="8">
              <Text fontSize="xs" color="black">
                JOIN LIFE
              </Text>
              <Text fontSize="xs" color="black">
                + INFO
              </Text>
            </Box>
          </Box>
        </Flex>
        <Text
          fontSize="sm"
          position="absolute"
          bottom="0"
          left="0"
          ml="8"
          mb="8"
        >
          © 2021 ZARA
        </Text>
      </Box>
    </Box>
  );
}

export default Header;
