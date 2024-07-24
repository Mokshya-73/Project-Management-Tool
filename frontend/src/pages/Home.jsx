import React, { useEffect } from "react";
import { batch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Tasks from "../components/Tasks";
import MainLayout from "../layouts/MainLayout";

const Home = () => {
  const authState = useSelector((state) => state.authReducer);
  const { isLoggedIn } = authState;

  useEffect(() => {
    document.title = authState.isLoggedIn
      ? `${authState.user.name}'s tasks`
      : "Task Manager";
  }, [authState]);

  const backgroundImageStyle = {
    backgroundImage:
      "url('https://getwallpapers.com/wallpaper/full/2/3/0/51140.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const pinkSectionStyle = {
    backgroundColor: "#01579B",
    color: "white",
    height: "30vh",
    padding: "2rem 0",
    textAlign: "center",
    width: "50%",
    maxWidth: "600px",
    borderRadius: "8px",
  };

  return (
    <>
      <MainLayout>
        <div style={backgroundImageStyle}>
          {!isLoggedIn ? (
            <div style={pinkSectionStyle}>
              <h1 className="text-6xl font-semibold">
                Welcome to Project Manager App
              </h1>
              <Link
                to="/signup"
                className="mt-10 text-xl block space-x-2 hover:space-x-4"
              >
                <span className="transition-[margin]">
                  Join now to manage your Project
                </span>
                <span className="relative ml-4 text-base transition-[margin]">
                  <i className="fa-solid fa-arrow-right"></i>
                </span>
              </Link>
            </div>
          ) : (
            <>
              <h1 className="text-lg mt-8 mx-8 border-b border-b-gray-300">
                Welcome {authState.user.name}
              </h1>
              <Tasks />
            </>
          )}
        </div>
      </MainLayout>
    </>
  );
};

export default Home;
