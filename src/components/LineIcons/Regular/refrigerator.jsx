import React from 'react';

function Refrigerator(props) {
	const title = props.title || "refrigerator";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46 1.2H18c-2.6 0-4.8 2.1-4.8 4.8v52c0 2.6 2.1 4.8 4.8 4.8h28c2.6 0 4.8-2.1 4.8-4.8V6c0-2.6-2.2-4.8-4.8-4.8zM18 4.7h28c.7 0 1.3.6 1.3 1.3v18.2H16.7V6c0-.7.6-1.3 1.3-1.3zm28 54.5H18c-.7 0-1.3-.6-1.3-1.3V27.7h30.6V58c0 .7-.6 1.2-1.3 1.2z"/>
		<path d="M40.2 20.6c1 0 1.8-.8 1.8-1.8v-4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v4c0 1.1.8 1.8 1.8 1.8z"/>
		<path d="M40.2 31.9c-1 0-1.8.8-1.8 1.8v4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-4c-.1-1-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Refrigerator;