import React from 'react';

function Cactus3(props) {
	const title = props.title || "cactus 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.7 51.6c-.3-.9-1.3-1.4-2.2-1.1-1.1.4-2.7.6-5 .6v-7h5c1 0 1.8-.8 1.8-1.8V35c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v5.6h-3.3V27.4c0-3.1-2.5-5.7-5.7-5.7S44 24.2 44 27.4V37h-3.2v-9.2c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v11c0 1 .8 1.8 1.8 1.8h4.9v9.2c-3.8-.7-8.3-1.8-13.8-3.3-1.3-.4-2.6-.6-3.8-.9v-9h5.6c1 0 1.8-.8 1.8-1.8v-10c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V33h-3.8V16.4c0-3.9-3.2-7-7-7-3.9 0-7 3.2-7 7v11.8H7V15.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v14.8c0 1 .8 1.8 1.8 1.8h7.3v13.1c-5.8.4-9.7 1.5-10 1.6-.9.3-1.5 1.2-1.2 2.2s1.2 1.5 2.2 1.2c.1 0 12.6-3.6 25.9 0C41 53 49.7 54.6 55.7 54.6c2.4 0 4.4-.3 5.9-.8.9-.3 1.4-1.3 1.1-2.2zM16 44.7V16.4c0-1.9 1.6-3.5 3.5-3.5s3.5 1.6 3.5 3.5V45c-2.5-.3-4.8-.4-7-.3zm31.6-17.3c0-1.2 1-2.2 2.2-2.2s2.2 1 2.2 2.2v23.5c-1.3-.1-2.7-.3-4.3-.6V27.4z"/>
	</g>
</svg>
	);
};

export default Cactus3;