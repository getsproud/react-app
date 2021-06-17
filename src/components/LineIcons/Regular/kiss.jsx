import React from 'react';

function Kiss(props) {
	const title = props.title || "kiss";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.7 31.6c0-.3-.2-1.3-1-2.1-.6-.6-1.4-.9-2.2-1-.1-.1-.3-.2-.6-.5-.5-.5-1.6-2-2.1-2.8-.1-.1-1.6-2.4-2.8-3.9-1.2-1.7-3.6-3.9-5.7-5-2.1-1-4-1.2-5.6-1.2h-.1c-2.4 0-4.9.6-7.3 1.7-1.5.7-2.6 1.6-3.5 2.5-.3-.3-.6-.5-.7-.6-1.6-1.4-3.7-2.5-5.9-3-.1 0-3.5-.9-6.6-.4-2.9.5-4.6 1.8-5.7 2.7l-.2.2c-1.4 1.1-3.4 3.6-3.4 3.7-.2.3-1.6 2.3-2.1 3L6 26.7c-.2.3-.9 1.2-1.4 1.7-.2.1-.3.2-.3.3h-.1c-1.5.2-2.3 1-2.7 1.6-.8 1.3-.4 2.7-.3 2.9v.1C4 40.3 12 44.4 12.3 44.6c5.8 2.9 12.2 4.3 19.2 4.3 1.9 0 3.8-.1 5.8-.3.3 0 .4 0 .5-.1 1.5-.1 4.9-.9 5.4-1 .1 0 2.4-.7 4.2-1.3 1.2-.5 2-.8 2.7-1.2l1.2-.6c1.5-.7 3.7-2.4 4.2-2.7.9-.6 2.4-2.2 2.6-2.4.5-.5 1.5-1.8 1.8-2.1.4-.5 1.1-1.6 1.3-1.9.4-.6.8-1.6.9-1.7.7-.9.7-1.7.6-2zm-4.2 1.8c-.3.5-.8 1.3-1 1.5-.5.7-1.2 1.6-1.5 1.8-.6.7-1.8 1.8-2.2 2 0 0-.1 0-.1.1-.6.5-2.5 1.9-3.5 2.4-.5.2-.9.5-1.3.7-.7.4-1.3.7-2.4 1.1-1.6.6-3.9 1.2-3.9 1.2-1.3.3-3.8.8-4.7.9-.1 0-.4 0-.7.1-8.6.9-16.4-.3-23-3.6-.1 0-7-3.6-9.4-9.3.6 0 1.4-.2 2.4-1.2 1-.9 1.8-2.2 1.9-2.3l1.2-1.8c.9-1.3 1.8-2.7 2-2.8.4-.6 1.9-2.4 2.7-3l.2-.2c1-.8 2.1-1.6 4.1-2 2.3-.4 5.1.3 5.2.3 1.6.4 3.2 1.2 4.4 2.3.5.4 1.2 1.1 1.5 1.5.3.5.9.8 1.4.8.6 0 1.1-.3 1.4-.7 0 0 1.4-1.9 3.6-2.9 2.3-1.1 4.4-1.4 5.7-1.4h.1c1.4 0 2.6.1 4 .8 1.5.7 3.5 2.6 4.4 3.9 1.1 1.5 2.7 3.8 2.7 3.8.2.2 1.6 2.4 2.5 3.3.9.9 1.6 1.3 2.1 1.4.2 0 .4.1.7.1 0 .2-.3.9-.5 1.2z"/>
	</g>
</svg>
	);
};

export default Kiss;