import React from 'react';

function WalkieTalkie(props) {
	const title = props.title || "walkie talkie";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M35.2 23.2h-6.3c-2.6 0-4.8 2.1-4.8 4.8v6.3c0 2.6 2.1 4.8 4.8 4.8h6.3c2.6 0 4.8-2.1 4.8-4.8V28c-.1-2.7-2.2-4.8-4.8-4.8zm1.2 11c0 .7-.6 1.3-1.3 1.3h-6.3c-.7 0-1.3-.6-1.3-1.3v-6.3c0-.7.6-1.3 1.3-1.3h6.3c.7 0 1.3.6 1.3 1.3v6.3z"/>
		<path d="M45.3 1.2c-1 0-1.8.8-1.8 1.8v12.7H21.7c-2.6 0-4.8 2.1-4.8 4.8V58c0 2.6 2.1 4.8 4.8 4.8h20.7c2.6 0 4.8-2.1 4.8-4.8V3c-.1-1-.9-1.8-1.9-1.8zM43.6 58c0 .7-.6 1.3-1.3 1.3H21.7c-.7 0-1.3-.6-1.3-1.3V20.5c0-.7.6-1.3 1.3-1.3h21.9V58z"/>
	</g>
</svg>
	);
};

export default WalkieTalkie;