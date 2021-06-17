import React from 'react';

function Lamp1(props) {
	const title = props.title || "lamp 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.8 59.2H48v-42c0-6.7-5.4-12.1-12.1-12.1H21.8l-3.4-3.4c-.7-.7-1.8-.7-2.5 0l-5.7 5.7c-.7.7-.7 1.8 0 2.5l-3 3C6.1 14 5.5 15.5 5.5 17c0 1.5.6 3 1.7 4.1l5.7 5.7c1.1 1.1 2.5 1.7 4.1 1.7 1.5 0 3-.6 4.1-1.7l3-3c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l5.7-5.7c.7-.7.7-1.8 0-2.5l-6.9-6.9h10.6c4.7 0 8.6 3.9 8.6 8.6v42h-8.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h21.1c1 0 1.8-.8 1.8-1.8s-.9-1.9-1.8-1.9zM18.5 24.3c-.9.9-2.3.9-3.2 0l-5.7-5.7c-.4-.4-.6-1-.6-1.6 0-.6.2-1.2.7-1.6l3-3 8.9 8.9-3.1 3zm6.7-4.2L13.9 8.7l3.3-3.3 11.3 11.3-3.3 3.4z"/>
	</g>
</svg>
	);
};

export default Lamp1;