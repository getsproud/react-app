import React from 'react';

function LinkAlt(props) {
	const title = props.title || "link alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M9.5 27.2h12.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H9.5c-4.6 0-8.3 3.7-8.3 8.3s3.7 8.3 8.3 8.3h12.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H9.5c-2.6 0-4.8-2.2-4.8-4.8.1-2.4 2.2-4.6 4.8-4.6z"/>
		<path d="M36.5 30.3h-9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M54.5 23.7H42.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h12.3c2.6 0 4.8 2.2 4.8 4.8 0 2.6-2.2 4.8-4.8 4.8H42.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h12.3c4.6 0 8.3-3.7 8.3-8.3s-3.8-8.5-8.3-8.5z"/>
	</g>
</svg>
	);
};

export default LinkAlt;