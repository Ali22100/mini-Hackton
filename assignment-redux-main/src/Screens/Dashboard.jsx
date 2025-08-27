import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "../store/slices/authSlice";
import Navbar from "../Components/Navbar/Navbar";
import "./Style.css";

const Dashboard = () => {
  const dispatch = useDispatch();


  // const [text, setText] = useState("");
  // const [isDeleting, setIsDeleting] = useState(false);
  // const [loopNum, setLoopNum] = useState(0);
  // const [typingSpeed, setTypingSpeed] = useState(150);

  // const words = ["Hello User ", "Welcome Back ", "How are You ?"];

  // useEffect(() => {
  //   const handleTyping = () => {
  //     let i = loopNum % words.length;
  //     let fullText = words[i];

  //     setText(
  //       isDeleting
  //         ? fullText.substring(0, text.length - 1)
  //         : fullText.substring(0, text.length + 1)
  //     );

  //     setTypingSpeed(isDeleting ? 80 : 150);

  //     if (!isDeleting && text === fullText) {
  //       setTimeout(() => setIsDeleting(true), 1000);
  //     } else if (isDeleting && text === "") {
  //       setIsDeleting(false);
  //       setLoopNum(loopNum + 1);
  //     }
  //   };

  //   const timer = setTimeout(handleTyping, typingSpeed);

  //   return () => clearTimeout(timer);
  // }, [text, isDeleting, loopNum, typingSpeed]);

  // useEffect(() => {
  //   dispatch(fetchAllUsers());
  // }, [dispatch]);

  return (
    <>
      <Navbar />

        <h1>hiii</h1>

    </>
  );
};

export default Dashboard;
