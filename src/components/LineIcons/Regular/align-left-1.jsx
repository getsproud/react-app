import React from 'react';

function AlignLeft1(props) {
	const title = props.title || "align left 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M5.7 49.9V14.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v35.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8z"/>
		<path d="M20.9 50.9c3.4 0 6.1-2.7 6.1-6.1V19.2c0-3.4-2.7-6.1-6.1-6.1H19c-3.4 0-6.1 2.7-6.1 6.1v25.6c0 3.4 2.7 6.1 6.1 6.1h1.9zm-4.5-6.1V19.2c0-1.4 1.2-2.6 2.6-2.6h1.9c1.4 0 2.6 1.2 2.6 2.6v25.6c0 1.4-1.2 2.6-2.6 2.6H19c-1.5 0-2.6-1.2-2.6-2.6z"/>
		<path d="M55.7 1.3H4.9C4 1.3 3.2 2 3.2 3S4 4.8 4.9 4.8h50.8c1.4 0 2.6 1.2 2.6 2.6v49.3c0 1.4-1.2 2.6-2.6 2.6H4.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h50.8c3.4 0 6.1-2.7 6.1-6.1V7.4c0-3.4-2.8-6.1-6.1-6.1z"/>
	</g>
</svg>
	);
};

export default AlignLeft1;