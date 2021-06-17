import React from 'react';

function IndentIncrease(props) {
	const title = props.title || "indent increase";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M7.1 3H57c.8 0 1.5-.7 1.5-1.5S57.8 0 56.9 0H7.1c-.9 0-1.5.7-1.5 1.5S6.2 3 7.1 3z"/>
		<path d="M56.9 61H7.1c-.8 0-1.5.7-1.5 1.5S6.2 64 7.1 64H57c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.6-1.5z"/>
		<path d="M42.5 20.3c-.8.4-1.4 1.3-1.4 2.2v19c.1.9.7 1.6 1.5 2 .3.1.6.2.9.2.5 0 1-.2 1.4-.5l10.9-9.4c.6-.5.9-1.1.9-1.9 0-.8-.3-1.5-.9-1.9l-11-9.3c-.6-.6-1.5-.7-2.3-.4zm1.6 19.6v-16l9.3 7.9-9.3 8.1z"/>
		<path d="M7.1 18.2h25.3c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H7.1c-.8 0-1.5.7-1.5 1.5s.6 1.5 1.5 1.5z"/>
		<path d="M7.1 33.5h25.3c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H7.1c-.8 0-1.5.7-1.5 1.5 0 .9.6 1.5 1.5 1.5z"/>
		<path d="M7.1 48.8h25.3c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H7.1c-.8 0-1.5.7-1.5 1.5s.6 1.5 1.5 1.5z"/>
	</g>
</svg>
	);
};

export default IndentIncrease;