// OUTPUT: Mon, Oct 7, 2024
export const getFormattedDate = (dateTime) => {
	// const dayObj = new Date(Date.dayObj());
	const dayObj = new Date(dateTime);
	const options = { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' };

	let formattedDateStr = dayObj.toLocaleDateString(dayObj, options);

	return formattedDateStr;
};
