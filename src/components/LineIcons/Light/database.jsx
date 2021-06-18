import React from 'react';

function Database(props) {
	const title = props.title || "database";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.8 38.9v-13-13.4C53.8 5.5 44.2 0 32 0S10.2 5.5 10.2 12.6v38.8C10.2 58.4 20 64 32 64s21.8-5.6 21.8-12.6V39.3v-.4zm-39.2-5.8c4.1 3 10.6 4.8 17.4 4.8 7 0 13.3-1.8 17.4-4.8.5-.4 1-.8 1.4-1.2v7.3c-.3 4.9-8.8 9-18.8 9s-18.5-4.1-18.8-9V32c.4.3.9.7 1.4 1.1zm-1.4-7.2V19c3.7 3.7 10.7 6.1 18.8 6.1 8.1 0 15-2.4 18.8-6.1v6.8c-.1 2.1-1.8 3.8-3.2 4.8-3.5 2.6-9.3 4.2-15.6 4.2-6.2 0-12-1.6-15.6-4.2-1.4-.9-3-2.6-3.2-4.7zM32 3c10.2 0 18.8 4.4 18.8 9.6s-8.6 9.6-18.8 9.6-18.8-4.4-18.8-9.6S21.8 3 32 3zm0 58c-11.1 0-18.8-5.1-18.8-9.6v-6.2c3.8 3.6 10.7 6 18.8 6 8.1 0 15-2.4 18.8-6v6.2c0 4.5-7.7 9.6-18.8 9.6z"/>
	</g>
</svg>
	);
};

export default Database;