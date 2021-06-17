import React from 'react';

function Pagination(props) {
	const title = props.title || "pagination";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.4 30.5L52 19c-.6-.6-1.5-.6-2.1 0s-.6 1.5 0 2.1L60.7 32 49.8 42.9c-.6.6-.6 1.5 0 2.1.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4l11.4-11.4c.8-.9.8-2.3 0-3.1z"/>
		<path d="M14.1 19c-.6-.6-1.5-.6-2.1 0L.6 30.5c-.8.9-.8 2.2 0 3.1L12 45c.3.3.7.4 1.1.4.4 0 .8-.1 1.1-.4.6-.6.6-1.5 0-2.1L3.3 32l10.8-10.9c.6-.5.6-1.5 0-2.1z"/>
		<ellipse cx="21" cy="32" rx="2.6" ry="2.6"/>
		<ellipse cx="32.3" cy="32" rx="2.6" ry="2.6"/>
		<ellipse cx="43.8" cy="32" rx="2.6" ry="2.6"/>
	</g>
</svg>
	);
};

export default Pagination;