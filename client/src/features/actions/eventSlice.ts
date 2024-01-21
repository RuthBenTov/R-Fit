import {PayloadAction, createSlice} from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchEvents } from "../../API/eventCtrl";


  export interface CalendarEvent {
    title: string;
    start: string;
  }


interface addEventAction {
    userEvents: CalendarEvent[] | null;
}

const initialState:addEventAction = {
    userEvents: null,
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
        .addCase(fetchEvents.rejected, (state, action)=>{
            console.error('Error fetching events:', action.error.message);
        });
    },
});

export const {setUserEvents} = actionSlice.actions
export const actionSelector = (state: RootState) => state.userAction.userEvents
export default actionSlice.reducer;



