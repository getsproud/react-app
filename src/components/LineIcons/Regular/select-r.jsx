import React from 'react';

function SelectR(props) {
	const title = props.title || "select r";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 1.3H7C3.8 1.3 1.3 3.8 1.3 7v50c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V7c-.1-3.2-2.7-5.7-5.9-5.7zM59.3 57c0 1.2-1 2.3-2.3 2.3H7c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v50z"/>
		<path d="M42.4 37l-9.7 9.3c-.3.2-.9.2-1.2 0l-9.9-9.2c-.7-.7-1.8-.6-2.5.1s-.6 1.8.1 2.5l10 9.3.1.1c.8.6 1.8 1 2.8 1 1 0 2-.3 2.8-1l9.9-9.5c.7-.7.7-1.8.1-2.5s-1.8-.7-2.5-.1z"/>
		<path d="M20.4 27.5c.4 0 .9-.2 1.2-.5l9.7-9.3c.3-.2.9-.2 1.2 0l9.9 9.2c.7.7 1.8.6 2.5-.1s.6-1.8-.1-2.5l-10-9.3h-.1c-1.6-1.3-4-1.3-5.7 0l-9.9 9.5c-.7.7-.7 1.8-.1 2.5.5.3.9.5 1.4.5z"/>
	</g>
</svg>
	);
};

export default SelectR;