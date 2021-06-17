import React from 'react';

function YogaMat(props) {
	const title = props.title || "yoga mat";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 12.1H7c-3.2 0-5.8 2.6-5.8 5.8v28.4c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V17.8c0-3.2-2.6-5.7-5.8-5.7zm-12 3.5v32.9H19V15.6h26zM4.8 46.2V17.8c0-1.2 1-2.3 2.3-2.3h8.5v32.9H7c-1.2 0-2.2-1-2.2-2.2zm54.5 0c0 1.2-1 2.3-2.3 2.3h-8.5V15.6H57c1.2 0 2.3 1 2.3 2.3v28.3z"/>
	</g>
</svg>
	);
};

export default YogaMat;