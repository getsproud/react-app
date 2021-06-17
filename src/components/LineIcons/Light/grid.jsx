import React from 'react';

function Grid(props) {
	const title = props.title || "grid";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 33.5c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.4V10.9h6.4c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.4V1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v6.4H33.5V1.5C33.5.7 32.8 0 32 0s-1.5.7-1.5 1.5v6.4H10.9V1.5c0-.8-.7-1.5-1.5-1.5S7.9.7 7.9 1.5v6.4H1.5C.7 7.9 0 8.6 0 9.4s.7 1.5 1.5 1.5h6.4v19.6H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h6.4v19.6H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h6.4v6.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-6.4h19.6v6.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-6.4h19.6v6.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-6.4h6.4c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.4V33.5h6.4zm-32 19.6H10.9V33.5h19.6v19.6zm0-22.6H10.9V10.9h19.6v19.6zm22.6 22.6H33.5V33.5h19.6v19.6zm0-22.6H33.5V10.9h19.6v19.6z"/>
	</g>
</svg>
	);
};

export default Grid;