import React from 'react';

function Walker(props) {
	const title = props.title || "walker";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.8 48.1l-4.5-33.8C47.2 6.1 40.2 0 32 0c-8.2 0-15.2 6.1-16.3 14.3l-4.5 33.8c-4.1.4-7.3 3.8-7.3 7.9 0 4.4 3.6 8 8 8s8-3.6 8-8c0-3.6-2.4-6.7-5.7-7.6l1.2-8.7h33.4l1.2 8.7c-3.3 1-5.7 4-5.7 7.6 0 4.4 3.6 8 8 8s8-3.6 8-8c-.2-4.1-3.4-7.6-7.5-7.9zM32 3c6.7 0 12.4 5 13.3 11.7l1.2 9.1h-29l1.2-9.1C19.6 8 25.3 3 32 3zM16.9 56c0 2.7-2.2 5-5 5s-5-2.2-5-5c0-2.7 2.2-5 5-5s5 2.3 5 5zm-1.2-19.3l1.3-10h29.9l1.3 10H15.7zM52.1 61c-2.8 0-5-2.2-5-5 0-2.7 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5z"/>
	</g>
</svg>
	);
};

export default Walker;