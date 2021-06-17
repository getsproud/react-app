import React from 'react';

function Female(props) {
	const title = props.title || "female";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M33.8 25.5V13.2h9.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-9.9V3c0-1-.8-1.8-1.8-1.8S30.3 2 30.3 3v6.7h-9.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h9.9v12.3c-9.5.9-16.9 8.9-16.9 18.6 0 10.3 8.4 18.7 18.7 18.7s18.7-8.4 18.7-18.7c-.1-9.8-7.6-17.8-17-18.7zM32 59.3c-8.4 0-15.2-6.8-15.2-15.2S23.6 28.9 32 28.9s15.2 6.8 15.2 15.2S40.4 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default Female;