import React from 'react';

function Plus(props) {
	const title = props.title || "plus";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 30.5h-29v-29C33.5.7 32.8 0 32 0s-1.5.7-1.5 1.5v29h-29c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h29v29c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-29h29c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Plus;