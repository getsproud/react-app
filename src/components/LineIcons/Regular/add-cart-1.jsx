import React from 'react';

function AddCart1(props) {
	const title = props.title || "add cart 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 3.5h-8c-.8 0-1.5.6-1.7 1.3l-3.2 13.1H37.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h9.5l-4.4 17.9H9.4l-4.2-18h7.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H3c-.5 0-1 .2-1.4.7-.3.4-.5 1-.3 1.5l5 21.4c.2.8.9 1.4 1.7 1.4h36.3c.8 0 1.5-.6 1.7-1.3L54.4 7H61c1 0 1.8-.8 1.8-1.8S62 3.5 61 3.5z"/>
		<path d="M38.6 48.5h-25c-3.4 0-6.1 2.7-6.1 6.1s2.7 6.1 6.1 6.1c3.4 0 6.1-2.7 6.1-6.1 0-.9-.2-1.8-.6-2.6H33c-.4.8-.6 1.7-.6 2.6 0 3.4 2.7 6.1 6.1 6.1 3.4 0 6.1-2.7 6.1-6.1s-2.7-6.1-6-6.1zm-22.4 6.1c0 1.4-1.2 2.6-2.6 2.6S11 56.1 11 54.6s1.2-2.6 2.6-2.6 2.6 1.2 2.6 2.6zm22.4 2.6c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6 2.6 1.2 2.6 2.6-1.2 2.6-2.6 2.6z"/>
		<path d="M24.9 23.2c.3.3.8.5 1.2.5s.9-.2 1.2-.5l5-5c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-2 2V5c0-1-.8-1.8-1.8-1.8S24.3 4 24.3 5v12.7l-2-2c-.7-.7-1.8-.7-2.5 0s-.7 1.8 0 2.5l5.1 5z"/>
	</g>
</svg>
	);
};

export default AddCart1;