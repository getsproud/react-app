import React from 'react';

function Undo(props) {
	const title = props.title || "undo";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.6 20.1H20.8V11c0-1.2-.7-2.3-1.7-2.8-1.1-.5-2.3-.4-3.2.4L2.4 19.5c-.7.6-1.1 1.5-1.1 2.4 0 .9.4 1.8 1.1 2.4L15.8 35c.6.5 1.2.7 1.9.7.4 0 .9-.1 1.3-.3 1.1-.5 1.7-1.6 1.7-2.8v-9.1h24.8C53 23.5 59.1 30 59.1 38S53 52.5 45.5 52.5h-14c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h14c9.5 0 17.1-8.1 17.1-18s-7.5-18-17-18zM17.3 31.7L5 21.8l12.3-9.9v19.8zm.7.6z"/>
	</g>
</svg>
	);
};

export default Undo;