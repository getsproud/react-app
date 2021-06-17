import React from 'react';

function FolderAlt1(props) {
	const title = props.title || "folder alt 1";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 15.7h-27l-4.7-11c-.2-.6-.8-.9-1.4-.9h-28C.7 3.8 0 4.5 0 5.3v53.4c0 .8.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5V17.2c0-.9-.7-1.5-1.5-1.5zm-34-8.9l4.7 11c.2.6.8.9 1.4.9H61v8.9H3V6.8h25.5zM3 57.2V30.5h58v26.7H3z"/>
	</g>
</svg>
	);
};

export default FolderAlt1;