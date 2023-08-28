import React from 'react';

const userLoggedIn = false;

const Header = () => {
  return (
    <header
      style={{
        backgroundColor: "black",
        height: "100vh",
        width: "80px",
        color: "white",
        opacity: "0.7",
        position: "absolute",
        top: "0",
        left: "0",
        zIndex: "999",
        boxShadow: "1pt 1pt 4pt black"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <p
          style={{
            color: "green",
            fontSize: "20pt",
            height: "1vh",
          }}
        >
          【＄】
        </p>
        <p
          style={{
            fontSize: "13pt",
          }}
        >
          Serenity
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {userLoggedIn ? (
          <button
            style={{
              width: "90%",
              fontSize: "45pt",
              borderRadius: "100%",
              backgroundColor: "green",
              color: "white",
              textShadow: "1pt 1pt 4pt black",
              border: "none",
              boxShadow: "1pt 1pt 3pt black",
              cursor: "pointer",
            }}
          >
            +
          </button>
        ) : (
            <>
          <button
            style={{
              width: "90%",
              fontSize: "12pt",
              backgroundColor: "green",
              color: "white",
              textShadow: "1pt 1pt 4pt black",
              border: "none",
              boxShadow: "1pt 1pt 3pt black",
              cursor: "pointer",
              padding: "5px", 
              borderRadius:"2px"
            }}
          >
            Register
          </button>
          <button
            style={{
              width: "90%",
              fontSize: "12pt",
              backgroundColor: "purple",
              color: "white",
              textShadow: "1pt 1pt 4pt black",
              border: "none",
              boxShadow: "1pt 1pt 3pt black",
              cursor: "pointer",
              padding: "5px", 
              borderRadius:"2px",
              margin:"15px"
            }}
          >
            About
          </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
