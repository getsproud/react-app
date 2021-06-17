import React from 'react';

function Sketchbook(props) {
	const title = props.title || "sketchbook";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 14.5H7.7c-.8 0-1.5.7-1.5 1.5v5.2H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4.7v6.3H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4.7v6.3H1.5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h4.7V48c0 .8.7 1.5 1.5 1.5h54.8c.8 0 1.5-.7 1.5-1.5V16c0-.8-.7-1.5-1.5-1.5zm-1.5 32H9.2v-3.7h1.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H9.2v-6.3h1.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H9.2v-6.3h1.6c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H9.2v-3.7H61v29z"/>
	</g>
</svg>
	);
};

export default Sketchbook;