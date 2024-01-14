export const getThisDate = () => {
  const today: Date = new Date();

  const year: number = today.getFullYear();
  let month: string | number = today.getMonth() + 1;
  let day: string | number = today.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (day < 10) {
    day = `0${day}`;
  }
  const formattedDate: string = `${year}-${month}-${day}`;
  return formattedDate;
};
