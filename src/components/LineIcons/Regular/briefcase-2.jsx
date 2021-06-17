import React from 'react';

function Briefcase2(props) {
	const title = props.title || "briefcase 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 13.1H44.7V6.7c0-2.6-2.1-4.8-4.8-4.8H24.1c-2.6 0-4.8 2.1-4.8 4.8v6.4H6c-2.6 0-4.8 2.1-4.8 4.8v39.4C1.3 59.9 3.4 62 6 62h52c2.6 0 4.8-2.1 4.8-4.8V17.9c-.1-2.7-2.2-4.8-4.8-4.8zM22.8 6.7c0-.7.6-1.3 1.3-1.3H40c.7 0 1.3.6 1.3 1.3v6.4H22.8V6.7zM6 16.6h52c.7 0 1.3.6 1.3 1.3v9.6l-25.5 7v-2.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v2.9l-25.5-7v-9.6c.1-.7.6-1.3 1.3-1.3zm52 41.9H6c-.7 0-1.3-.6-1.3-1.3V31.1l25.5 7v2.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.7l25.5-7v26.2c-.1.6-.6 1.2-1.3 1.2z"/>
	</g>
</svg>
	);
};

export default Briefcase2;