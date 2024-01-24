import { calendarEvent } from "../../../API/eventModel";


export interface FullcalendarProps {
    calendarEvents: calendarEvent[]; 
  }

  interface TrainingNameColors{
    [key:string]:string
  }

  const trainingNameColors:TrainingNameColors = {
    'Daniel': 'lightblue',
    'Neta': 'lightgreen',
    'Lila': 'lightcoral',
    'Ruth': 'lightcoral',
  };
  

   export const getBackgroundColor = (trainingName:string) => {
    return trainingNameColors[trainingName] || 'lightgrey'; 
  };