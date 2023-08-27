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

async function getBowls() {
  try {
    const response = await api.get("bowls/");
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

async function createBowl(bowlData: any) {
  try {
    const response = await api.post("bowls/", bowlData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

async function updateBowl(bowlId: any, updatedData: any) {
  try {
    const response = await api.patch(`bowls/${bowlId}`, updatedData);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

async function deleteBowl(bowlId: any) {
  try {
    const response = await api.delete(`bowls/${bowlId}`);
    return response.data;
  } catch (error) {
    handleError(error);
  }
}

export { getBowls, createBowl, updateBowl, deleteBowl };
