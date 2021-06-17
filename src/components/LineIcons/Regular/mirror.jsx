import React from 'react';

function Mirror(props) {
	const title = props.title || "mirror";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.7 59.3H33.8V54c9.2-1.2 16.5-11 16.5-22.9S43 9.4 33.8 8.3V3c0-1-.8-1.8-1.8-1.8S30.2 2 30.2 3v5.3C21 9.4 13.7 19.2 13.7 31.1S21 52.8 30.3 53.9v5.3h-14c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h31.3c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.7-1.7zM17.2 31.1c0-10.7 6.6-19.4 14.8-19.4 8.2 0 14.8 8.7 14.8 19.4S40.2 50.5 32 50.5c-8.2 0-14.8-8.7-14.8-19.4z"/>
	</g>
</svg>
	);
};

export default Mirror;