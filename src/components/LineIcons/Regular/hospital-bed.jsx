import React from 'react';

function HospitalBed(props) {
	const title = props.title || "hospital bed";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 25.5H4.8V10C4.8 9 4 8.2 3 8.2s-1.7.9-1.7 1.8v44c0 1 .8 1.8 1.8 1.8S4.9 55 4.9 54V39.6h54.5V54c0 1 .8 1.8 1.8 1.8S63 55 63 54V30.3c-.2-2.6-2.4-4.8-5-4.8zM4.8 29H58c.7 0 1.3.6 1.3 1.3v5.8H4.8V29z"/>
	</g>
</svg>
	);
};

export default HospitalBed;