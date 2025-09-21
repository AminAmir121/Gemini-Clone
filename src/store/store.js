
import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI("AIzaSyDgVhirrOO004IBr63fjkua5T1b-bwBHRM")

export const Fetching = createAsyncThunk(
    'gemini/fetching',
    async (UserInp) => {
        console.log(UserInp);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(UserInp);
        const response =   await result.response.text();
        console.log(response);
        
        return response;

    }
)

const gemSlice = createSlice(
    {
        name: 'gemini',
        initialState: {
            Api: null,
            loading: false,
            error: null,
            hasSearched: false,
            userPrompt: " ",
        },
        reducers: {
            setUserPrompt : (state, action)=>{
                state.userPrompt = action.payload;
            }
        },
        extraReducers: (builder) => {
            builder
                .addCase(Fetching.pending, (state) => {
                    state.loading = true;
                    state.error = null;
                    state.Api = null;
                    state.hasSearched = true;
                })
                .addCase(Fetching.fulfilled, (state, action) => {
                    state.loading = false;
                    state.Api = action.payload;
                    state.error = null;
                    state.hasSearched = true;
                })
                .addCase(Fetching.rejected, (state) => {
                    state.loading = false;
                    state.error = 'SomeThing Went Wrong!'
                    state.Api = null;
                    state.hasSearched = true;
                })
        }

    }

)

const Store = configureStore({
    reducer: {
        gemini: gemSlice.reducer
    }
})

export default Store;
export const geminiAction = gemSlice.actions;
export const { setUserPrompt } = gemSlice.actions;