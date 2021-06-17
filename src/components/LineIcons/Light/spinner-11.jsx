import React from 'react';

function Spinner11(props) {
	const title = props.title || "spinner 11";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.5 8.3C48.2 3.4 41.2.4 33.5 0v10c4.9.3 9.4 2.3 12.9 5.4l7.1-7.1z"/>
		<path d="M33.5 53.9v10c7.7-.4 14.7-3.4 20-8.3l-7.1-7.1c-3.5 3.1-8 5.1-12.9 5.4z"/>
		<path d="M17.5 15.4c3.5-3.1 8-5 12.9-5.4V0c-7.7.4-14.7 3.4-20 8.3l7.1 7.1z"/>
		<path d="M10.4 55.7c5.3 4.9 12.3 7.9 20 8.3V54c-4.9-.3-9.4-2.3-12.9-5.4l-7.1 7.1z"/>
		<path d="M10 33.5H0c.4 7.7 3.4 14.7 8.3 20l7.1-7.1c-3.1-3.5-5-8-5.4-12.9z"/>
		<path d="M15.4 17.6l-7.1-7.1C3.4 15.8.4 22.8 0 30.5h10c.4-4.9 2.3-9.4 5.4-12.9z"/>
	</g>
</svg>
	);
};

export default Spinner11;