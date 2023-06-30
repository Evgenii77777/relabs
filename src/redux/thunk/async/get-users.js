import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        " https://test.relabs.ru/api/users/list?limit=30"
      );

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
