import React from 'react';

function Thunderbolt(props) {
	const title = props.title || "thunderbolt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M25.2 62.8c-.4 0-.7-.1-1.1-.2-1.3-.5-2-1.7-1.8-3.1l2.6-21.8-8.6 1.7c-1.2.2-2.4-.3-3-1.3-.7-1-.6-2.3.1-3.3L36.5 2.5c.8-1.1 2.2-1.5 3.5-1 1.3.5 2 1.8 1.8 3.1l-3.1 22.6 8.9-2.2c1.2-.3 2.4.2 3.1 1.2.7 1 .7 2.4-.1 3.4l-23.2 32c-.5.7-1.3 1.2-2.2 1.2zm.3-28.8c.7 0 1.5.3 2 .8.7.6 1 1.6.9 2.5L26 57.8l21-29-8.2 2.1c-.9.2-1.9 0-2.7-.7-.7-.7-1.1-1.6-.9-2.6l2.9-21.2-21.2 29.2 8-1.6h.6z"/>
	</g>
</svg>
	);
};

export default Thunderbolt;