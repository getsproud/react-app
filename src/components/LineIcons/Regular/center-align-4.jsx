import React from 'react';

function CenterAlign4(props) {
	const title = props.title || "center align 4";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48.3 38.2H33.8v-7.6h8c3.6 0 6.5-2.9 6.5-6.5V22c0-3.6-2.9-6.5-6.5-6.5h-8V3c0-1-.8-1.8-1.8-1.8S30.2 2 30.2 3v12.5h-8c-3.6 0-6.5 2.9-6.5 6.5v2.1c0 3.6 2.9 6.5 6.5 6.5h8v7.6H15.7c-3.6 0-6.5 2.9-6.5 6.5v2.1c0 3.6 2.9 6.5 6.5 6.5h14.6V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-7.7h14.6c3.6 0 6.5-2.9 6.5-6.5v-2.1c-.2-3.6-3.1-6.5-6.7-6.5zM19.2 24.1V22c0-1.7 1.3-3 3-3h19.5c1.7 0 3 1.3 3 3v2.1c0 1.7-1.3 3-3 3H22.2c-1.6 0-3-1.4-3-3zm32.1 22.7c0 1.7-1.3 3-3 3H15.7c-1.7 0-3-1.3-3-3v-2.1c0-1.7 1.3-3 3-3h32.7c1.7 0 3 1.3 3 3v2.1z"/>
	</g>
</svg>
	);
};

export default CenterAlign4;