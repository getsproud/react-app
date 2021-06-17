import React from 'react';

function LaptopAltKeyboard(props) {
	const title = props.title || "laptop alt keyboard";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.7 52.4c0-.2 0-.5-.1-.7l-4.9-13.2c0-.1-.1-.2-.1-.3V10c0-2.9-2.3-5.3-5.2-5.3H11.6c-2.9 0-5.2 2.4-5.2 5.3v28.2c-.1.1-.1.2-.1.3L1.4 51.6c-.1.2-.1.5-.1.7V57.5c0 1 .8 1.8 1.8 1.8h58c1 0 1.8-.8 1.8-1.8l-.2-5.1c.1 0 0 0 0 0zM9.9 10c0-1 .8-1.8 1.7-1.8h40.8c.9 0 1.7.8 1.7 1.8v27.6H9.9V10zM4.8 55.8v-3.2L9.1 41H55l4.3 11.5v3.2H4.8z"/>
		<path d="M34 13.1h-4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default LaptopAltKeyboard;