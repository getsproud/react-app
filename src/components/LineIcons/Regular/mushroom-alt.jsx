import React from 'react';

function MushroomAlt(props) {
	const title = props.title || "mushroom alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C17.9 1.3 6.5 14.4 6.5 30.5c0 .7.4 1.3 1 1.6 5.6 2.5 11.6 4 17.8 4.6l-1.2 17.8c-.1 2.2.6 4.2 2.1 5.8 1.5 1.6 3.6 2.5 5.7 2.5 2.2 0 4.2-.9 5.7-2.5s2.3-3.6 2.1-5.8l-1.2-18c5.8-.7 11.7-2.1 17.7-4.3.7-.3 1.1-.9 1.1-1.6C57.5 14.4 46.1 1.3 32 1.3zm15.8 11.3c-.5 1-1.6 1.6-2.7 1.6-1.7 0-3.1-1.4-3.1-3.1 0-1.1.6-2.1 1.4-2.6 1.6 1.1 3.1 2.5 4.4 4.1zM15.7 19c0 1.7-1.4 3.1-3.1 3.1-.5 0-.9-.1-1.3-.3.6-2 1.5-3.9 2.5-5.7 1.1.4 1.9 1.5 1.9 2.9zm20.7 35.7c.1 1.2-.4 2.3-1.2 3.2-.8.9-2 1.4-3.2 1.4s-2.4-.5-3.2-1.4c-.8-.9-1.2-2-1.2-3.2l1.2-17.8c.7 0 1.4.1 2.1.1 1.4 0 2.8-.1 4.3-.2l1.2 17.9zM10 29.3c.1-1.4.2-2.8.4-4.1.7.2 1.4.4 2.1.4 3.7 0 6.6-3 6.6-6.6 0-2.5-1.4-4.7-3.5-5.8 4-5.1 9.8-8.4 16.2-8.4 2.9 0 5.7.7 8.2 1.9-1.1 1.2-1.8 2.8-1.8 4.5 0 3.6 3 6.6 6.6 6.6 1.9 0 3.6-.8 4.9-2.1 2.4 3.9 3.8 8.6 4 13.7-15.6 5.4-30.4 5.5-43.7-.1z"/>
		<path d="M32.3 17.2c-3.7 0-6.6 3-6.6 6.6s3 6.6 6.6 6.6c3.7 0 6.6-3 6.6-6.6s-3-6.6-6.6-6.6zm0 9.8c-1.7 0-3.1-1.4-3.1-3.1s1.4-3.1 3.1-3.1c1.7 0 3.1 1.4 3.1 3.1S34 27 32.3 27z"/>
	</g>
</svg>
	);
};

export default MushroomAlt;