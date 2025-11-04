const url = 'https://yahoo-weather5.p.rapidapi.com/weather?location=delhi&format=json&u=f';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'b8d827d839msh9a4e5b18ae80cc1p1157dejsn71ddc16daa08',
		'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com'
	}
};
const func = async () => {
    try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}   
}