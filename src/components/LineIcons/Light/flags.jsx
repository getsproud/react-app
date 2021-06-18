import React from 'react';

function Flags(props) {
	const title = props.title || "flags";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.9 23.5c-.2-.8-1.1-1.3-1.9-1-6.4 1.8-17.5 2.9-29.7 2.9-12.6 0-24.3-1.2-30.4-3.1-.8-.2-1.6.2-1.9 1-.2.7.1 1.4.7 1.7l5 13.7c.3.8 1 1.3 1.8 1.4h.3c.7 0 1.4-.3 1.8-.9l8.2-11.4c1.8.1 3.6.3 5.5.3L30 40.7c.4.7 1.1 1.2 2 1.2.8 0 1.6-.5 1.9-1.2l6.7-12.5c1.9-.1 3.8-.2 5.6-.3l8.2 11.3c.4.6 1.1.9 1.8.9h.3c.8-.1 1.5-.7 1.8-1.4l4.9-13.4c.6-.4.9-1.1.7-1.8zM8.1 36.2L4.3 25.9c2.8.6 6.2 1.1 10.1 1.5l-6.3 8.8zm23.8 1.7l-5.1-9.7c1.8.1 3.7.1 5.5.1 1.6 0 3.2 0 4.8-.1l-5.2 9.7zm24-1.7l-6.3-8.6c3.7-.4 7.1-.9 9.9-1.4l-3.6 10z"/>
	</g>
</svg>
	);
};

export default Flags;