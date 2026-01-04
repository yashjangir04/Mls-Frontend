import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import axios from "axios";

const Chat = () => {
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const [chatOpened, setChatOpened] = useState(false);
  
  const sendQuery = async () => {
    await axios.post(
      "http://localhost:3000/qna/create",
      {
        email,
        question,
      },
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  useEffect(() => {
    gsap.fromTo(
      ".chatForm",
      {
        x: 50,
        y: 100,
        opacity: 0,
      },
      {
        x: 0,
        y: 0,
        opacity: 1,
        duration: 0.5,
      }
    );
  }, [chatOpened]);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
    console.log(question);
  };

  return (
    <div className="Chat fixed bottom-10 right-10 z-1000">
      <button
        onClick={() => {
          setChatOpened(!chatOpened);
        }}
        className="chatBox w-15 h-15 bg-white rounded-full border border-gray-300 flex justify-center items-center cursor-pointer"
      >
        {!chatOpened ? (
          <AiOutlineMessage className="text-2xl text-[#2c2b76]" />
        ) : (
          <IoMdClose className="text-2xl text-[#2c2b76]" />
        )}
      </button>

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={`chatForm w-60 h-80 absolute bg-white -top-80 -left-60 roboto-regular border border-gray-300 p-4 rounded-md flex flex-col gap-4 ${
          !chatOpened ? "hidden" : ""
        }`}
      >
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Email ID"
          className="w-full px-2 py-3 border border-gray-300 focus:outline-none text-sm rounded-md h-1/5"
          onChange={handleEmailChange}
        />
        <textarea
          name="question"
          id="question"
          className="w-full px-2 py-3 border border-gray-300 focus:outline-none text-sm rounded-md h-3/4"
          placeholder="What's in your mind?"
          onChange={handleQuestionChange}
        ></textarea>
        <button
          onClick={sendQuery}
          className="bg-[#2c2b76] text-white px-2 py-3 border-none rounded-md hover:bg-[#1e1d50] duration-300 cursor-pointer h-1/5"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Chat;
