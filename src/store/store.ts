import { configureStore } from "@reduxjs/toolkit"
import countReducer from "./reducer/countReducer";
// import rootReducer from './reducers'

const store = configureStore({
    reducer: {
      counter:countReducer
    }, // 将根 reducer 传递给 configureStore
  });


  export default store