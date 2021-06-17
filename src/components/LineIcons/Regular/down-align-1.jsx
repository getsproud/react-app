import React from 'react';

function DownAlign1(props) {
	const title = props.title || "down align 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 56.6H3c-1 0-1.8.8-1.8 1.8S2 60.1 3 60.1h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
		<path d="M17.2 49.6h2.1c3.6 0 6.5-2.9 6.5-6.5V10.4c0-3.6-2.9-6.5-6.5-6.5h-2.1c-3.6 0-6.5 2.9-6.5 6.5v32.7c0 3.6 3 6.5 6.5 6.5zm-3-39.2c0-1.7 1.3-3 3-3h2.1c1.7 0 3 1.3 3 3v32.7c0 1.7-1.3 3-3 3h-2.1c-1.7 0-3-1.3-3-3V10.4z"/>
		<path d="M44.7 49.6h2.1c3.6 0 6.5-2.9 6.5-6.5V23.6c0-3.6-2.9-6.5-6.5-6.5h-2.1c-3.6 0-6.5 2.9-6.5 6.5v19.5c0 3.6 2.9 6.5 6.5 6.5zm-3-26c0-1.7 1.3-3 3-3h2.1c1.7 0 3 1.3 3 3v19.5c0 1.7-1.3 3-3 3h-2.1c-1.7 0-3-1.3-3-3V23.6z"/>
	</g>
</svg>
	);
};

export default DownAlign1;