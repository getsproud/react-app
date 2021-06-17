import React from 'react';

function Grid(props) {
	const title = props.title || "grid";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48 10.3H16c-3.2 0-5.8 2.6-5.8 5.8v32c0 3.2 2.6 5.8 5.8 5.8h32c3.2 0 5.8-2.6 5.8-5.8V16c0-3.2-2.6-5.7-5.8-5.7zm2.3 5.7v14.3H33.8V13.8H48c1.2 0 2.3 1 2.3 2.2zM16 13.8h14.3v16.5H13.8V16c0-1.2 1-2.2 2.2-2.2zM13.8 48V33.8h16.5v16.5H16c-1.2 0-2.2-1.1-2.2-2.3zM48 50.3H33.8V33.8h16.5V48c0 1.2-1.1 2.3-2.3 2.3z"/>
	</g>
</svg>
	);
};

export default Grid;