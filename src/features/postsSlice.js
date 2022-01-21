import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';


export const getPosts = createAsyncThunk('posts/getPosts', async (userId) => {
  const url = `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  const response = await fetch(url)
  const postdata = await response.json()
  return postdata
}) 


export const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    loading: false
  },
  reducers: {
   
  },
  extraReducers: {
    [getPosts.pending]: (state, action) => {
      state.loading = true
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = false
      state.posts = action.payload
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = false
    }
  }
});



export default postsSlice.reducer;