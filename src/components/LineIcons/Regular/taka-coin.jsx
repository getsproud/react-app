import React from 'react';

function TakaCoin(props) {
	const title = props.title || "taka coin";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 3C16 3 3 16 3 32s13 29 29 29 29-13 29-29S48 3 32 3zm0 54.5C17.9 57.5 6.5 46.1 6.5 32S17.9 6.5 32 6.5 57.5 17.9 57.5 32 46.1 57.5 32 57.5z"/>
		<path d="M41.5 23.9H28.3v-6.8c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v6.8h-2.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h2.3v12.8c0 4.7 3.8 8.5 8.5 8.5s8.5-3.8 8.5-8.5c0-3.4-2-6.5-5.2-7.8-.9-.4-1.9 0-2.3.9-.4.9 0 1.9.9 2.3 1.9.8 3.1 2.6 3.1 4.6 0 2.8-2.3 5-5 5-2.8 0-5-2.2-5-5V27.4h13.2c1 0 1.8-.8 1.8-1.8s-.7-1.7-1.7-1.7z"/>
	</g>
</svg>
	);
};

export default TakaCoin;