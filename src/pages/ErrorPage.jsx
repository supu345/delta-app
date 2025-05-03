import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="bg-gray-800 text-white mt-[30px] ">
      <p className="text-[150px] text-center pt-[200px] ">404</p>
      <p className="text-3xl text-center">Page Not Found</p>
      <div className="text-center">
        <p className="text-lg  ">
          The page you are looking for might have been removed had its name{" "}
          <br />
          changed or is temporarily unavailable
        </p>
      </div>
      <div className="text-center pb-[100px] ">
        <Link to="/">
          <button className=" bg-green-400 px-8 text-white py-4 mt-[20px]  ">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
