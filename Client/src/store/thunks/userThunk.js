import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserData = createAsyncThunk(
  "user/fetchUserData",
  async ({ userId }) => {
    try {
      const BASE_URL = import.meta.env.VITE_SERVER_URI;

      const response = await axios.get(
        `${BASE_URL}/api/v1/auth/getUser/${userId}`
      );

      return response.data.data;
    } catch (error) {
      return error;
    }
  }
);
