import React from 'react';

function Thunderbolt(props) {
	const title = props.title || "thunderbolt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.5 26.1c-.7-1-1.8-1.4-2.9-1.1l-9.9 2.5L42 3.1c.2-1.3-.5-2.4-1.7-2.9s-2.5-.1-3.3.9l-24.4 34c-.7.9-.7 2.1-.1 3.1s1.7 1.4 2.8 1.2l9.5-1.9L22 60.9c-.1 1.3.5 2.4 1.7 2.9.3.1.7.2 1 .2.9 0 1.7-.4 2.2-1.1l24.4-33.6c.8-1 .8-2.2.2-3.2zM25.1 60.3l2.7-22.8c.1-.9-.2-1.7-.9-2.3-.5-.5-1.2-.7-1.9-.7-.2 0-.4 0-.5.1l-9.2 1.8L38.9 3.7l-3.2 23.7c-.1.9.2 1.8.9 2.4.7.6 1.6.8 2.5.6l9.6-2.4-23.6 32.3z"/>
	</g>
</svg>
	);
};

export default Thunderbolt;