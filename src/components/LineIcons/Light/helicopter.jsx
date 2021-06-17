import React from 'react';

function Helicopter(props) {
	const title = props.title || "helicopter";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 22.2c-.8 0-1.5.7-1.5 1.5V25H36.3v-3.2c0-1.3-1-2.3-2.3-2.3h-8.8v-8.1h17.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H4.3c-.9-.1-1.5.6-1.5 1.4s.7 1.5 1.5 1.5h17.9v8.1H7.5c-4.1 0-7.5 3.4-7.5 7.5v15.4c0 1.3 1 2.3 2.3 2.3h6v8.1H4.7c-.5 0-.9-.3-.9-.7 0-.8-.7-1.5-1.5-1.5S.8 51.1.8 52c0 2 1.8 3.7 3.9 3.7H32c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.8v-8.1H34c1.3 0 2.3-1 2.3-2.3v-3.1L61 36.4v1.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V23.7c0-.8-.7-1.5-1.5-1.5zM22.2 52.7H11.3v-8.1h10.9v8.1zm11.1-11.1H3V26.9c0-2.5 2-4.5 4.5-4.5h25.8v19.2zm3-5.4V28H61v5.5l-24.7 2.7z"/>
	</g>
</svg>
	);
};

export default Helicopter;