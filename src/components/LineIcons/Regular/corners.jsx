import React from 'react';

function Corners(props) {
	const title = props.title || "corners";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.8 33.6L22.7 22.8c-.7-.3-1.4-.1-1.9.4s-.7 1.3-.4 1.9l10.8 25.1c.3.6.9 1.1 1.6 1.1h.1c.7 0 1.4-.5 1.6-1.2l3.3-9.8 9.8-3.3c.7-.2 1.2-.9 1.2-1.6.1-.8-.3-1.5-1-1.8zm-11.9 3.6c-.5.2-.9.6-1.1 1.1l-2.1 6.3-7.3-16.8L42.2 35l-6.3 2.2z"/>
		<path d="M60.5 1.2H12.1C6.4 1.2 1.8 5.9 1.8 11.6V61c0 1 .8 1.8 1.8 1.8S5.3 62 5.3 61V11.6c0-3.8 3.1-6.9 6.9-6.9h48.4c1 0 1.8-.8 1.8-1.8s-.9-1.7-1.9-1.7z"/>
	</g>
</svg>
	);
};

export default Corners;