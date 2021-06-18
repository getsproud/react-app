import React from 'react';

function NailAlt(props) {
	const title = props.title || "nail alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.7 23.9l-.6-.6C43.7 15 39.5 7.4 33.2 1.7c-.7-.6-1.7-.6-2.3 0-6.4 5.7-10.6 13.3-12 21.6-4 3.7-6.4 8.9-6.4 14.3V52c0 5.9 4.8 10.7 10.7 10.7h17.4c5.9 0 10.7-4.8 10.7-10.7V37.6c.1-5.2-1.9-10-5.6-13.7zM32 5.4c6.5 6.3 10.1 15 10.1 24.1v9.3c0 4.9-4 8.8-8.8 8.8h-2.6c-4.9 0-8.8-4-8.8-8.8v-9.3c0-9.1 3.6-17.8 10.1-24.1zM47.9 52c0 4-3.3 7.2-7.2 7.2H23.3c-4 0-7.2-3.3-7.2-7.2V37.6c0-2.9.8-5.8 2.3-8.2v9.4c0 6.8 5.5 12.3 12.3 12.3h2.6c6.8 0 12.3-5.5 12.3-12.3v-9.3-.1c1.5 2.5 2.3 5.3 2.3 8.2V52z"/>
	</g>
</svg>
	);
};

export default NailAlt;