import React from 'react';

function FolderAlt(props) {
	const title = props.title || "folder alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.7 25.2c-.3-.4-.7-.6-1.2-.6h-6.8V17c0-2.4-1.9-4.3-4.1-4.3h-26L23 6.5c-.6-1.6-2.1-2.7-3.8-2.7H4.1C1.9 3.8 0 5.7 0 8.1v47.8c0 2.4 1.9 4.3 4.1 4.3h47.3c.6 0 1.2-.4 1.4-1l11.1-32.6c.2-.5.1-1-.2-1.4zM3.5 57c-.3-.3-.5-.7-.5-1.1V8.1c0-.7.5-1.3 1.1-1.3h15.1c.4 0 .8.3 1 .8l2.9 7.2c.2.6.8.9 1.4.9h27c.6 0 1.1.6 1.1 1.3v7.6h-35c-.6 0-1.2.4-1.4.9L3.5 57zm46.8.2H6.6l11.9-29.6h41.8l-10 29.6z"/>
	</g>
</svg>
	);
};

export default FolderAlt;