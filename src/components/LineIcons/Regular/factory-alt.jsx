import React from 'react';

function FactoryAlt(props) {
	const title = props.title || "factory alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.2 23.4L44 17c-1.4-.6-3.1-.6-4.5 0l-15.6 6.6L21.2 7c-.5-2.8-2.9-4.9-5.7-4.9h-5.1c-2.8 0-5.2 2-5.7 4.7L1.3 25.1v31c0 3.2 2.6 5.8 5.8 5.8h24.1c3.2 0 5.8-2.6 5.8-5.8v-4.3c0-1.3 1-2.3 2.3-2.3h5.8c1.3 0 2.3 1 2.3 2.3v4.3c0 3.2 2.6 5.8 5.8 5.8h4c3.2 0 5.8-2.6 5.8-5.8V28.7c-.2-2.3-1.6-4.4-3.8-5.3zM7 58.4c-1.3 0-2.3-1-2.3-2.3V25.6L8.1 7.5c.2-1.1 1.1-1.9 2.2-1.9h5.1c1.1 0 2.1.8 2.3 1.9l3 18.7v32.2H7zm52.3-2.3c0 1.3-1 2.3-2.3 2.3h-4c-1.3 0-2.3-1-2.3-2.3v-4.3c0-3.2-2.6-5.8-5.8-5.8h-5.8c-3.2 0-5.8 2.6-5.8 5.8v4.3c0 1.3-1 2.3-2.3 2.3h-6.8V27.2l16.6-7c.6-.2 1.2-.2 1.8 0l15.2 6.4c.9.4 1.4 1.2 1.4 2.1v27.4z"/>
	</g>
</svg>
	);
};

export default FactoryAlt;