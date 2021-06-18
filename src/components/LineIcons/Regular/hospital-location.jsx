import React from 'react';

function HospitalLocation(props) {
	const title = props.title || "hospital location";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 51.4c1.3 0 2.5-.5 3.3-1.5 6.3-7 16.8-20 16.8-28.3 0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1c0 8.3 10.5 21.3 16.8 28.3.8.9 2 1.5 3.3 1.5zM32 5c9.1 0 16.6 7.4 16.6 16.6 0 5.1-5.9 14.8-15.9 25.9-.3.3-.6.3-.7.3s-.5 0-.7-.3c-9.9-11.1-15.9-20.8-15.9-25.9C15.4 12.4 22.9 5 32 5z"/>
		<path d="M53.5 38.6c-.9-.4-1.9 0-2.3.9-.4.9 0 1.9.9 2.3 4.5 1.9 7.1 4.4 7.1 6.8C59.3 53.5 48.1 59 32 59S4.8 53.5 4.8 48.6c0-2.4 2.7-4.9 7.3-6.9.9-.4 1.3-1.4.9-2.3-.4-.9-1.4-1.3-2.3-.9-6.1 2.6-9.5 6.2-9.5 10.1 0 7.9 13.2 13.8 30.8 13.8s30.8-6 30.8-13.8c0-3.9-3.3-7.4-9.3-10z"/>
		<path d="M33.8 27.1v-4.4h4.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-4.4v-4.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v4.4h-4.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.4v4.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8z"/>
	</g>
</svg>
	);
};

export default HospitalLocation;