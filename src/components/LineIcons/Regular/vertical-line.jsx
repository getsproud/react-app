import React from 'react';

function VerticalLine(props) {
	const title = props.title || "vertical line";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M3 17.3h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7H3c-1 0-1.8.8-1.8 1.8S2 17.3 3 17.3z"/>
		<path d="M61 30.3H3c-1 0-1.8.8-1.8 1.8S2 33.8 3 33.8h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
		<path d="M61 46.7H3c-1 0-1.8.8-1.8 1.8S2 50.2 3 50.2h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default VerticalLine;