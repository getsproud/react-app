import React from 'react';

function House(props) {
	const title = props.title || "house";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.7 27.3c-1 0-1.8.8-1.8 1.8v27.3c0 1.4-1.1 2.5-2.5 2.5H12.6c-1.4 0-2.5-1.1-2.5-2.5V29c0-1-.8-1.8-1.8-1.8s-1.7.9-1.7 1.8v27.3c0 3.3 2.7 6 6 6h38.9c3.3 0 6-2.7 6-6V29c-.1-.9-.9-1.7-1.8-1.7z"/>
		<path d="M61.9 19.8L35.2 2.6c-2-1.3-4.5-1.3-6.5 0L2.1 19.8c-.8.5-1 1.6-.5 2.4s1.6 1 2.4.5L30.7 5.6c.8-.5 1.9-.5 2.7 0l26.7 17.2c.3.2.6.3.9.3.6 0 1.1-.3 1.5-.8.5-.9.3-1.9-.6-2.5z"/>
	</g>
</svg>
	);
};

export default House;