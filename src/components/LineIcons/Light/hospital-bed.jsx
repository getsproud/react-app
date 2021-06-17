import React from 'react';

function HospitalBed(props) {
	const title = props.title || "hospital bed";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 25H3V8.3c0-.8-.7-1.5-1.5-1.5S0 7.5 0 8.3v46.1c0 1 .7 1.6 1.5 1.6S3 55.4 3 54.5V39.1h58v15.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V26.5c0-.8-.7-1.5-1.5-1.5zM3 28h58v8.1H3V28z"/>
	</g>
</svg>
	);
};

export default HospitalBed;