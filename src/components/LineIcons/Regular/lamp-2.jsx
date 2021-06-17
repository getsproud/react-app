import React from 'react';

function Lamp2(props) {
	const title = props.title || "lamp 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59 44.1L42.4 22.8c-.3-.4-.8-.7-1.4-.7h-7.2V3c0-1-.8-1.8-1.8-1.8S30.3 2 30.3 3v19.1H23c-.5 0-1 .2-1.4.7L5 44.1c-.4.6-.7 1.3-.7 2v2.3c0 1.8 1.4 3.2 3.2 3.2h10.1c2.2 5.8 8.9 11.2 14.3 11.2s12.2-5.4 14.3-11.2h10.1c1.8 0 3.2-1.4 3.2-3.2v-2.3c.2-.7-.1-1.4-.5-2zM32 59.3c-3.4 0-8.3-3.4-10.5-7.7h21.1c-2.3 4.2-7.2 7.7-10.6 7.7zm24.2-11.2H7.8v-1.9l16-20.6h16.3l16 20.6v1.9z"/>
	</g>
</svg>
	);
};

export default Lamp2;