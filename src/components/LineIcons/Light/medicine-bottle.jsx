import React from 'react';

function MedicineBottle(props) {
	const title = props.title || "medicine bottle";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.8 21.2l-7.2-7.8V1.5C42.6.7 42 0 41.1 0H22.9c-.8 0-1.5.7-1.5 1.5v11.8l-7.2 7.8c-2.2 2.4-3.4 5.5-3.4 8.7v32.6c0 .8.7 1.5 1.5 1.5h39.3c.8 0 1.5-.7 1.5-1.5V29.9c.1-3.2-1.1-6.3-3.3-8.7zM24.4 3h15.3v9.4H24.4V3zM13.8 38.6h16.7v14.8H13.8V38.6zM50.2 61H13.8v-4.6H32c.8 0 1.5-.7 1.5-1.5V37.1c0-.8-.7-1.5-1.5-1.5H13.8v-5.7c0-2.5.9-4.8 2.6-6.6l7.1-7.8h17l7.1 7.8c1.7 1.8 2.6 4.2 2.6 6.6V61z"/>
	</g>
</svg>
	);
};

export default MedicineBottle;