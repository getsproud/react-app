import React from 'react';

function LayoutAlt(props) {
	const title = props.title || "layout alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 1.3H7C3.8 1.3 1.3 3.8 1.3 7v27.2C1.3 37.4 3.8 40 7 40h50c3.2 0 5.8-2.6 5.8-5.8V7c0-3.2-2.6-5.7-5.8-5.7zm2.3 32.9c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v27.2z"/>
		<path d="M55.4 48.4H8.6c-1 0-1.8.8-1.8 1.8S7.6 52 8.6 52h46.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M55.4 59.3H8.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h46.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default LayoutAlt;