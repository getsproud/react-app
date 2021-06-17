import React from 'react';

function Select(props) {
	const title = props.title || "select";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54 42c-.7-.7-1.8-.7-2.5-.1L34.2 58.6c-1.1.8-2.8.8-3.9 0L12.4 42.1c-.7-.7-1.8-.6-2.5.1-.6.7-.6 1.8.1 2.4l17.9 16.6.1.1c1.2 1 2.7 1.4 4.2 1.4s3-.5 4.2-1.4L54 44.5c.7-.7.7-1.8 0-2.5z"/>
		<path d="M11.2 22.5c.4 0 .9-.2 1.2-.5L29.8 5.4c1.1-.8 2.8-.8 3.9 0l17.8 16.5c.7.7 1.8.6 2.5-.1s.6-1.8-.1-2.5L36.1 2.8l-.1-.1c-2.4-1.9-6-1.9-8.4 0L10 19.5c-.7.7-.7 1.8 0 2.5.3.3.8.5 1.2.5z"/>
	</g>
</svg>
	);
};

export default Select;