import React from 'react';

function WaterDrops(props) {
	const title = props.title || "water drops";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M18.3 5.1c-.9 0-1.8.4-2.4 1.1-4.3 4.8-14.2 17-14.2 24.3 0 9.2 7.4 16.6 16.6 16.6 9.1 0 16.6-7.4 16.6-16.6 0-7.3-9.9-19.5-14.2-24.4-.7-.6-1.5-1-2.4-1zm0 38.5c-7.2 0-13.1-5.9-13.1-13.1 0-4.9 6.7-14.4 13.1-21.8 6.4 7.4 13.1 16.9 13.1 21.8-.1 7.3-5.9 13.1-13.1 13.1z"/>
		<path d="M53.1 24.5c5.1 0 9.2-4.2 9.2-9.3 0-3.4-3.7-8.8-6.8-12.8-.6-.8-1.5-1.2-2.5-1.2s-1.9.4-2.5 1.2c-3.1 3.9-6.8 9.3-6.8 12.8.1 5.1 4.3 9.3 9.4 9.3zm0-19.5c3.5 4.6 5.7 8.5 5.7 10.2 0 3.2-2.6 5.8-5.7 5.8s-5.7-2.6-5.7-5.8c-.1-1.7 2.1-5.6 5.7-10.2z"/>
		<path d="M48.9 32.5c-.9 0-1.8.4-2.4 1.1-3.6 4.3-9.5 12.3-9.5 17.1 0 6.6 5.4 12 12 12s12-5.4 12-12c0-4.9-6-12.8-9.6-17.2-.6-.6-1.5-1-2.5-1zm0 26.8c-4.7 0-8.5-3.8-8.5-8.5 0-2.6 3.2-8.2 8.5-14.6 5.2 6.4 8.5 11.9 8.5 14.6 0 4.6-3.8 8.5-8.5 8.5z"/>
	</g>
</svg>
	);
};

export default WaterDrops;