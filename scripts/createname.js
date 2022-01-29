let CurrentTimestamp = Date.now();
let CurrentDate = new Date(CurrentTimestamp);
let FirstDayOfCurrentYear = new Date(CurrentDate.getFullYear(), 0, 1); 
let Difference = CurrentTimestamp - FirstDayOfCurrentYear.getTime();

let FullDay = 1000 * 60 * 60 * 24;

let DaysSince = Math.round(Difference) / FullDay;

let Result = DaysSince.toFixed(0);
console.log(`${CurrentDate.getFullYear()}d${Result}h${CurrentDate.getHours()}`);