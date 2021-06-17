import React from 'react';

function FileUpload(props) {
	const title = props.title || "file upload";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.1 12.9H32.9L30 4.5c-.6-1.9-2.4-3.1-4.4-3.1H5.9c-2.6 0-4.6 2-4.6 4.6v52c0 2.5 2.1 4.6 4.6 4.6h52.3c2.5 0 4.6-2.1 4.6-4.6V17.5c0-2.5-2.1-4.6-4.7-4.6zM59.3 58c0 .6-.5 1.1-1.1 1.1H5.9c-.6 0-1.1-.5-1.1-1.1V6c0-.6.5-1.1 1.1-1.1h19.8c.5 0 .9.3 1 .7l3.3 9.6c.2.7.9 1.2 1.7 1.2h26.5c.6 0 1.1.5 1.1 1.1V58z"/>
		<path d="M33.3 27.9c-.7-.7-1.9-.7-2.6 0l-5.3 5.7c-.7.7-.6 1.8.1 2.5s1.8.6 2.5-.1l2.3-2.5v12.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V33.6L36 36c.3.4.8.6 1.3.6.4 0 .9-.2 1.2-.5.7-.7.8-1.8.1-2.5l-5.3-5.7z"/>
	</g>
</svg>
	);
};

export default FileUpload;