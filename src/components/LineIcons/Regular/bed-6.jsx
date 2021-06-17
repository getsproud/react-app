import React from 'react';

function Bed6(props) {
	const title = props.title || "bed 6";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 28.1H21.6c.2-.6.4-1.2.4-1.9v-2.5c0-3-2.4-5.4-5.4-5.4h-9c-1.1 0-2 .3-2.9.9V9.4c0-1-.8-1.8-1.8-1.8s-1.6.8-1.6 1.8v45.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-7.7h54.5v7.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V29.9c-.2-1-1-1.8-2-1.8zM5.8 23.7c0-1 .8-1.9 1.9-1.9h8.9c1 0 1.9.8 1.9 1.9v2.5c0 1-.8 1.9-1.9 1.9h-9c-1 0-1.9-.8-1.9-1.9v-2.5zm-1 7.9h54.5v11.8H4.8V31.6z"/>
	</g>
</svg>
	);
};

export default Bed6;