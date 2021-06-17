import React from 'react';

function Envelope(props) {
	const title = props.title || "envelope";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.5 10.2h-57c-1.9 0-3.5 1.6-3.5 3.5v36.7c0 1.9 1.6 3.5 3.5 3.5h57c1.9 0 3.5-1.6 3.5-3.5V13.7c0-2-1.6-3.5-3.5-3.5zm-1.4 3L33.6 28.6c-1 .6-2.3.6-3.3 0L4.9 13.2h54.2zm1.4 37.6h-57c-.3 0-.5-.2-.5-.5V15.5l25.8 15.7c1 .6 2.1.9 3.2.9s2.2-.3 3.2-.9L61 15.5v34.8c0 .3-.2.5-.5.5z"/>
	</g>
</svg>
	);
};

export default Envelope;