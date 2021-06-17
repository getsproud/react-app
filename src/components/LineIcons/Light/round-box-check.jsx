import React from 'react';

function RoundBoxCheck(props) {
	const title = props.title || "round box check";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 0h-61C.7 0 0 .7 0 1.5v61c0 .8.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5v-61c0-.8-.7-1.5-1.5-1.5zM61 61H3V3h58v58z"/>
		<path d="M24.5 45.3c.3.3.7.4 1.1.4s.8-.2 1.1-.4l24.5-24.5c.6-.6.6-1.5 0-2.1-.6-.6-1.5-.6-2.1 0L25.5 42.1 15.1 31.6c-.6-.6-1.5-.6-2.1 0-.6.6-.6 1.5 0 2.1l11.5 11.6z"/>
	</g>
</svg>
	);
};

export default RoundBoxCheck;