import React from 'react';

function CutleryAlt(props) {
	const title = props.title || "cutlery alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55 1.3c-1 0-1.8.8-1.8 1.8v16.5c0 3.3-2.7 6-6.1 6.3V3c0-1-.8-1.8-1.8-1.8S43.7 2 43.7 3v22.8c-3.4-.3-6-3-6-6.3V3c0-1-.8-1.8-1.8-1.8S34.1 2 34.1 3v16.5c0 5.2 4.2 9.5 9.5 9.8V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V29.3c5.3-.3 9.6-4.6 9.6-9.8V3c-.1-1-.8-1.7-1.8-1.7z"/>
		<path d="M20.1 1.6h-4.2c-3.6 0-6.6 2.9-6.6 6.5l-2 30.2c0 .5.1 1 .5 1.3.3.4.7.6 1.2.6h9.3V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V3.3c-.1-1-.9-1.7-1.8-1.7zm-9.2 35.1l1.8-28.4v-.1c0-1.7 1.4-3.1 3.1-3.1h2.5v31.6h-7.4z"/>
	</g>
</svg>
	);
};

export default CutleryAlt;