import React from 'react';

function ThermometerAlt(props) {
	const title = props.title || "thermometer alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M41.1 38V10.1c0-4.9-4-8.8-8.8-8.8h-.6c-4.9 0-8.8 4-8.8 8.8V38c-3.2 2.8-5 6.8-4.9 11.1.2 7.3 6.3 13.4 13.6 13.6h.4c3.7 0 7.1-1.4 9.8-4 2.7-2.7 4.3-6.2 4.3-10.1-.1-4-1.8-7.9-5-10.6zm-1.8 18.3c-2.1 2-4.8 3.1-7.6 3-5.5-.2-10.1-4.7-10.2-10.2-.1-3.4 1.5-6.7 4.2-8.7.4-.3.7-.8.7-1.4V10.1c0-2.9 2.4-5.3 5.3-5.3h.6c2.9 0 5.3 2.4 5.3 5.3v28.8c0 .5.3 1.1.7 1.4 2.7 2 4.2 5.1 4.2 8.4 0 2.9-1.1 5.6-3.2 7.6z"/>
		<path d="M33.8 45.7V31c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v14.7c-1.5.7-2.5 2.1-2.5 3.9 0 2.4 1.9 4.3 4.3 4.3s4.3-1.9 4.3-4.3c0-1.7-1.1-3.2-2.5-3.9z"/>
	</g>
</svg>
	);
};

export default ThermometerAlt;