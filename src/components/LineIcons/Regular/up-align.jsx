import React from 'react';

function UpAlign(props) {
	const title = props.title || "up align";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 3.9H3c-1 0-1.8.8-1.8 1.8S2 7.4 3 7.4h58c1 0 1.8-.8 1.8-1.8S62 3.9 61 3.9z"/>
		<path d="M19.3 14.4h-2.1c-3.6 0-6.5 2.9-6.5 6.5v32.7c0 3.6 2.9 6.5 6.5 6.5h2.1c3.6 0 6.5-2.9 6.5-6.5V20.9c0-3.6-2.9-6.5-6.5-6.5zm3 39.2c0 1.7-1.3 3-3 3h-2.1c-1.7 0-3-1.3-3-3V20.9c0-1.7 1.3-3 3-3h2.1c1.7 0 3 1.3 3 3v32.7z"/>
		<path d="M46.8 14.4h-2.1c-3.6 0-6.5 2.9-6.5 6.5v19.5c0 3.6 2.9 6.5 6.5 6.5h2.1c3.6 0 6.5-2.9 6.5-6.5V20.9c0-3.6-3-6.5-6.5-6.5zm3 26c0 1.7-1.3 3-3 3h-2.1c-1.7 0-3-1.3-3-3V20.9c0-1.7 1.3-3 3-3h2.1c1.7 0 3 1.3 3 3v19.5z"/>
	</g>
</svg>
	);
};

export default UpAlign;