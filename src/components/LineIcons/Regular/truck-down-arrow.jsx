import React from 'react';

function TruckDownArrow(props) {
	const title = props.title || "truck down arrow";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.4 38.5l-6.1-8.9c-.3-.5-.9-.8-1.4-.8h-9.4V27c0-3-2.4-5.4-5.4-5.4h-6.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H40c1.1 0 1.9.9 1.9 1.9v24.8h-8.2c-.6-2.4-2.7-4.2-5.3-4.2s-4.7 1.8-5.3 4.2h-5.9c-1.1 0-1.9-.9-1.9-1.9V38c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v11.8c0 3 2.4 5.4 5.4 5.4h6.3c.9 1.9 2.7 3.2 4.9 3.2s4.1-1.3 4.9-3.2h13.4c.9 1.9 2.7 3.2 4.9 3.2s4.1-1.3 4.9-3.2H61c1 0 1.8-.8 1.8-1.8V39.5c0-.3-.2-.7-.4-1zM54 32.4l4.1 6H45.5v-6H54zM28.4 54.9c-1.1 0-1.9-.9-1.9-1.9 0-1.1.9-1.9 1.9-1.9 1.1 0 1.9.9 1.9 1.9.1 1.1-.8 1.9-1.9 1.9zm23.3 0c-1.1 0-1.9-.9-1.9-1.9 0-1.1.9-1.9 1.9-1.9s1.9.9 1.9 1.9c.1 1.1-.8 1.9-1.9 1.9zm5.3-3.2c-.6-2.4-2.7-4.2-5.3-4.2s-4.7 1.8-5.3 4.2h-1v-9.8h13.8v9.8H57z"/>
		<path d="M29 19.4c0-7.6-6.2-13.9-13.9-13.9S1.3 11.8 1.3 19.4s6.2 13.9 13.9 13.9S29 27.1 29 19.4zm-24.2 0C4.8 13.7 9.4 9 15.2 9c5.7 0 10.4 4.6 10.4 10.4 0 5.7-4.6 10.4-10.4 10.4-5.8 0-10.4-4.7-10.4-10.4z"/>
		<path d="M20.7 19.5c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-3.1 3.1-3.1-3c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l4.3 4.3c.3.3.8.5 1.2.5s.9-.2 1.2-.5l4.5-4.4z"/>
	</g>
</svg>
	);
};

export default TruckDownArrow;