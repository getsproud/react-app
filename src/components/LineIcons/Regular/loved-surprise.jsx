import React from 'react';

function LovedSurprise(props) {
	const title = props.title || "loved surprise";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 37.1c-4.7 0-8.6 3.9-8.6 8.6 0 4.7 3.9 8.6 8.6 8.6 4.7 0 8.6-3.9 8.6-8.6 0-4.7-3.9-8.6-8.6-8.6zm0 13.7c-2.8 0-5.1-2.3-5.1-5.1s2.3-5.1 5.1-5.1 5.1 2.3 5.1 5.1-2.3 5.1-5.1 5.1z"/>
		<path d="M29.2 16.8c-2.1-2.1-5.5-2.2-7.7-.4-2.3-1.8-5.6-1.7-7.7.4-2.2 2.3-2.2 5.9 0 8.2l6.5 6.5c.3.3.8.5 1.2.5s.9-.2 1.2-.5l6.5-6.5c2.3-2.3 2.3-5.9 0-8.2zm-2.5 5.7l-5.2 5.2-5.2-5.2c-.9-.9-.9-2.3 0-3.2.4-.4 1-.7 1.6-.7s1.2.2 1.6.7l.8.8c.3.3.8.5 1.2.5.5 0 .9-.2 1.2-.5l.8-.8c.9-.9 2.3-.9 3.2 0 .9.9.9 2.3 0 3.2z"/>
		<path d="M50.2 16.8c-1.1-1.1-2.5-1.7-4.1-1.7-1.3 0-2.6.5-3.6 1.3-1-.8-2.3-1.3-3.6-1.3-1.5 0-3 .6-4.1 1.7-2.3 2.2-2.3 5.9 0 8.2l6.5 6.5c.3.3.8.5 1.2.5s.9-.2 1.2-.5l6.5-6.5c2.3-2.3 2.3-5.9 0-8.2zm-2.5 5.7l-5.2 5.2-5.2-5.2c-.9-.9-.9-2.3 0-3.2.4-.4 1-.7 1.6-.7s1.2.2 1.6.7l.8.8c.7.7 1.8.7 2.5 0l.8-.8c.9-.9 2.4-.9 3.2 0 .8.9.8 2.3-.1 3.2z"/>
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default LovedSurprise;