import React from 'react';

function HospitalAlt(props) {
	const title = props.title || "hospital alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 15.8H49v-5c0-.8-.7-1.5-1.5-1.5h-2.2V1.5c0-.8-.7-1.5-1.5-1.5H20.2c-.8 0-1.5.7-1.5 1.5v7.8h-2.2c-.8 0-1.5.7-1.5 1.5v5H1.5c-.8 0-1.5.7-1.5 1.5v45.2c0 .8.7 1.5 1.5 1.5h61.1c.8 0 1.5-.7 1.5-1.5V17.3c-.1-.8-.8-1.5-1.6-1.5zM21.7 3h20.5v6.3H21.7V3zM3 18.8h12V61H3V18.8zM33.4 61h-4.9V45.1h6.8V61h-1.9zm5 0V43.6c0-.8-.7-1.5-1.5-1.5h-9.8c-.8 0-1.5.7-1.5 1.5V61H18V12.3h28V61h-7.6zM61 61H49V18.8h12V61z"/>
		<path d="M36.8 21.6h-3.3v-3.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v3.3h-3.3c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h3.3V28c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-3.3h3.3c.8 0 1.5-.7 1.5-1.5s-.6-1.6-1.5-1.6z"/>
	</g>
</svg>
	);
};

export default HospitalAlt;