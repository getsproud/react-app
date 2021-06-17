import React from 'react';

function Next(props) {
	const title = props.title || "next";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.3 3.3H48c-.8 0-1.5.7-1.5 1.5v24.6L3.6.3C3.1 0 2.5-.1 2 .2c-.5.3-.8.8-.8 1.3v60.9c0 .6.3 1.1.8 1.3.3.2.5.3.7.3.3 0 .6-.1.8-.3l42.9-29v24.6c0 .8.7 1.5 1.5 1.5h13.3c.8 0 1.5-.7 1.5-1.5V4.8c.1-.9-.6-1.5-1.4-1.5zM4.2 59.6V4.4L45.1 32 4.2 59.6zm55.6-1.9H49.5V6.3h10.3v51.4z"/>
	</g>
</svg>
	);
};

export default Next;