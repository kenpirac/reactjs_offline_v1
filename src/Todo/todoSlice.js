import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  list: [],
};

export const fetchTodos = createAsyncThunk('todo/fetchAll', async (params, thunkAPI) => {
  const response = await axios.get('http://localhost:4000/todos');
  return response.data;
});

export const addTodo = createAsyncThunk('todo/addabc', async (data, thunkAPI) => {
  const response = await axios.post('http://localhost:4000/todos', data);
  return response.data;
});

export const deleteTodo = createAsyncThunk('todo/deleteabc', async (id, thunkAPI) => {
  const response = await axios.delete('http://localhost:4000/todos/' + id);
  return { id };
});

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.list = action.payload;
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.list.push(action.payload);
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.list = state.list.filter((item) => item.id !== action.payload.id);
      })
      .addMatcher(
        (action) => action.type.includes('abc') && action.type.endsWith('/fulfilled'),
        (state, action) => {
          console.log('thuc hien cong viec x');
        }
      );
  },
});

export default todoSlice.reducer;
