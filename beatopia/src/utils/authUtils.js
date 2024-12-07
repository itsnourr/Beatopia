import { jwtDecode } from "jwt-decode";

export const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token !== null;
  };


export const isTokenExpired = (token) => {
  if (!token) return true;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Convert to seconds
    return decoded.exp < currentTime; // Token is expired if 'exp' < current time
  } catch (error) {
    console.error("Error decoding token:", error);
    return true; // If token can't be decoded, consider it invalid
  }
};
