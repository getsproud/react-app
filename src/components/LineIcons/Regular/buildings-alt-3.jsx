import React from 'react';

function BuildingsAlt3(props) {
	const title = props.title || "buildings alt 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 7.3l-.4-.3C52.2-.6 39.5-.6 31.1 7l-.4.3c-.4.3-.6.8-.6 1.3V26H7.6c-2.9 0-5.3 2.4-5.3 5.3v26.2c0 2.9 2.4 5.3 5.3 5.3h47.9c3.4 0 6.2-2.8 6.2-6.2v-48c-.1-.5-.3-1-.7-1.3zM5.9 57.5V31.3c0-1 .8-1.8 1.8-1.8h22.6v29.7H7.6c-.9.1-1.7-.7-1.7-1.7zM43 59.3v-6.8c0-1.7 1.4-3.2 3.2-3.2s3.2 1.4 3.2 3.2v6.8H43zm15.1-2.7c0 1.5-1.2 2.7-2.7 2.7h-2.6v-6.8a6.7 6.7 0 0 0-13.4 0v6.8h-5.8v-50c7-6.2 17.4-6.2 24.4 0v47.3z"/>
	</g>
</svg>
	);
};

export default BuildingsAlt3;