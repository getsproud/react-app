import React from 'react';

function Mute(props) {
	const title = props.title || "mute";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M38.5 36c-.7-.7-1.8-.7-2.5 0l-4 4.1-4-4.1c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l4.1 4.1-4.1 4.1c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l4-4.1 4 4.1c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8 0-2.5l-4.1-4.1 4.1-4.1c.9-.7.9-1.8.2-2.5z"/>
		<circle cx="21.4" cy="22.8" r="3.5"/>
		<circle cx="42.6" cy="22.8" r="3.5"/>
	</g>
</svg>
	);
};

export default Mute;