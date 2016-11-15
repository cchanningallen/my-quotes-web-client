const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

export const getToday = () => {
  const date = new Date();
  return DAYS[date.getDay()];
};
