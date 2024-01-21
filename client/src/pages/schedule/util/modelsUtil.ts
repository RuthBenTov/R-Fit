import { calendarEvent } from "../../../API/eventCtrl";

export interface FullcalendarProps {
    calendarEvents: calendarEvent[]; 
  }

  interface TrainingNameColors{
    [key:string]:string
  }

  const trainingNameColors:TrainingNameColors = {
    'daniel': 'lightblue',
    'neta': 'lightgreen',
    'Lila': 'lightcoral',
    'Ruth': 'lightcoral',
  };
  

   export const getBackgroundColor = (trainingName:string) => {
    return trainingNameColors[trainingName] || 'lightgrey'; 
  };