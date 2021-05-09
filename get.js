export default (select) => {
	const element = document.querySelector(select);
	if (element) return element;
	throw new Error(`Please Check ${select} selector`);
};
