import React from 'react';

function BrainCheck(props) {
	const title = props.title || "brain check";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.4 17.8c-.8-.9-1.8-1.5-2.9-1.8-.8-1.5-2.3-2.5-3.9-2.7-1.3-.2-2.6.1-3.7.9-1.1-.7-2.4-1.1-3.7-.9-1.7.2-3.1 1.2-3.9 2.7-1.1.3-2.2.9-2.9 1.8-.9 1-1.3 2.3-1.4 3.6-1.3 1.1-2 2.6-2 4.3 0 2 .9 3.7 2.5 4.8 0 1.1.3 2.2.9 3.1.6.9 1.4 1.6 2.4 2.1.6 1.8 2.1 3.1 3.9 3.5 1.5.3 2.9.1 4.1-.8.9.6 1.9.9 2.9.9.4 0 .8 0 1.2-.1 1.8-.4 3.3-1.8 3.9-3.5 1-.4 1.8-1.1 2.4-2.1.6-.9.9-2 .9-3.1 1.6-1.1 2.5-3 2.5-5-.1-1.6-.8-3.1-1.9-4.1 0-1.3-.5-2.6-1.3-3.6zm-13.9 18c-.8-.2-1.4-.8-1.5-1.8-.1-.7-.7-1.3-1.4-1.4-.5-.1-.9-.4-1.2-.9-.3-.5-.5-1.2-.3-1.8.2-.9-.3-1.8-1.1-2.1-.8-.3-1.4-1.1-1.4-2.1s.6-1.7 1.1-2c.6-.4 1-1.1.9-1.8-.1-.7.1-1.4.5-1.9.2-.3.7-.7 1.5-.7s1.4-.5 1.7-1.2c.3-.8.8-1.3 1.6-1.4.5-.1 1 .1 1.5.5v18.2c-1 .5-1.6.4-1.9.4zm12.2-8c-.9.3-1.4 1.2-1.1 2.1.1.6 0 1.3-.3 1.8s-.7.8-1.2.9c-.7.1-1.3.7-1.4 1.4-.1.9-.7 1.6-1.5 1.8-.3.1-1 .1-1.6-.4V17.2c.4-.4.9-.5 1.5-.5.7.1 1.3.6 1.6 1.4.2.7 1 1.2 1.7 1.2s1.2.4 1.4.7c.4.5.6 1.2.5 1.9-.1.7.2 1.4.9 1.8.6.4 1 1.1 1.1 1.9-.2 1-.7 1.9-1.6 2.2z"/>
		<path d="M62.2 59.8L44.9 42.4c8.5-9.8 8.1-24.6-1.2-33.9-9.7-9.7-25.5-9.7-35.2 0-9.7 9.7-9.7 25.5 0 35.2 4.9 4.9 11.2 7.3 17.6 7.3 5.8 0 11.6-2 16.3-6.1l17.3 17.3c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.8-.6.8-1.8.1-2.4zM11 41.2C2.7 32.9 2.7 19.3 11 11c4.2-4.2 9.6-6.3 15.1-6.3s11 2.1 15.1 6.3c8.3 8.3 8.3 21.9 0 30.2-8.3 8.4-21.9 8.4-30.2 0z"/>
	</g>
</svg>
	);
};

export default BrainCheck;