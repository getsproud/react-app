import React from 'react';

function Briefcase3(props) {
	const title = props.title || "briefcase 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 13.1H44.7V6.7c0-2.6-2.1-4.8-4.8-4.8H24.1c-2.6 0-4.8 2.1-4.8 4.8v6.4H6c-2.6 0-4.8 2.1-4.8 4.8v39.4C1.2 59.9 3.4 62 6 62h52c2.6 0 4.8-2.1 4.8-4.8V17.9c-.1-2.7-2.2-4.8-4.8-4.8zM22.8 6.7c0-.7.6-1.3 1.3-1.3H40c.7 0 1.3.6 1.3 1.3v6.4H22.8V6.7zM6 16.6h52c.7 0 1.3.6 1.3 1.3v9.7L44.9 35H33.7v-3.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V35h-11L4.7 27.5v-9.7c0-.6.6-1.2 1.3-1.2zm52 41.9H6c-.7 0-1.3-.6-1.3-1.3V31.5l13.1 6.8c.2.1.5.2.8.2h11.6v2.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.3h11.6c.3 0 .6-.1.8-.2l13.1-6.8v25.8c-.1.6-.6 1.2-1.3 1.2z"/>
	</g>
</svg>
	);
};

export default Briefcase3;