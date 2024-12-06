import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlice'; // Đường dẫn tới file userSlice
import categoryReducer from "./slices/categorySlice"
import courseReducer from "./slices/courseSlice"
<<<<<<< HEAD
import topicReducer from "./slices/topicSlice"
=======
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
export const store = configureStore({
    reducer: {
        user: userReducer,
        category: categoryReducer,
<<<<<<< HEAD
        course: courseReducer,
        topic: topicReducer
=======
        course: courseReducer
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
    },
});

export default store;
