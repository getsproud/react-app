import React from 'react';

function Highlight(props) {
	const title = props.title || "highlight";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M37.4 0H26.6c-2.3 0-4.2 1.9-4.2 4.2v40.4c0 1 .8 1.9 1.9 1.9h.8v6.6c0 1.3.6 2.4 1.5 3.2v6.8c0 .6.6 1 1.1.9l9-2.7c.5-.1.8-.6.8-1.1v-3.9c.9-.8 1.4-1.9 1.4-3.1v-6.6h.8c1 0 1.9-.9 1.9-1.9V4.2c0-2.3-1.8-4.2-4.2-4.2zm-12 4.2c0-.7.5-1.2 1.2-1.2h10.9c.7 0 1.2.5 1.2 1.2v39.2H25.4V4.2zm10.5 48.9c0 .7-.5 1.2-1.2 1.2h-5.4c-.7 0-1.2-.5-1.2-1.2v-6.6H36v6.6z"/>
	</g>
</svg>
	);
};

export default Highlight;