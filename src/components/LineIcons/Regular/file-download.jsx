import React from 'react';

function FileDownload(props) {
	const title = props.title || "file download";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.2 12.9H32.9L30 4.4c-.6-1.9-2.4-3.1-4.4-3.1H5.8c-2.5 0-4.6 2.1-4.6 4.6v52.3c0 2.5 2.1 4.6 4.6 4.6h52.5c2.5 0 4.6-2.1 4.6-4.6V17.5c0-2.6-2.1-4.6-4.7-4.6zm1.2 45.2c0 .6-.5 1.1-1.1 1.1H5.8c-.6 0-1.1-.5-1.1-1.1V5.9c0-.6.5-1.1 1.1-1.1h19.8c.5 0 .9.3 1.1.8l3.3 9.7c.2.7.9 1.2 1.7 1.2h26.6c.6 0 1.1.5 1.1 1.1v40.5z"/>
		<path d="M36 39.6l-2.3 2.5v-13c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V42l-2.2-2.4c-.7-.7-1.8-.8-2.5-.1s-.8 1.8-.1 2.5l5.3 5.7c.3.4.8.6 1.3.6s1-.2 1.3-.6l5.3-5.7c.7-.7.6-1.8-.1-2.5-.6-.7-1.7-.6-2.4.1z"/>
	</g>
</svg>
	);
};

export default FileDownload;