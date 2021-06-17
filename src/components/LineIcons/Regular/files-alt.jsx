import React from 'react';

function FilesAlt(props) {
	const title = props.title || "files alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.3 6.5H39.6L36.9 3c-.9-1.1-2.2-1.8-3.6-1.8h-21c-2.5 0-4.5 2-4.5 4.5v8.6H6.7c-2.5 0-4.5 2-4.5 4.5V58c0 2.5 2 4.5 4.5 4.5h50.5c2.5 0 4.5-2 4.5-4.5V11.1c.1-2.5-1.9-4.6-4.4-4.6zm-46-.7c0-.6.5-1 1-1h21c.3 0 .6.2.8.4l3.2 4.2c.3.4.8.7 1.4.7h18.5c.6 0 1 .5 1 1V25h-24L31 17.2c-.7-1.7-2.4-2.8-4.2-2.8H11.3V5.8zm47 52.4c0 .6-.5 1-1 1H6.7c-.6 0-1-.5-1-1V19c0-.6.5-1 1-1h20c.4 0 .8.2 1 .6l3.8 8.8c.3.6.9 1.1 1.6 1.1h25.2v29.7z"/>
	</g>
</svg>
	);
};

export default FilesAlt;