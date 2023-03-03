import { configureStore } from "@reduxjs/toolkit";
import transactionReducer from "../features/transaction/transactionSlice";

export default configureStore({
  reducer: {
    transaction: transactionReducer,
  },
});
