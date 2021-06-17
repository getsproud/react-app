import React from 'react';

function Pin(props) {
	const title = props.title || "pin";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.4 15.4C47.4 6.9 40.5 0 32 0S16.6 6.9 16.6 15.4c0 8 6.1 14.5 13.9 15.3v31.9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-32c7.8-.7 13.9-7.3 13.9-15.2zM32 27.7c-6.8 0-12.4-5.5-12.4-12.4C19.6 8.5 25.2 3 32 3s12.4 5.5 12.4 12.4c0 6.8-5.6 12.3-12.4 12.3z"/>
		<path d="M34.8 9.8c-1.5 0-2.8 1.2-2.8 2.8s1.2 2.8 2.8 2.8 2.8-1.2 2.8-2.8-1.3-2.8-2.8-2.8z"/>
	</g>
</svg>
	);
};

export default Pin;