import React from 'react';

function PaintRollerAlt1(props) {
	const title = props.title || "paint roller alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.5 16.7s0-.1.1-.1c0 0 0-.1.1-.1v-.1-.1-.2V1.5C56.7.7 56 0 55.2 0H8.7c-.8 0-1.5.7-1.5 1.5V16c0 .8.7 1.5 1.5 1.5H51L31.6 33.4c-.3.3-.6.7-.6 1.2v5.7h-4.2c-.8 0-1.5.7-1.5 1.5v20.7c0 .8.7 1.5 1.5 1.5h11.4c.8 0 1.5-.7 1.5-1.5V41.8c0-.8-.7-1.5-1.5-1.5H34v-5l22.2-18.2.1-.1.1-.1.1-.1v-.1zM36.7 61h-8.4V43.3h8.4V61zM10.2 3h43.5v11.5H10.2V3z"/>
	</g>
</svg>
	);
};

export default PaintRollerAlt1;