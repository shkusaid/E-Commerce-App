import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-gray-300">
      <div className="max-w-5xl mx-auto mt-10 mb-5 text-center bg-white">
        <div className="flex justify-center items-center">
          <h1 className="font-bold text-4xl">About Shop.</h1>
        </div>
        <div className="space-y-6">
          <p>
            Welcome to{" "}
            <span className="font-semibold text-blue-900">Shop.</span>your one
            step destination for the relaible shopping
          </p>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Mission</h2>
          <p className="text-gray-700 text-base">
            At Shop. , our Mission is to make inovative technology accessible to
            everone we're passionate t connect the world
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-red-600">
            why Choose Shop.?
          </h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Top quality electronic products</li>
            <li>Top quality electronic products</li>
            <li>Top quality electronic products</li>
            <li>Top quality electronic products</li>
            <li>Top quality electronic products</li>
          </ul>
        </div>
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-red-600">Our Vission</h2>
          <p className="list-disc pl-6 text-gray-700">dffuygfe</p>
        </div>
        <Link to={"/products"}>
          <button className="bg-red-600 px3 py-2 rounded-md hover:bg-red-700 transition-all">
            Start Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default About;
