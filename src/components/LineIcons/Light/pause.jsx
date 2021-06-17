import React from 'react';

function Pause(props) {
	const title = props.title || "pause";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M19.9 5.5H2.5C1.1 5.5 0 6.7 0 8v48c0 1.4 1.1 2.5 2.5 2.5h17.4c1.4 0 2.5-1.1 2.5-2.5V8c0-1.3-1.1-2.5-2.5-2.5zm-.5 50H3v-47h16.4v47z"/>
		<path d="M61.5 5.5H44.1c-1.4 0-2.5 1.1-2.5 2.5v48c0 1.4 1.1 2.5 2.5 2.5h17.4c1.4 0 2.5-1.1 2.5-2.5V8c0-1.3-1.1-2.5-2.5-2.5zm-.5 50H44.6v-47H61v47z"/>
	</g>
</svg>
	);
};

export default Pause;