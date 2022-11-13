import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Image,
  Input,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../Redux/products/actions";

const Search = () => {
  const [query, setQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProducts({ q: query }));
  }, [query]);

  const dispatch = useDispatch();
  const {
    getProducts: { loading, error },
    products,
  } = useSelector((state) => state.product);

  const handleWomen = () => {
    navigate("/womens");
  };

  const handleMen = () => {
    navigate("/mens");
  };

  const handleChild = () => {
    navigate("/childs");
  };

  return (
    <Box>
      <Flex gap="4" mt="4">
        <Spacer />
        <Text fontSize="xs" onClick={handleWomen}>
          WOMAN
        </Text>
        <Text fontSize="xs" onClick={handleMen}>
          MAN
        </Text>
        <Text fontSize="xs" onClick={handleChild}>
          KIDS
        </Text>
        <Spacer />
      </Flex>
      <Box mx="24" mt="8">
        <Input
          type="text"
          placeholder="ENTER SEARCH TERMS"
          onChange={(e) => setQuery(e.target.value)}
          border="none"
          borderRadius="none"
          borderBottom="1px solid black"
          _placeholder={{ color: "black", textDecorations: "uppercase" }}
          outline="none"
          onClick={() => setIsOpen(true)}
        />
        <Box>
          <Box display={isOpen ? "block" : "none"} mt="8">
            <Text fontSize="sm">TRENDS</Text>
            <Text fontSize="sm">DRESS</Text>
            <Text fontSize="sm">TOP</Text>
            <Text fontSize="sm">SKIRT</Text>
            <Text fontSize="sm">DRESS FOR WOMAN</Text>
          </Box>
        </Box>
      </Box>

      {loading ? (
        <Text mx="24" mt="12">
          Loading...
        </Text>
      ) : products.length == 0 ? (
        <Text mt="12" mx="24">
          No products found
        </Text>
      ) : (
        query.length > 0 && (
          <Grid mx="16" templateColumns="repeat(6, 1fr)" gap={6} mt="8">
            {products.map((ele) => (
              <Link
                to={`/product/${ele._id}`}
                onClick={() =>
                  dispatch(getProducts({ category: ele.category }))
                }
              >
                <GridItem
                  key={ele._id}
                  colSpan={{ base: 6, md: 2, lg: 1, xl: 1 }}
                >
                  <Image src={ele.images[ele.images.length - 3]} alt="" />
                  <Box>
                    <Text fontSize="xs">{ele.title}</Text>
                    <Text fontSize="xs">₹{ele.price}</Text>
                  </Box>
                </GridItem>
              </Link>
            ))}
          </Grid>
        )
      )}
    </Box>
  );
};

export default Search;
