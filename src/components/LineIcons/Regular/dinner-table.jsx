import React from 'react';

function DinnerTable(props) {
	const title = props.title || "dinner table";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M18.1 33.3H4.8V12.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v38.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V36.8h13.3c.1 0 .2.1.2.2v14.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V37c-.2-2-1.8-3.7-3.8-3.7z"/>
		<path d="M61 11.2c-1 0-1.8.8-1.8 1.8v20.4H45.9c-2 0-3.7 1.6-3.7 3.7v14.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V37c0-.1.1-.2.2-.2h13.3v14.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V12.9c-.1-1-.9-1.7-1.9-1.7z"/>
		<path d="M35 49.3h-1.2V26.5H44c1 0 1.8-.8 1.8-1.8S45 23 44 23H20c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h10.3v22.8H29c-1 0-1.8.8-1.8 1.8S28 53 29 53h6c1 0 1.8-.8 1.8-1.8s-.9-1.9-1.8-1.9z"/>
	</g>
</svg>
	);
};

export default DinnerTable;