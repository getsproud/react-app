import React from 'react';

function Copy(props) {
	const title = props.title || "copy";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 23.1H34.8V1.5c0-.8-.7-1.5-1.5-1.5H1.5C.7 0 0 .7 0 1.5V37c0 .8.7 1.5 1.5 1.5h25.6v24c0 .8.7 1.5 1.5 1.5h33.9c.8 0 1.5-.7 1.5-1.5V24.6c0-.8-.7-1.5-1.5-1.5zM3 35.5V3h28.7v20.1h-3.2c-.8 0-1.5.7-1.5 1.5v10.9H3zM61 61H30.1V26.1H61V61z"/>
		<path d="M37 34.3h17c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H37c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M37 44.6h17c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H37c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M37 54.9h17c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H37c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default Copy;