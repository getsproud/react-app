import React from 'react';

function IronTable(props) {
	const title = props.title || "iron table";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 17.7H3c-1 0-1.8.8-1.8 1.8S2 21.2 3 21.2h8L28.7 32 10.6 43.1c-.8.5-1.1 1.6-.6 2.4.3.5.9.8 1.5.8.3 0 .6-.1.9-.3L32 34l19.6 12c.3.2.6.3.9.3.6 0 1.2-.3 1.5-.8.5-.8.2-1.9-.6-2.4L35.3 32 53 21.2h8c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zM32 29.9l-14.3-8.8h28.6L32 29.9z"/>
	</g>
</svg>
	);
};

export default IronTable;