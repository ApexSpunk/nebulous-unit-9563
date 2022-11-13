import React from "react";
import { MdChatBubbleOutline } from "react-icons/md";
import {
  Button,
  useDisclosure,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogCloseButton,
  AlertDialogBody,
  AlertDialogFooter,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const navigate = useNavigate();
  let { total } = useSelector((store) => store.cart);

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        fontFamily: 'Neue-Helvetica, Helvetica, Arial, "sans-serif"',
        marginLeft: "13rem",
        marginTop: "5rem",
      }}
    >
      <p style={{ fontSize: "18px", fontWeight: "bold" }}>
        ENTER YOUR CARD DETAILS
      </p>
      <img
        src="data:image/png;base64,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"
        alt=""
        style={{
          width: "6rem",
          border: "1px solid #e8e8e8",
          marginTop: "5rem",
        }}
      />

      <div style={{ marginTop: "3rem", fontSize: "11px" }}>
        <input
          type="text"
          placeholder="CARD NUMBER"
          style={{
            borderBottom: "1px solid",
            width: "30rem",
            marginRight: "1.2rem",
          }}
        />
        <select
          name=""
          id=""
          style={{
            borderBottom: "1px solid",
            width: "10rem",
            marginRight: "1.2rem",
          }}
        >
          <option value="">Month</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
          <option value="">6</option>
          <option value="">7</option>
          <option value="">8</option>
          <option value="">9</option>
          <option value="">10</option>
          <option value="">11</option>
          <option value="">12</option>
        </select>
        <select
          name=""
          id=""
          style={{ borderBottom: "1px solid", width: "10rem" }}
        >
          <option value="">Year</option>
          <option value="">2022</option>
          <option value="">2023</option>
          <option value="">2024</option>
          <option value="">2025</option>
          <option value="">2026</option>
          <option value="">2027</option>
          <option value="">2028</option>
          <option value="">2029</option>
        </select>
      </div>

      <div style={{ marginTop: "30px", fontSize: "11px" }}>
        <input
          type="text"
          placeholder="CARD HOLDER"
          style={{
            borderBottom: "1px solid",
            width: "30rem",
            marginRight: "1.2rem",
          }}
        />
        <input
          type="text"
          placeholder="CVV2 SECURITY CODE"
          style={{
            borderBottom: "1px solid",
            width: "10rem",
            marginRight: "1.2rem",
          }}
        />
      </div>

      <div className="footline">
        <div className="chat">
          <MdChatBubbleOutline style={{ height: "17px" }} />
          <h1>CHAT</h1>
        </div>

        <div className="money">
          <p>Total: ₹{total} INCLUDING GST</p>
          <Button onClick={onOpen}>Continue</Button>
          <AlertDialog
            motionPreset="slideInBottom"
            leastDestructiveRef={cancelRef}
            onClose={onClose}
            isOpen={isOpen}
            isCentered
          >
            <AlertDialogOverlay />

            <AlertDialogContent>
              <AlertDialogHeader>Order Confirmed</AlertDialogHeader>
              <AlertDialogCloseButton />
              <AlertDialogBody>
                Congrats! Your Order has been confirmed. Do You want to continue
                shoping?
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  No
                </Button>
                <Button colorScheme="red" ml={3} onClick={handleClick}>
                  Yes
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
