import React from 'react';

function FilesAlt(props) {
	const title = props.title || "files alt";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.5 5.5H39.8L36 .5c-.2-.3-.7-.5-1.2-.5H8.4c-.8 0-1.5.7-1.5 1.5v12.4H2.5c-.8 0-1.5.7-1.5 1.5v47.1c0 .8.7 1.5 1.5 1.5h59c.8 0 1.5-.7 1.5-1.5V7c0-.8-.7-1.5-1.5-1.5zM60 20.9v4H34.2l-2.3-5.3H60v1.3zM9.9 3h24.2l3.8 5c.3.4.7.6 1.2.6H60v8.1H30.6l-.8-1.9c-.2-.6-.8-.9-1.4-.9H9.9V3zM60 61H4V16.9h23.5L31.8 27c.2.6.8.9 1.4.9H60V61z"/>
	</g>
</svg>
	);
};

export default FilesAlt;