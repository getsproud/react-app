import React from 'react';

function Briefcase1(props) {
	const title = props.title || "briefcase 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 13.1H44.7V6.7c0-2.6-2.1-4.8-4.8-4.8H24.1c-2.6 0-4.8 2.1-4.8 4.8v6.4H6c-2.6 0-4.8 2.1-4.8 4.8v39.4C1.3 59.9 3.4 62 6 62h52c2.6 0 4.8-2.1 4.8-4.8V17.9c-.1-2.7-2.2-4.8-4.8-4.8zm-9.9 3.5v41.9h-6.9V16.6h6.9zm-10.4 0v41.9H26.4V16.6h11.3zM22.8 6.7c0-.7.6-1.3 1.3-1.3H40c.7 0 1.3.6 1.3 1.3v6.4H22.8V6.7zm.1 9.9v41.9H16V16.6h6.9zM4.8 57.3V17.9c0-.7.6-1.3 1.3-1.3h6.5v41.9H6c-.7 0-1.2-.6-1.2-1.2zm54.4 0c0 .7-.6 1.3-1.3 1.3h-6.4v-42H58c.7 0 1.3.6 1.3 1.3v39.4z"/>
	</g>
</svg>
	);
};

export default Briefcase1;