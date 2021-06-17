import React from 'react';

function LayersAlt(props) {
	const title = props.title || "layers alt ";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 35.7H46.2V19.3c0-.8-.7-1.5-1.5-1.5H28.3V1.5c0-.8-.7-1.5-1.5-1.5H1.5C.7 0 0 .7 0 1.5v25.3c0 .8.7 1.5 1.5 1.5h16.3v16.3c0 .8.7 1.5 1.5 1.5h16.3v16.3c0 .8.7 1.5 1.5 1.5h25.3c.8 0 1.5-.7 1.5-1.5V37.2c.1-.9-.6-1.5-1.4-1.5zM3 25.3V3h22.3v14.8h-6c-.8 0-1.5.7-1.5 1.5v6H3zm17.8 17.9V20.8h22.3v14.8h-6c-.8 0-1.5.7-1.5 1.5v6H20.8zM61 61H38.7V38.7H61V61z"/>
	</g>
</svg>
	);
};

export default LayersAlt;