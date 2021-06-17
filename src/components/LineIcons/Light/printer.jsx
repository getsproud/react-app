import React from 'react';

function Printer(props) {
	const title = props.title || "printer";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.7 13.9h-4V1.5C55.7.7 55 0 54.2 0H9.8C9 0 8.3.7 8.3 1.5v12.4h-4c-.8 0-1.5.7-1.5 1.5v22.2c0 .8.7 1.5 1.5 1.5h4v23.5c0 .7.7 1.4 1.5 1.4h44.4c.8 0 1.5-.7 1.5-1.5V39h4c.8 0 1.5-.7 1.5-1.5V15.4c0-.9-.6-1.5-1.5-1.5zM11.3 3h41.4v10.9H11.3V3zm41.4 58H11.3V39h41.4v22zm5.5-25H5.8V16.9h52.4V36z"/>
		<path d="M20.9 47.4h22.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H20.9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M20.9 55.7h22.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H20.9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5z"/>
		<path d="M47.1 23.7c0 2.4 1.9 4.3 4.3 4.3s4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3-4.3 1.9-4.3 4.3zm5.6 0c0 .7-.6 1.3-1.3 1.3s-1.3-.6-1.3-1.3c0-.7.6-1.3 1.3-1.3s1.3.6 1.3 1.3z"/>
	</g>
</svg>
	);
};

export default Printer;