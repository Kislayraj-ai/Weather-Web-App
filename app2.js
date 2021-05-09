import nav from './nav.js';
import fetchData from './fetch.js';

// const key = ' 3888e0ae20159710058a5345dd312a4c';

window.addEventListener('DOMContentLoaded', () => {
	let lat;
	let long;
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(async (position) => {
			console.log(position);
			lat = position.coords.latitude;
			long = position.coords.longitude;
			const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=3888e0ae20159710058a5345dd312a4c`;

			const response = await fetchData(api);
			nav(response);
		});
	} else {
		alert('Please check GPS or Connection');
	}
});
// https://api.openweathermap.org/data/2.5/weather?lat=25.0960742&lon=85.31311939999999&appid=3888e0ae20159710058a5345dd312a4c
