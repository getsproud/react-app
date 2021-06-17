import React from 'react';

function FolderAlt(props) {
	const title = props.title || "folder alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50.4 59.1H5.5c-2.3 0-4.3-2-4.3-4.4V9.3c0-2.4 1.9-4.4 4.3-4.4h14.3c1.7 0 3.3 1.1 3.9 2.7l2.3 5.7h24.5c2.3 0 4.3 2 4.3 4.4v6.9H61c.6 0 1.1.3 1.4.7.3.5.4 1 .2 1.6L52.1 58c-.3.7-.9 1.1-1.7 1.1zm-42-3.5h40.8l9.4-27.5H19.5L8.4 55.6zM5.5 8.4c-.4 0-.8.4-.8.9v45.4c0 .1 0 .3.1.4l11.8-29.4c.3-.7.9-1.1 1.6-1.1h33v-6.9c0-.5-.3-.9-.8-.9H24.9c-.7 0-1.4-.4-1.6-1.1l-2.7-6.8c-.1-.3-.4-.5-.7-.5H5.5z"/>
	</g>
</svg>
	);
};

export default FolderAlt;