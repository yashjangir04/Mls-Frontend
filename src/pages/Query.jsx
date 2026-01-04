import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import truck from "../assets/images/truck.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";
import RoadAnimation from "../components/RoadAnimation";

const Query = () => {
  const [dummyQueries, setDummyQueries] = useState([]);
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [sending, setSending] = useState(false);

  const navigate = useNavigate();

  const cardRef = useRef(null);

  useEffect(() => {
    const fetchQueries = async () => {
      const res = await axios.get("http://localhost:3000/qna/fetch", {
        withCredentials: true,
      });
      setDummyQueries(res.data);
      console.log(res.data);
    };
    fetchQueries();
  }, []);

  useEffect(() => {
    if (!cardRef.current) return;

    gsap.fromTo(
      cardRef.current,
      { y: 40, opacity: 0, scale: 0.96 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power3.out" }
    );
  }, [index]);
  console.log(dummyQueries[index]?._id);
  

  const deleteCurrent = async () => {
    await axios.post("http://localhost:3000/qna/delete", {
      _id : dummyQueries[index]?._id
    },{
      withCredentials : true,
      headers : {
        "Content-Type" : "application/json"
      }
    });
  }

  const handleSend = async (e) => {
    e.preventDefault();

    if (!answer.trim() || sending) return;

    const current = dummyQueries[index];
    if (!current) return;

    try {
      setSending(true);

      await axios.post(
        "http://localhost:3000/email/send",
        {
          email: current.email,
          question: current.question,
          answer,
        },
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      deleteCurrent();

      // Animate only after SUCCESS
      gsap.to(cardRef.current, {
        y: -30,
        opacity: 0,
        duration: 0.4,
        ease: "power3.in",
        onComplete: () => {
          setAnswer("");
          setIndex((prev) => prev + 1);
        },
      });
    } catch (err) {
      console.error(err);
      alert("Failed to send reply. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const handleLogout = async () => {
    try {
      await axios.post(
        "http://localhost:3000/user/logout",
        {},
        { withCredentials: true }
      );

      navigate("/login");
    } catch (err) {
      console.error(err);
    }
  };

  if (index >= dummyQueries.length) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100 gap-3">
        <h1 className="text-2xl mont-semibold">All caught up 🎉</h1>
        <p className="text-gray-500 mont-regular">
          You've answered all pending queries.
        </p>
        <button
          onClick={handleLogout}
          className="mt-4 bg-[#2c2b76] text-white px-6 py-2 mont-regular cursor-pointer hover:bg-[#212057] duration-300"
        >
          Logout
        </button>
      </div>
    );
  }

  const current = dummyQueries[index];

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="w-full px-16 py-4 flex justify-between items-center bg-[#2c2b76]">
        <div>
          <h1 className="text-2xl mont-semibold text-white">Admin Dashboard</h1>
          <p className="mont-regular mt-1 text-gray-200 text-sm">
            Review and respond to user queries one at a time.
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white px-5 py-2 mont-regular hover:bg-red-600 transition cursor-pointer"
        >
          Logout
        </button>
      </div>

      {/* Card Section */}
      <div className="flex-1 flex items-center justify-center md:mb-10 mb-40">
        <div
          ref={cardRef}
          className="w-110 bg-white shadow-xl p-6 flex flex-col gap-4"
        >
          {/* Progress */}
          <div className="self-end text-xs bg-gray-100 px-3 py-1 mont-regular text-gray-600">
            {index + 1} / {dummyQueries.length}
          </div>

          <div className="text-sm text-gray-500 mont-regular">
            From: <span className="font-medium">{current.email}</span>
          </div>

          <div className="text-md mont-regular text-gray-900 w-full border p-3 border-gray-300 cursor-not-allowed overflow-x-scroll">
            {current.question}
          </div>

          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer..."
            className="roboto-regular w-full h-28 border border-gray-300 p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#2c2b76]"
          />

          <button
            onClick={handleSend}
            className="self-end bg-[#2c2b76] text-white cursor-pointer px-6 py-2 hover:bg-[#212057] transition mont-regular"
          >
            Send Reply
          </button>
        </div>
        <RoadAnimation />
      </div>
    </div>
  );
};

export default Query;
