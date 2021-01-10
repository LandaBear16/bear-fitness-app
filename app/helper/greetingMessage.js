export const greetingMessage = (m, userName) => {
  let messageTime = null

  if(!m || !m.isValid()) { return; } //if we can't find a valid or filled moment, we return.

  const split_afternoon = 12 //24hr time to split the afternoon
	const split_evening = 17 //24hr time to split the evening
  const currentHour = parseFloat(m.format("HH"));
  
  if(currentHour >= split_afternoon && currentHour <= split_evening) {
		messageTime = "afternoon";
	} else if(currentHour >= split_evening) {
		messageTime = "evening";
	} else {
		messageTime = "morning";
  }
  
  const personalisedGreeting = `Good ${messageTime}, Yolanda. 
  Lets get B-FIT!!!`
	
	return personalisedGreeting;
}