import React from 'react';

function ResistanceBand(props) {
	const title = props.title || "resistance band";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.6 50.2L53 41.6v-29c0-6.3-5.1-11.4-11.4-11.4S30.3 6.3 30.3 12.6v38.8c0 4.3-3.5 7.9-7.9 7.9s-7.9-3.5-7.9-7.9V22.1l8.6-8.6c.5-.5.7-1.3.4-1.9-.3-.7-.9-1.1-1.6-1.1H3.7c-.7 0-1.3.4-1.6 1.1-.3.7-.1 1.4.4 1.9l8.6 8.6v29.3c0 6.3 5.1 11.4 11.4 11.4s11.4-5.1 11.4-11.4V12.6c0-4.3 3.5-7.9 7.9-7.9 4.3 0 7.9 3.5 7.9 7.9v29l-8.6 8.6c-.5.5-.7 1.3-.4 1.9.3.7.9 1.1 1.6 1.1h18.2c.7 0 1.3-.4 1.6-1.1.1-.6 0-1.4-.5-1.9zM17.7 14l-4.9 4.9L7.9 14h9.8zm28.6 35.7l4.9-4.9 4.9 4.9h-9.8z"/>
	</g>
</svg>
	);
};

export default ResistanceBand;