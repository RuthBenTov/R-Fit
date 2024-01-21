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





// import {createSlice} from "@reduxjs/toolkit";
// import { getUserEventsAPI } from "../../API/userApi";
// import { RootState } from "../../app/store";


// interface addEventAction {
//     userEvents: Event[] | null;
//     userEventsStatus:string;
// }

// const initialState:addEventAction = {
//     userEvents: null,
//     userEventsStatus: "idle"
// };

// export const actionSlice = createSlice({
//     name: "userAction",
//     initialState,
//     reducers: {},
//         extraReducers: (builder) => {
//             builder
//             .addCase(getUserEventsAPI.pending, (state)=>{
//                 state.userEventsStatus = "loading";
//             })
//             .addCase(getUserEventsAPI.fulfilled, (state,action)=>{
//                 state.userEventsStatus = "idle";
//                 state.userEvents = action.payload;
//             })
//             .addCase(getUserEventsAPI.rejected, (state)=>{
//                 state.userEventsStatus = "failed";
//             });
//         },
// });

// export const actionSelector = (state: RootState) => state.userAction.userEvents
// export default actionSlice.reducer;
