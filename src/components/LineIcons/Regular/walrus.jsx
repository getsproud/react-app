import React from 'react';

function Walrus(props) {
	const title = props.title || "walrus";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.2 9.4H53c-5.2 0-10.1 2.5-13.2 6.7l-4.2 5.8c-1.7 2.4-4.5 3.8-7.4 3.8h-1.7c-10.9 0-19.8 8.9-19.9 19.8l-3.9 2.6c-1.3.9-1.9 2.5-1.4 4s1.8 2.5 3.4 2.5h10.9c2.2 0 4.3-1 5.6-2.7H38c2.1 1.8 4.7 2.7 7.5 2.7h10c1.7 0 3.1-1.2 3.5-2.8.4-1.7-.5-3.3-2-4l-7-3.2c3.6-5.3 5.5-11.6 5.5-18.1v-.8c.7-.3 1.7-.7 3.2-1.4 0 1.3-.1 2.7-.1 4 0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8c0-2.2.1-4.4.2-6.6v-.1c.1-1.3.1-2.5.2-3.6.1-2.1.2-3.9.2-5.1 0-1.9-1.6-3.5-3.6-3.5zm-.2 8.5c0 .8-.1 1.7-.1 2.6-2.5 1.1-5.1 2.3-5.5 2.4-.8.1-1.4.8-1.4 1.7v2c0 6.4-2.2 12.7-6.1 17.7-.3.4-.4 1-.3 1.5.1.5.5 1 1 1.2l9.1 4.1s0 .1-.1.1h-10c-2.1 0-4.1-.8-5.6-2.2-.3-.3-.8-.5-1.2-.5H20.4c-.6 0-1.2.3-1.5.9-.7 1.1-1.9 1.8-3.2 1.8H4.8v-.1l4.8-3.2c.7-.5 1-1.4.6-2.2 0-9 7.3-16.4 16.4-16.4h1.7c4 0 7.9-2 10.2-5.2l4.2-5.8C45.1 15 49 13 53 13l6.3.1c0 1-.2 2.7-.3 4.8z"/>
	</g>
</svg>
	);
};

export default Walrus;