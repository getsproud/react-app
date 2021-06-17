import React from 'react';

function ChestOfDrawers1(props) {
	const title = props.title || "chest of drawers 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.5 1.3h-49C4 1.3 1.3 4 1.3 7.5V61c0 1 .8 1.8 1.8 1.8S4.8 62 4.8 61v-8h54.5v8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V7.5C62.7 4 60 1.3 56.5 1.3zm2.7 15.5v8.8H33.7v-8.8h25.5zm-29 8.8H4.8v-8.8h25.5v8.8zM4.8 29.1h25.5v8.4H4.8v-8.4zm28.9 0h25.5v8.4H33.7v-8.4zM7.5 4.8h49c1.5 0 2.7 1.2 2.7 2.7v5.9H4.8V7.5C4.8 6 6 4.8 7.5 4.8zM4.8 49.5v-8.4h54.5v8.4H4.8z"/>
	</g>
</svg>
	);
};

export default ChestOfDrawers1;