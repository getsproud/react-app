import React from 'react';

function Table(props) {
	const title = props.title || "table";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 0h-61C.7 0 0 .7 0 1.5v60.9c0 .9.7 1.6 1.5 1.6h60.9c.8 0 1.5-.7 1.5-1.5v-61C64 .7 63.3 0 62.5 0zM61 21.1v12.1H49.7V21.1H61zM46.7 33.2H33.5V21.1h13.2v12.1zm-16.2 0H17.3V21.1h13.2v12.1zm-16.2 0H3V21.1h11.2v12.1zM3 36.2h11.2v11.3H3V36.2zm14.3 0h13.2v11.3H17.3V36.2zm13.2 14.2V61H17.3V50.4h13.2zm3 0h13.2V61H33.5V50.4zm0-3V36.2h13.2v11.3H33.5zm16.2-11.2H61v11.3H49.7V36.2zM61 3v15.1H3V3h58zM3 50.4h11.2V61H3V50.4zM49.7 61V50.4H61V61H49.7z"/>
	</g>
</svg>
	);
};

export default Table;