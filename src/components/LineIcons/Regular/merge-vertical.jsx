import React from 'react';

function MergeVertical(props) {
	const title = props.title || "merge vertical";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.7 34.2c-1.1-1.3-1.1-3.2 0-4.4l9.6-11.4c.6-.7.5-1.8-.2-2.5-.7-.6-1.8-.5-2.5.2L50 27.5c-2.2 2.6-2.2 6.3 0 8.9l9.6 11.4c.3.4.8.6 1.3.6.4 0 .8-.1 1.1-.4.7-.6.8-1.7.2-2.5l-9.5-11.3z"/>
		<path d="M4.3 16.1c-.6-.7-1.7-.8-2.5-.2-.7.6-.8 1.7-.2 2.5l9.6 11.4c1.1 1.3 1.1 3.2 0 4.4L1.7 45.7c-.6.7-.5 1.8.2 2.5.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6L14 36.5c2.2-2.6 2.2-6.3 0-8.9L4.3 16.1z"/>
		<path d="M32 14.3c-1 0-1.8.8-1.8 1.8V48c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V16c0-.9-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default MergeVertical;