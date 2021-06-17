import React from 'react';

function ClipboardAlt(props) {
	const title = props.title || "clipboard alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M48.5 11.1h-3.3C44.9 9 43.1 7.4 41 7.4h-1.6c-.6-3.5-3.7-6.1-7.3-6.1-3.7 0-6.7 2.7-7.3 6.1H23c-2.2 0-4 1.6-4.3 3.7h-3.3c-3.1 0-5.7 2.6-5.7 5.7v40.3c0 3.1 2.6 5.7 5.7 5.7h33.1c3.1 0 5.7-2.6 5.7-5.7V16.8c0-3.1-2.5-5.7-5.7-5.7zm-26.3.7c0-.5.4-.9.9-.9h3.3c1 0 1.8-.8 1.8-1.8v-.4c0-2.2 1.8-3.9 3.9-3.9 2.2 0 3.9 1.8 3.9 3.9v.5c0 1 .8 1.8 1.8 1.8H41c.5 0 .9.4.9.9v2.4c0 .5-.4.9-.9.9H23c-.5 0-.9-.4-.9-.9v-2.5zm28.5 45.3c0 1.2-1 2.2-2.2 2.2h-33c-1.2 0-2.2-1-2.2-2.2V16.8c0-1.2 1-2.2 2.2-2.2h3.2c.2 2.2 2.1 4 4.3 4h18c2.3 0 4.1-1.8 4.3-4h3.2c1.2 0 2.2 1 2.2 2.2v40.3z"/>
		<path d="M46 40.2h-4.8L36 29.8c-.4-.7-1.1-1.2-1.9-1.2-.8 0-1.6.5-1.9 1.2l-4.5 9.9-2.1-4.2c-.3-.6-.9-1-1.6-1h-6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.9l2.9 5.9c.4.7 1.1 1.2 1.9 1.2.8 0 1.5-.5 1.9-1.2l4.5-10 4.4 8.7c.3.6.9 1 1.6 1H46c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default ClipboardAlt;