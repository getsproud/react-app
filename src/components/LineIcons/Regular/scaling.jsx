import React from 'react';

function Scaling(props) {
	const title = props.title || "scaling";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 30.3H45.1V7c0-3.2-2.6-5.8-5.8-5.8H7C3.8 1.3 1.3 3.8 1.3 7v32.3c0 3.2 2.6 5.8 5.8 5.8h23.3V57c0 3.2 2.6 5.8 5.8 5.8h21c3.2 0 5.8-2.6 5.8-5.8V36c-.2-3.2-2.8-5.7-6-5.7zM7 41.6c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h32.3c1.2 0 2.3 1 2.3 2.3v23.3H36c-3.2 0-5.8 2.6-5.8 5.8v5.6H7zm34.6-7.8v5.6c0 1.2-1 2.3-2.3 2.3h-5.6V36c0-1.2 1-2.3 2.3-2.3h5.6zM59.3 57c0 1.2-1 2.3-2.3 2.3H36c-1.2 0-2.3-1-2.3-2.3V45.1h5.6c3.2 0 5.8-2.6 5.8-5.8v-5.6H57c1.2 0 2.3 1 2.3 2.3v21z"/>
	</g>
</svg>
	);
};

export default Scaling;