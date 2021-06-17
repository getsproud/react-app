import React from 'react';

function Whiteboard(props) {
	const title = props.title || "whiteboard";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 10.1H44.6l-1-7.3c-.1-1-1-1.6-2-1.5-1 .1-1.6 1-1.5 2l.9 6.9H23l.9-6.9c.1-1-.5-1.8-1.5-2-1-.1-1.8.5-2 1.5l-1 7.3H7c-3.2 0-5.8 2.6-5.8 5.8v20.5c0 3.2 2.6 5.8 5.8 5.8h8.1l-2.5 18.7c-.1 1 .5 1.8 1.5 2h.2c.9 0 1.6-.6 1.7-1.5l2.6-19.1h26.7L48 61.2c.1.9.9 1.5 1.7 1.5h.2c1-.1 1.6-1 1.5-2L48.9 42H57c3.2 0 5.8-2.6 5.8-5.8V15.8c0-3.1-2.6-5.7-5.8-5.7zm2.3 26.3c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V15.8c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v20.6z"/>
	</g>
</svg>
	);
};

export default Whiteboard;