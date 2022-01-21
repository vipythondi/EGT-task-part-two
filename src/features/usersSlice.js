import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const getUsers = createAsyncThunk('users/getUsers', async () => {
  const url = `https://jsonplaceholder.typicode.com/users`
  const response = await fetch(url)
  const data = await response.json()
  return data
})


export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false
  },
  reducers: {
    changeName: (state, action) => {
      state.users.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name
        }
      })
    },
    changeUsername: (state, action) => {
      state.users.map((user) => {
        if (user.id === action.payload.id) {
          user.username = action.payload.username
        }
      })
    },
    changeEmail: (state, action) => {
      state.users.map((user) => {
        if (user.id === action.payload.id) {
          user.email = action.payload.email
        }
      })
    },
    changeStreet: (state, action) => {
      state.users.map((user) => {
        if (user.id === action.payload.id) {
          user.address.street = action.payload.street
        }
      })
    },
    changeSuite: (state, action) => {
      state.users.map((user) => {
        if (user.id === action.payload.id) {
          user.address.suite = action.payload.suite
        }
      })
    },
    changeCity: (state, action) => {
      state.users.map((user) => {
        if (user.id === action.payload.id) {
          user.address.city = action.payload.city
        }
      })
    }
  },
  extraReducers: {
    [getUsers.pending]: (state, action) => {
      state.loading = true
    },
    [getUsers.fulfilled]: (state, action) => {
      state.loading = false
      state.users = action.payload
    },
    [getUsers.rejected]: (state, action) => {
      state.loading = false
    }
  }
});


export const { changeName, changeUsername,changeEmail,changeStreet,changeSuite,changeCity} = usersSlice.actions
export default usersSlice.reducer;
