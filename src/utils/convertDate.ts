export const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec'
];

export const convertTimeStampToDate = (
  timestamp: number,
  getYear: boolean = false
) => {
  const result =
    monthNames[new Date(timestamp * 1000).getMonth()] +
    ' ' +
    new Date(timestamp * 1000).getDate();
  return getYear
    ? result + ', ' + new Date(timestamp * 1000).getFullYear()
    : result;
};
