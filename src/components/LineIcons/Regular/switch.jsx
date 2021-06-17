import React from 'react';

function Switch(props) {
	const title = props.title || "switch";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.3 36.6c-.7-.7-1.8-.7-2.5-.1-.7.7-.7 1.8-.1 2.5l8.2 8.6-54.9.1c-1 0-1.7.8-1.7 1.8s.8 1.7 1.8 1.7L58 51l-8.2 8.8c-.7.7-.6 1.8.1 2.5.3.3.8.5 1.2.5.5 0 .9-.2 1.3-.6l9.3-10 .1-.1c1.3-1.6 1.3-4 0-5.7l-9.5-9.8z"/>
		<path d="M11.6 27.8c.3.4.8.5 1.3.5.4 0 .9-.2 1.2-.5.7-.7.7-1.8.1-2.5L6 16.8l55-.2c1 0 1.7-.8 1.7-1.8s-.8-1.7-1.8-1.7L6 13.3l8.6-9.1c.7-.7.6-1.8-.1-2.5s-1.8-.6-2.5.1L2.3 12.1l-.1.1c-1.3 1.6-1.3 4 0 5.7l9.4 9.9z"/>
	</g>
</svg>
	);
};

export default Switch;