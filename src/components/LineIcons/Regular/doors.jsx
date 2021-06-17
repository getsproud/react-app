import React from 'react';

function Doors(props) {
	const title = props.title || "doors";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 8.5H6c-2.6 0-4.8 2.1-4.8 4.8v37.4c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V13.3c0-2.6-2.2-4.8-4.8-4.8zM37.7 12v40H26.2V12h11.5zM4.8 50.7V13.3c0-.7.5-1.3 1.2-1.3h16.7v40H6c-.7 0-1.2-.6-1.2-1.3zm54.5 0c0 .7-.6 1.3-1.3 1.3H41.2V12H58c.7 0 1.3.6 1.3 1.3v37.4z"/>
		<path d="M17.4 28.9c-1 0-1.8.8-1.8 1.8v2.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.7c0-1-.8-1.8-1.8-1.8z"/>
		<path d="M46.6 28.9c-1 0-1.8.8-1.8 1.8v2.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.7c-.1-1-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Doors;