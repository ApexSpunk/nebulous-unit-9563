import { Box, Button, Flex, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, SelectField, Text, useDisclosure } from "@chakra-ui/react"
import { useRef, useState } from "react"
import { MdDelete, MdEdit } from "react-icons/md";


function AddProduct({ product, updateProduct, deleteProduct, type, addProduct }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [productData, setProductData] = useState({ ...product })

    const handleFormChange = (e) => {
        if (e.target.name === 'images') {
            setProductData({ ...productData, [e.target.name]: e.target.files })
        }
        else {
            setProductData({ ...productData, [e.target.name]: e.target.value })
        }


    }


    return (
        <Box w={type === 'add' ? null : '100%'} >
            {
                type === "add" ? <Button colorScheme="blue" mb={4} onClick={onOpen}>
                    Add Product
                </Button> : <Flex justifyContent="space-between" >
                    <Text as={'span'} ml={'2'} color={'gray.600'} fontSize={'sm'} onClick={onOpen}>
                        <Button colorScheme="green" leftIcon={<MdEdit />}>
                            Update
                        </Button>
                    </Text>
                    <Text as={'span'} ml={'2'} color={'gray.600'} fontSize={'sm'} onClick={() => deleteProduct(product._id)}>
                        <Button colorScheme="red" leftIcon={<MdDelete />}>
                            Delete
                        </Button>
                    </Text>
                </Flex>
            }

            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{type === 'add' ? `Add Product ${productData.title ? productData.title : ""}` : "Update " + productData.title}</ModalHeader>
                    <ModalBody pb={6}>
                        <FormControl>
                            <FormLabel>Title</FormLabel>
                            <Input placeholder='Product Title' onChange={handleFormChange} name='title' value={productData.title} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Price</FormLabel>
                            <Input type='number' placeholder='Product Price' onChange={handleFormChange} name='price' value={productData.price} />
                        </FormControl>

                        <FormControl mt={4}>
                            <FormLabel>Description</FormLabel>
                            <Input placeholder='Product Description' onChange={handleFormChange} name='description' value={productData.description} />
                        </FormControl>

                        {
                            type === 'add' && <FormControl mt={4}>
                                <FormLabel>Images</FormLabel>
                                <Input multiple
                                    onChange={handleFormChange}
                                    type='file' placeholder='Product Images' name='images' accept="image/*" />
                            </FormControl>
                        }



                        <Flex mt={4} gap={4}>
                            <FormControl mt={4}>
                                <FormLabel>Category</FormLabel>
                                <Select onChange={handleFormChange} name='category' value={productData.category}>
                                    <option value='Men'>Men</option>
                                    <option value='Women'>Women</option>
                                    <option value='Kids'>Kids</option>
                                </Select>
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Color</FormLabel>
                                <Select onChange={handleFormChange} name='color' value={productData.color}>
                                    <option value="red">Red</option>
                                    <option value="blue">Blue</option>
                                    <option value="green">Green</option>
                                    <option value="yellow">Yellow</option>
                                    <option value="black">Black</option>
                                    <option value="white">White</option>
                                </Select>
                            </FormControl>
                        </Flex>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={type === 'add' ? () => addProduct(productData) : () => { updateProduct(product._id, productData); onClose() }}>
                            {type === 'add' ? 'Add' : 'Update'}
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default AddProduct