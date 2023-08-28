
const userLoggedIn = false;
const showRegisterModal = false;

const Header = () => {
  return (
    <>
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
          zIndex: "2",
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
                  borderRadius: "2px"
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
                  borderRadius: "2px",
                  margin: "15px"
                }}
              >
                About
              </button>
            </>
          )}
        </div>
      </header>
      <>
      {showRegisterModal && (
              <div style={{
                width: "100vw",
                height: "100vh",
                backgroundColor: 'rgb(153, 228, 243)',
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "3"
              }}>
                <div style={{
                  display: "flex",
                  width: "100%",
                  justifyContent: "space-between"
                }}>
                <h2 style={{
                  color: "white",
                  textShadow: "1pt 1pt 1pt black",
                  margin: "5%",
                  fontSize:"25pt"
                }}>Register</h2>
                <button style={{
                  backgroundColor:"brown",
                  color: "white",
                  width: "60px",
                  height: "60px",
                  border: "none",
                  margin: "1%",
                  borderRadius: "8px"
                }}>X</button>
                </div>
        
                <div style={{
                  margin: "5% 0 0 0",
                  display: "flex",
                  justifyContent: "flex-end"
                }}>
                  <label style={{
                    color: "white",
                    textShadow: "1pt 1pt 1pt black",
                    margin: "5% 1%",
                    fontSize: "15pt"
                  }}>Seu nome:</label>
        
                  <input style={{
                    backgroundColor: "white",
                    border: "none",
                    height: "40px",
                    color: "black",
                    fontSize: "13pt",
                    borderRadius:"8px"
                  }} />
                </div>
        
                <div style={{
                  margin: "5% 0 0 0",
                  display: "flex",
                  justifyContent: "flex-end"
                }}>
                  <label style={{
                    color: "white",
                    textShadow: "1pt 1pt 1pt black",
                    margin: "5% 1%",
                    fontSize: "13pt"
                  }}>Seu e-mail:</label>
        
                  <input style={{
                    backgroundColor: "white",
                    border: "none",
                    height: "40px",
                    color: "black",
                    fontSize: "13pt",
                    borderRadius:"8px"
                  }} />
                </div>
        
                <div style={{
                  margin: "5% 0 0 0",
                  display: "flex",
                  justifyContent: "flex-end"
                }}>
                  <label style={{
                    color: "white",
                    textShadow: "1pt 1pt 1pt black",
                    margin: "5% 1%",
                    fontSize: "13pt",
                  }}>Senha:</label>
        
                  <input style={{
                    backgroundColor: "white",
                    border: "none",
                    height: "40px",
                    color: "black",
                    fontSize: "13pt",
                    borderRadius:"8px"
                  }}
                  type='password' />
                </div>
        
                <div style={{
                  display:"flex",
                  justifyContent:"center"
                }}>
                  <button style={{
                    backgroundColor:"green",
                    border:"none",
                    padding: "5% 15%",
                    fontWeight: "bold",
                    color:"white",
                    fontSize:"14pt",
                    textShadow:"1pt 1pt 2pt black",
                    borderRadius:"8px"
                  }}>Enter</button>
                </div>
        
                <div style={{
                  display:"flex",
                  justifyContent:"center"
                }}>
                  <button style={{
                    backgroundColor:"brown",
                    border:"none",
                    padding: "5% 15%",
                    fontWeight: "bold",
                    color:"white",
                    fontSize:"14pt",
                    textShadow:"1pt 1pt 2pt black",
                    borderRadius:"8px",
                    margin: "20px 0 0 0"
                  }}>Cancelar</button>
                </div>
        
              </div>
      )}
      </>
    </>
  );
};

export default Header;
