import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    city: undefined ,
    date: [],
    options: {
      adult: undefined,
      children: undefined,
      room: undefined,
    },
}
  

const SearchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    newSearch: (state, action) => {
        const newItem = action.payload
        state.city = newItem.destination
        state.date = newItem.date
        state.options = newItem.options
    },

    resetSearch: (state, action) => {
        // const newItem = action.payload
        state.city = ""
        state.date = []
        state.option = {}

    }
  }
});

export const SearchActions = SearchSlice.actions

export default SearchSlice.reducer