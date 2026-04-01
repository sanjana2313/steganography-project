import axios from "axios";

const API = "http://localhost:8081/stego";

// ✅ ENCODE
export const encodeImage = (formData) =>
  axios.post(`${API}/encode`, formData, {
    responseType: "blob",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: false, // 🔥 IMPORTANT (prevents 401)
  });

// ✅ DECODE
export const decodeImage = (formData) =>
  axios.post(`${API}/decode`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
    withCredentials: false, // 🔥 IMPORTANT
  });