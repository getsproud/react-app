import React from 'react';

function PlantPotAlt(props) {
	const title = props.title || "plant pot alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 30.3h-5.9v-9.8c0-6.3-5.1-11.4-11.4-11.4h-.2v-2c0-3.2-2.6-5.9-5.9-5.9h-3.3c-3.2 0-5.9 2.6-5.9 5.9V9h-.2C18.1 9.1 13 14.2 13 20.5v21.4c-1.3-.1-2.7-.1-4.3-.1H7c-1 0-1.8.8-1.8 1.8V47c0 8.7 8.4 15.8 18.8 15.8h13.7c11.6 0 21.1-9.5 21.1-21.1V32c-.1-1-.8-1.7-1.8-1.7zM28 7.1c0-1.3 1.1-2.4 2.4-2.4h3.3C35 4.8 36 5.8 36 7.1V9h-8V7.1zM16.5 20.5c0-4.3 3.5-7.9 7.9-7.9h15.4c4.3 0 7.9 3.5 7.9 7.9v9.8h-.1c-10.7 0-19.5 8-20.9 18.4-2.3-2.8-5.7-5-9.8-6.1-.1 0-.3-.1-.4-.1v-22zM8.8 46.9v-1.7c2.9 0 4.7 0 7.2.6 6.3 1.7 10.5 6.4 10.5 11.7v1.6h-2.4c-8.5.1-15.3-5.4-15.3-12.2zm46.4-5.2c0 9.7-7.9 17.6-17.6 17.6h-7.7v-8c0-9.7 7.9-17.6 17.6-17.6h7.7v8z"/>
	</g>
</svg>
	);
};

export default PlantPotAlt;