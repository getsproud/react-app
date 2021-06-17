import React from 'react';

function LineDotted(props) {
	const title = props.title || "line dotted";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M12.6 30.5H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h11.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M37.5 30.5h-11c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h11.1c.8 0 1.5-.7 1.5-1.5-.1-.8-.7-1.5-1.6-1.5z"/>
		<path d="M62.5 30.5H51.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h11.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default LineDotted;