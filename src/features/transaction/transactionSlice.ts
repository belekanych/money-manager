import { createSlice } from "@reduxjs/toolkit"

interface State {
  items: String[]
}

const initialState: State = {
  items: [],
}

export const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    create: (state, { payload }: { payload: string }) => {
      state.items.push(payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { create } = transactionSlice.actions

export default transactionSlice.reducer
