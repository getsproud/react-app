import React from 'react';

function CheckBox(props) {
	const title = props.title || "check box";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.6 7.4c-.6-.6-1.5-.6-2.1 0L55.9 13V6.6c0-1.4-1.2-2.6-2.6-2.6H2.6C1.2 4.1 0 5.2 0 6.6v50.7c0 1.4 1.2 2.6 2.6 2.6h50.7c1.4 0 2.6-1.2 2.6-2.6V17.2l7.7-7.7c.5-.6.5-1.5 0-2.1zM52.9 56.9H3V7.1h49.9V16L40.8 28.1l-7.4-7.4c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l8.5 8.5c.1.1.2.1.3.2.1 0 .1.1.2.1.2.1.4.1.6.1.2 0 .4 0 .6-.1l.1-.1c.1-.1.3-.1.4-.2l11-11.1v36.7z"/>
	</g>
</svg>
	);
};

export default CheckBox;