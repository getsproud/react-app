import React from 'react';

function Stop(props) {
	const title = props.title || "stop";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 64h-61C.7 64 0 63.3 0 62.5v-61C0 .7.7 0 1.5 0h61c.8 0 1.5.7 1.5 1.5v61c0 .8-.7 1.5-1.5 1.5zM3 61h58V3H3v58z"/>
	</g>
</svg>
	);
};

export default Stop;