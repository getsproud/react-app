import React from 'react';

function Cone(props) {
	const title = props.title || "cone";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.5 49.9h-4L33.3.9C33.1.3 32.6 0 32 0s-1.1.3-1.4.9l-22.2 49h-4c-2.5 0-4.5 2-4.5 4.5v5.1C0 62 2 64 4.5 64h55c2.5 0 4.5-2 4.5-4.5v-5.1c0-2.5-2-4.5-4.5-4.5zM21.7 28h20.6l4.9 10.9H16.8L21.7 28zM32 5.1L41 25H23l9-19.9zM15.4 41.8h33.2l3.7 8.1H11.8l3.6-8.1zM61 59.5c0 .8-.7 1.5-1.5 1.5h-55c-.8 0-1.5-.7-1.5-1.5v-5.1c0-.8.7-1.5 1.5-1.5h55c.8 0 1.5.7 1.5 1.5v5.1z"/>
	</g>
</svg>
	);
};

export default Cone;