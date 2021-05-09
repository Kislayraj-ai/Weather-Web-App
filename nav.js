import get from './get.js';

const degree = get('.degree');
const about = get('.about');
let description = get('.description');
const minmax = get('.minmax');
const winds = get('.wind-speed');

const nav = ({ main, weather, wind }) => {
	let { temp: temp, temp_min: min, temp_max: max } = main;

	temp = Math.ceil(temp - 273);

	if (temp <= 10) {
		document.body.style.background =
			'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(snowy.jpeg)center/cover no-repeat';
		about.innerHTML = `Its Freaking Cold`;
	} else if (temp <= 18) {
		document.body.style.background =
			'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(clody.jpeg)center/cover no-repeat';
		about.innerHTML = `Its Normal Wheather`;
	} else if (temp <= 28) {
		document.body.style.background =
			'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),url(sunny.jpeg)center/cover no-repeat';
		about.innerHTML = `Its Hot`;
	}

	degree.innerHTML = temp;

	//! min and max temperature
	min = Math.ceil(min - 273);
	max = Math.ceil(max - 273);
	minmax.innerHTML = ` <h3 class="mm">Min :- ${min} deg</h3>
                <h3 class="mm">Max :- ${max} deg</h3>`;

	//* wheather-----//
	const wh = weather
		.map((item) => {
			const { main } = item;
			return ` <h3>${main}</h3>`;
		})
		.join('');
	description.innerHTML = wh;

	//* wind speed

	let { speed, deg } = wind;
	winds.innerHTML = `<h2>Wind Speed</h2>
                <h3 class="speed">Speed:- ${speed}</h3>
                <h3 class="speed">deg:- ${deg}</h3>`;
};

export default nav;
