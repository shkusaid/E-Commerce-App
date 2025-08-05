import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-blue-950 px-10 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-start justify-between">
          <div className="text-white">
            <h3 className="text-3xl font-bold text-white ">
              <span className="text-blue-300 font-serif">S</span>hop.
            </h3>
            <p>divowering Your World with the Best in Electronics</p>

            <p>123.Electronics St. Style city.NY 10001</p>
            <p>Email: Support@Shop-dot.com</p>
            <p> Phone: 123-456-789</p>
          </div>

          <div className="text-white ">
            <h3 className="text-3xl font-bold ">Custumer Services</h3>
            <p>Contact Us</p>

            <p>Shipping and Returns</p>
            <p>Email: Support@Shop-dot.com</p>
            <p> FAQs</p>
            <p> Orders Tracking</p>
            <p> Size Guide</p>
          </div>

          <div className=" text-white">
            <h3 className="text-3xl font-bold">Follow Us</h3>
            <div className="flex justify-around mt-4">
              <FaInstagram />
              <FaTwitter />
              <FaFacebook />
              <FaGithub />
            </div>
          </div>

          <div className=" text-white">
            <h3 className="text-3xl font-bold ">Stay in the Loop</h3>
            <p>subscribe to get the special offer, the giveaways and more</p>
            <div className="flex justify-between">
              <form action="">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-full p-2 rounded-1-md  text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </form>
              <button
                type="submit"
                className="bg-red-600 text-white px-4 rounded-r-md hover:bg-red-500"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
