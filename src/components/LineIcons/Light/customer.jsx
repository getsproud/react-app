import React from 'react';

function Customer(props) {
	const title = props.title || "customer";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 47.9c-1.2-4-5.1-6.2-8.9-5.1-4 1.2-9.6 2.8-13.3 3.9.8-1.7.7-3 .3-3.9-.8-2.1-3.2-3.1-5.2-3.1H23.6c-1 0-2.1-.5-3.1-1.4-1-.9-2.3-1.4-3.6-1.4H8.5c-3.3 0-5.9 2.8-5.9 6.2v13.2c0 3.5 2.7 6.3 6 6.3h10c1.2 0 2.5-.4 3.5-1.2l.4.2c2.8 1.6 6 2.4 9.2 2.4 2 0 3.9-.3 5.7-.9L56 57.4c5.2-1.9 5.9-6.3 5-9.5zM8.7 59.6c-1.7 0-3-1.5-3-3.3V43.1c0-1.8 1.3-3.2 2.9-3.2h8.3c.6 0 1.2.2 1.6.6.4.3.8.7 1.2.9v17.9c-.3.1-.6.2-1 .2h-10zm24.9-10.8c-.5 1 .3 2.1 1.4 1.9 1.5-.2 4.1-.9 9.2-2.4l8.8-2.6c2.2-.6 4.4.7 5.2 3.1.4 1.3.8 4.5-3 5.9l-18.6 5.7c-1.5.5-3.1.7-4.8.7-2.7 0-5.4-.7-7.8-2l-1.4-.7h-.1V42.6c.3 0 .6.1 1 .1h10.3c1.1 0 2.2.5 2.4 1.2.3.8-.4 2.3-2 3.9-.1.3-.4.6-.6 1z"/>
		<path d="M51.5 14.2c3.9 0 7.1-3.2 7.1-7.1S55.4 0 51.5 0s-7.1 3.2-7.1 7.1 3.2 7.1 7.1 7.1zm0-11.2c2.2 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1-4.1-1.8-4.1-4.1S49.2 3 51.5 3z"/>
		<path d="M49 37.1h3.5c3.9 0 7-3.1 7-7v-6c0-3.9-3.1-7-7-7h-3.1c-3.9 0-7 3.1-7 7V30c0 3.9 3 7.1 6.6 7.1zm-3.7-13c0-2.2 1.8-4 4-4h3.1c2.2 0 4 1.8 4 4v6c0 2.2-1.8 4-4 4H49c-2 0-3.6-1.8-3.7-4.1v-5.9z"/>
	</g>
</svg>
	);
};

export default Customer;