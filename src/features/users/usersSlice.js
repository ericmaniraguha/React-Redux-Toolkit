import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Orane Carla' },
  { id: '1', name: 'Parker Addison' },
  { id: '2', name: 'Eric Brad' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;
