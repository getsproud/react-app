import React from 'react';

function Sort(props) {
	const title = props.title || "sort";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M24.9 51l-9.6 9.2v-.1l-.2-58.6c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5l.2 58.5v.1L2.5 51c-.6-.6-1.6-.5-2.1.1-.6.6-.5 1.6.1 2.1L11 63l.1.1c.8.6 1.8.9 2.8.9 1 0 2-.3 2.7-.9l10.4-10c.6-.6.6-1.5 0-2.1-.5-.6-1.5-.6-2.1 0z"/>
		<path d="M63.5 11.4L52.7 1.1l-.1-.1c-1.6-1.3-4-1.3-5.5 0l-10.4 9.9c-.6.6-.6 1.5-.1 2.1.6.6 1.5.6 2.1.1L48.3 4v.1l.2 58.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5L51.3 4v-.1l10.1 9.6c.3.3.7.4 1 .4.4 0 .8-.2 1.1-.5.6-.5.6-1.5 0-2z"/>
	</g>
</svg>
	);
};

export default Sort;