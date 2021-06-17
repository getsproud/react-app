import React from 'react';

function Stairs(props) {
	const title = props.title || "stairs";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.3 25.1h-3.4V5.5h5.5c1 0 1.8-.8 1.8-1.8S59.4 2 58.4 2h-7.3c-.2 0-.4 0-.5.1h-.1c-.2.1-.3.1-.4.2L6 37.1c-.8.6-.9 1.7-.3 2.5.3.4.9.7 1.4.7.4 0 .8-.1 1.1-.4l8.9-7v12.6h-2.4c-1 0-1.8.8-1.8 1.8v11.3H3c-1 0-1.8.8-1.8 1.8S2 62 3 62h53.3c3.6 0 6.5-2.9 6.5-6.5v-24c0-3.5-2.9-6.4-6.5-6.4zm-11.5 0c-1 0-1.8.8-1.8 1.8v9.5h-6.3v-19l12.7-10v17.7h-4.6zm-24.2 5l12.7-10v16.2h-3.4c-1 0-1.8.8-1.8 1.8v7.4h-7.5V30.1zm38.7 25.4c0 1.6-1.3 3-3 3H16.5v-9.6h13.4c1 0 1.8-.8 1.8-1.8v-7.4h13.1c1 0 1.8-.8 1.8-1.8v-9.5h9.7c1.6 0 3 1.3 3 3v24.1z"/>
	</g>
</svg>
	);
};

export default Stairs;