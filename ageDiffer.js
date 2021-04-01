const howOld=(age,year)=>{
  let todayDate=new Date();
  let thisYear=todayDate.getFullYear();
  let yearDifference=year-thisYear;
  let newAge=age+yearDifference;
  if(newAge > 0)
  {
    return `You will be ${newAge} in the ${year}`;
  }
  else if(newAge < 0)
  {
    return `The year  ${year} was ${-newAge} years before you were born`
  }
  else
  {
    return `You were ${age} in the year ${thisYear}`;
  }
}
console.log(howOld(24,2025));
