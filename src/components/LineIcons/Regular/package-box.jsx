import React from 'react';

function PackageBox(props) {
	const title = props.title || "package box";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 8.7H6c-2.6 0-4.8 2.1-4.8 4.8v5.8c0 2.2 1.4 4 3.4 4.5v26.8c0 2.6 2.1 4.8 4.8 4.8h45.2c2.6 0 4.8-2.1 4.8-4.8V23.7c2-.6 3.4-2.4 3.4-4.5v-5.8c0-2.6-2.2-4.7-4.8-4.7zM4.8 13.5c0-.7.6-1.3 1.3-1.3h52c.7 0 1.3.6 1.3 1.3v5.8c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3v-5.8zm51 37c0 .7-.6 1.3-1.3 1.3H9.4c-.7 0-1.3-.6-1.3-1.3V24h47.7v26.5z"/>
		<path d="M14 49.4h5.4c1.5 0 2.8-1.2 2.8-2.8v-5.4c0-1.5-1.2-2.8-2.8-2.8H14c-1.5 0-2.8 1.2-2.8 2.8v5.4c0 1.5 1.3 2.8 2.8 2.8zm.7-7.5h3.9v3.9h-3.9v-3.9z"/>
	</g>
</svg>
	);
};

export default PackageBox;