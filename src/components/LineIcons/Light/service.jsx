import React from 'react';

function Service(props) {
	const title = props.title || "service";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 41.3h-3.9c-1.3-13.9-12-24.7-25.1-25.5v-4.5h2.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-7.3c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h2.1v4.5c-13 .8-23.7 11.6-25 25.5H1.5c-.8 0-1.5.7-1.5 1.5V51c0 2.6 2.1 4.7 4.7 4.7h54.6c2.6 0 4.7-2.1 4.7-4.7v-8.2c0-.8-.7-1.5-1.5-1.5zM32 18.8c12.1 0 22.2 9.8 23.6 22.5H8.4C9.8 28.6 19.9 18.8 32 18.8zM61 51c0 .9-.8 1.7-1.7 1.7H4.7c-.9 0-1.7-.8-1.7-1.7v-6.7h58V51z"/>
	</g>
</svg>
	);
};

export default Service;