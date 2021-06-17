import React from 'react';

function KeyAlt1(props) {
	const title = props.title || "key alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M33.8 32.4V3c0-1-.8-1.8-1.8-1.8S30.3 2 30.3 3v1.8h-6.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h6.7V12h-3.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.7V19h-8.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h8.6v9.9c-7.5.9-13.4 7.3-13.4 15.1 0 8.4 6.8 15.2 15.2 15.2S47.3 56 47.3 47.6c-.1-7.9-6-14.3-13.5-15.2zM32 59.3c-6.4 0-11.7-5.3-11.7-11.7S25.6 35.8 32 35.8c6.4 0 11.7 5.3 11.7 11.7S38.4 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default KeyAlt1;