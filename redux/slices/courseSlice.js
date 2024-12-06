import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
<<<<<<< HEAD
import { getPopularCourse, getInspiresCourse, getCourseByName } from '../../services/courseService';
=======
import { getPopularCourse, getInspiresCourse } from '../../services/courseService';
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9

const initialState = {
    popularCourse: [],
    allCourse: [],
<<<<<<< HEAD
    searchCourses: [],
=======
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
    inspiresCourse: [],
    loadingCourse: false,
    errorCourse: null
};


export const fetchPopularCourse = createAsyncThunk('course/getPopularCourse', async (_, { rejectWithValue }) => {
    try {
        const response = await getPopularCourse();
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.message || 'Error fetching popular course');
    }
});
export const fetchInspiresCourse = createAsyncThunk('course/getInspiresCourse', async ({ categoryId, limit }, { rejectWithValue }) => {
    try {
        const response = await getInspiresCourse(categoryId, limit);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.message || 'Error fetching inprires course');
    }
});
<<<<<<< HEAD
export const searchCourseByName = createAsyncThunk('course/searchCourse', async ({ nameCourse }, { rejectWithValue }) => {
    try {
        const response = await getCourseByName(nameCourse);
        return response;
    } catch (error) {
        return rejectWithValue(error.response?.message || 'Error search course by name');
    }
});
=======
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9

// Slice
const courseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            // Fetch popular course
            .addCase(fetchPopularCourse.pending, (state) => {
                state.loadingCourse = true
            })
            .addCase(fetchPopularCourse.fulfilled, (state, action) => {
                state.loadingCourse = false
                state.popularCourse = action.payload;
            })
            .addCase(fetchPopularCourse.rejected, (state, action) => {
                state.loading = false;
                state.errorCourse = action.payload;
            })

            // Fetch inpires course
            .addCase(fetchInspiresCourse.pending, (state) => {
                state.loadingCourse = true
            })
            .addCase(fetchInspiresCourse.fulfilled, (state, action) => {
                state.loadingCourse = false
                state.inspiresCourse = action.payload;
            })
            .addCase(fetchInspiresCourse.rejected, (state, action) => {
                state.loading = false;
                state.errorCourse = action.payload;
            })
<<<<<<< HEAD
=======

>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
            ;
    },
});
export default courseSlice.reducer;
