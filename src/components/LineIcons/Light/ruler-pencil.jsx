import React from 'react';

function RulerPencil(props) {
	const title = props.title || "ruler pencil";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M31 0H10.6C9.3.2 8.3 1.2 8.3 2.5v59.2C8.5 63 9.5 64 10.8 64h20.3c1.3 0 2.4-1.1 2.4-2.4V2.3C33.3 1 32.3 0 31 0zm-.5 61H11.3v-5.3h4.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-4.1v-5.3h6.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.8V39h4.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-4.1v-5.3h6.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.8v-5.3h4.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-4.1v-5.3h6.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.8V3h19.2v58z"/>
		<path d="M53.5 0H41c-1.2 0-2.2 1-2.2 2.2v46.5c0 .2.1.5.2.7l6.9 13.9c.3.5.8.8 1.3.8s1.1-.3 1.3-.8l6.9-13.9c.1-.2.2-.4.2-.7V2.2C55.7 1 54.7 0 53.5 0zm-.8 3v8.1H41.8V3h10.9zm-5.5 56.1l-5.4-10.9V14.1h10.9v34.2l-5.5 10.8z"/>
	</g>
</svg>
	);
};

export default RulerPencil;