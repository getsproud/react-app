import React from 'react';

function DinnerTable(props) {
	const title = props.title || "dinner table";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M19.4 33.7H3V11.9c0-.8-.7-1.5-1.5-1.5S0 11.1 0 11.9v40.2c0 .8.7 1.5 1.5 1.5S3 52.9 3 52.1V36.7h14.9V52c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V35.2c0-.8-.7-1.5-1.5-1.5z"/>
		<path d="M62.5 10.4c-.8 0-1.5.7-1.5 1.5v21.8H44.6c-.8 0-1.5.7-1.5 1.5V52c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V36.7H61v15.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V11.9c0-.8-.7-1.5-1.5-1.5z"/>
		<path d="M36.6 50.6h-3.1V28.8h11.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H19.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h11.1v21.7h-3.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h9.2c.8 0 1.5-.7 1.5-1.5s-.7-1.4-1.5-1.4z"/>
	</g>
</svg>
	);
};

export default DinnerTable;