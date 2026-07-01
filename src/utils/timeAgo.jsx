export function timeAgo(timestamp){
  const seconds = Math.floor((Date.now() - timestamp)/1000);
  const mins = Math.floor(seconds/60);
  const hours = Math.floor(mins/60);
  const days = Math.floor(hours/24);
  const weeks = Math.floor(days/7);
  const months = Math.floor(days/30);
  const years = Math.floor(months/12);
  
  if(seconds < 60){
    return `${seconds > 10 ? `${seconds} seconds ago` : "just now" }`;
  }
  else if(mins < 60 ){
    return `${mins} min${mins > 1 ? "s" : ""} ago.`;
  }
  else if(hours < 24){
    return `${hours} hour${hours > 1 ? "s" : ""} ago.`;
  }
  else if(days < 7){
    return `${days} day${days > 1 ? "s" : ""} ago.`;
  }
  else if(weeks < 4){
    return `${weeks} week${weeks > 1 ? "s" : ""} ago.`;
  }
  else if(months < 12){
    return `${months} month${months > 1 ? "s" : ""} ago.`;
  }
  else{
    return `${years} year${years > 1 ? "s" : ""} ago.`
  }

}