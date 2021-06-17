import React from 'react';

function Reservoir1(props) {
	const title = props.title || "reservoir 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.6 59l-9-21.7v-16h5.3c.8 0 1.5-.5 1.7-1.3s-.1-1.6-.8-2L38.2 4.4C34.4 2 29.5 2 25.7 4.4L4.1 18c-.7.4-1 1.2-.8 2s.9 1.3 1.7 1.3h5.3v16.1L1.4 59c-.4.9.1 1.9.9 2.3.2.1.4.1.7.1.7 0 1.3-.4 1.6-1.1l6.7-16.1C14 53 22.3 59.4 32 59.4S50 53 52.7 44.1l6.7 16.2c.3.7.9 1.1 1.6 1.1.2 0 .5 0 .7-.1.9-.4 1.3-1.5.9-2.3zm-35-51.6c2.7-1.7 6.1-1.7 8.8 0l16.5 10.3H11.1L27.6 7.4zm22.5 13.8v14.7H13.9V21.2h36.2zM32 55.9c-9.5 0-17.2-7.3-18-16.5h36c-.8 9.2-8.6 16.5-18 16.5z"/>
	</g>
</svg>
	);
};

export default Reservoir1;