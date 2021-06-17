import React from 'react';

function PunchingBag(props) {
	const title = props.title || "punching bag";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M33.8 14.9V4.8h6.5C41.2 4.8 42 4 42 3s-.8-1.8-1.8-1.8H23.7C22.8 1.3 22 2 22 3s.8 1.8 1.8 1.8h6.5v10.1c-3.4 2.9-19 17-19 27.1 0 11.4 9.3 20.7 20.7 20.7 11.4 0 20.7-9.3 20.7-20.7 0-10.1-15.5-24.2-18.9-27.1zM32 59.3c-9.5 0-17.2-7.7-17.2-17.2 0-7.4 11.5-19 17.2-24 5.7 5 17.2 16.6 17.2 24 0 9.4-7.7 17.2-17.2 17.2z"/>
	</g>
</svg>
	);
};

export default PunchingBag;