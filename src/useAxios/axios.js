// api.js faylida
import axios from "axios";

export const apiRequest = async ({ url, method = "GET", body = null, token = null }) => {
  try {
    const token =JSON.parse(localStorage.getItem("token"));
    const res = await axios({
      url,
      method,
      data: body,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    return res.data;
  } catch (err) {
    return { error: err.response ? err.response.data : err.message };
  }
};




