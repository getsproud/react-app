import React from 'react';

function RoundBoxPlus(props) {
	const title = props.title || "round box plus";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 0h-61C.7 0 0 .7 0 1.5v61c0 .8.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5v-61c0-.8-.7-1.5-1.5-1.5zM61 61H3V3h58v58z"/>
		<path d="M19.1 33.5h11.4v11.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V33.5h11.4c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H33.5V19.1c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v11.4H19.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default RoundBoxPlus;