import React from 'react';

function FolderAlt1(props) {
	const title = props.title || "folder alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.7 12.9H32.9l-2.6-7.5c-.8-2.4-3.1-4.1-5.7-4.1H7.3c-3.3 0-6 2.7-6 6v49.2c0 3.3 2.7 6 6 6h49.4c3.3 0 6-2.7 6-6V18.9c.1-3.3-2.7-6-6-6zm-49.4-8h17.3c1.1 0 2 .7 2.4 1.7l3 8.7c.2.7.9 1.2 1.7 1.2h25.1c1.4 0 2.5 1.1 2.5 2.5v7H4.8V7.4c0-1.4 1.1-2.5 2.5-2.5zm49.4 54.2H7.3c-1.4 0-2.5-1.1-2.5-2.5V29.5h54.5v27.1c0 1.4-1.2 2.5-2.6 2.5z"/>
	</g>
</svg>
	);
};

export default FolderAlt1;