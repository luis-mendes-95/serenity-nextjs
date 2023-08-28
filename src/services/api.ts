import axios from "axios";

const baseURL = "http://localhost:3000/";

const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imx1aXNAbWFpbC5jb20iLCJpYXQiOjE2OTMxNjA2NjEsImV4cCI6MTcyNDY5NjY2MSwic3ViIjoiNTdiNDA0OGMtZWQ0YS00N2FmLWEyNDEtMzJhNTc5MTMyOGIxIn0.qhsmC6yr2kqPC2y8_vAkuNHBjEEYuWX8kXeKcSJaA0I";

const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${authToken}`,
  },
});

const handleError = (error: any) => {
  if (error.response) {
    console.error(
      "Erro na requisição:",
      error.response.status,
      error.response.data
    );
  } else if (error.request) {
    console.error(
      "Erro na requisição, sem resposta do servidor:",
      error.request
    );
  } else {
    console.error("Erro ao configurar a requisição:", error.message);
  }
  throw error;
};

export {api, handleError}