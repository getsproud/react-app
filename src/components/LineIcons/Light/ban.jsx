import React from 'react';

function Ban(props) {
	const title = props.title || "ban";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zM3 32C3 16 16 3 32 3c7.5 0 14.3 2.8 19.4 7.5L10.5 51.4C5.8 46.3 3 39.5 3 32zm29 29c-7.4 0-14.2-2.8-19.4-7.4l40.9-40.9C58.2 17.8 61 24.6 61 32c0 16-13 29-29 29z"/>
	</g>
</svg>
	);
};

export default Ban;