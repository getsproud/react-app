import React from 'react';

function Volume(props) {
	const title = props.title || "volume";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.8 64c-1.1 0-2.3-.3-3.3-.9L33.1 51.8c-.5-.3-1.2-.5-1.8-.5H8.2c-3.5 0-6.3-2.7-6.3-6V18.7c0-3.3 2.8-6 6.3-6h23.1c.6 0 1.3-.2 1.8-.5L52.5.9c2-1.2 4.6-1.2 6.6 0 1.9 1.1 3 3 3 5.1v52c0 2.1-1.1 4-3 5.1-1 .6-2.1.9-3.3.9zM8.2 15.7c-1.8 0-3.3 1.3-3.3 3v26.6c0 1.6 1.5 3 3.3 3h23.1c1.2 0 2.3.3 3.3.9L54 60.5c1.1.6 2.5.6 3.6 0 1-.6 1.5-1.5 1.5-2.5V6c0-1-.6-2-1.5-2.5-1.1-.6-2.5-.6-3.6 0L34.6 14.8c-1 .6-2.1.9-3.3.9H8.2z"/>
	</g>
</svg>
	);
};

export default Volume;