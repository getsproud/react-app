import React from 'react';

function SchoolBench(props) {
	const title = props.title || "school bench";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32.5 26.4L2 15.3c-.8-.3-1.6.1-1.9.9-.3.8.1 1.7.9 2l4.6 1.7v27.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V20.9l16.4 6v20.4c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V28l3.5 1.3c.2.1.3.1.5.1.6 0 1.2-.4 1.4-1 .3-.8-.1-1.7-.9-2z"/>
		<path d="M62.5 15.3c-.8 0-1.5.7-1.5 1.5v17.9H45.9c-.8 0-1.5.7-1.5 1.5v11.1c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-9.6H61v9.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V16.8c0-.9-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default SchoolBench;