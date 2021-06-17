import React from 'react';

function Bricks(props) {
	const title = props.title || "bricks";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.5 30.5h-8.6v-9.6c0-2.4-1.9-4.3-4.3-4.3H15.4c-2.4 0-4.3 1.9-4.3 4.3v9.6H2.5C1.1 30.5 0 31.6 0 33v11.9c0 1.4 1.1 2.5 2.5 2.5h59c1.4 0 2.5-1.1 2.5-2.5V33c0-1.4-1.1-2.5-2.5-2.5zm-11.6-9.6v9.6H33.5V19.6h15.1c.7 0 1.3.6 1.3 1.3zm-8.3 12.6v10.9H22.4V33.5h19.2zM14.1 20.9c0-.7.6-1.3 1.3-1.3h15.1v10.9H14.1v-9.6zM3 33.5h16.4v10.9H3V33.5zm58 10.9H44.6V33.5H61v10.9z"/>
	</g>
</svg>
	);
};

export default Bricks;