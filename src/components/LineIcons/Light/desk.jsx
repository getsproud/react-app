import React from 'react';

function Desk(props) {
	const title = props.title || "desk";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 0h-61C.7 0 0 .7 0 1.5v61c0 .8.7 1.5 1.5 1.5S3 63.3 3 62.5V20.6h27v42c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-8.9h28v8.9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V1.5c0-.8-.7-1.5-1.5-1.5zM3 3h58v14.6H3V3zm58 17.6v13.5H33V20.6h28zm-28 30V37h28v13.6H33z"/>
		<path d="M34.7 10.2c0-.8-.7-1.5-1.5-1.5h-2.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h2.4c.8 0 1.5-.7 1.5-1.5z"/>
		<path d="M45.3 29.3h2.4c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-2.4c-.8 0-1.5.7-1.5 1.5s.6 1.5 1.5 1.5z"/>
		<path d="M47.7 42.8h-2.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h2.4c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Desk;