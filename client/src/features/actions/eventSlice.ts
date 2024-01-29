import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchEvents } from "../../API/eventCtrl";


  export interface CalendarEvent {
    title: string;
    start: string;
  }


interface addEventAction {
    userEvents: CalendarEvent[] | null;
    status: 'idle' | 'loading' | 'failed';
}

const initialState:addEventAction = {
    userEvents: null,
    status: 'idle'
};

export const actionSlice = createSlice({
    name: "userAction",
    initialState,
    reducers: {
        setUserEvents: (state, action:PayloadAction<CalendarEvent[]>)=>{
            state.userEvents = action.payload;
        },
    },
    extraReducers: (builder) =>{
        builder
        .addCase(fetchEvents.fulfilled,(state,action)=>{
            state.userEvents = action.payload;
        })
        .addCase(fetchEvents.rejected, (state)=>{
            // console.error('Error fetching events:', action.error.message);
            state.status = "failed"
        });
    },
});

export const {setUserEvents} = actionSlice.actions
export const actionSelector = (state: RootState) => state.userAction.userEvents
export default actionSlice.reducer;



