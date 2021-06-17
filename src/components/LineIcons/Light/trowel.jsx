import React from 'react';

function Trowel(props) {
	const title = props.title || "trowel";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.6 56.4L45.9 38.8c-.6-.6-1.5-.6-2.1 0l-1.5 1.5-10.5-10.4 10.5-10.4c.4-.4.5-.9.4-1.3-.1-.5-.4-.9-.9-1.1L2.1.1C1.5-.1.9 0 .4.4 0 .9-.1 1.5.1 2.1l17 39.5c.2.5.6.8 1.1.9h.3c.4 0 .8-.2 1.1-.4L29.7 32l10.5 10.4-1.4 1.4c-.3.3-.4.7-.4 1.1s.2.8.4 1.1l17.7 17.6c.3.3.7.4 1.1.4s.8-.1 1.1-.4l5-5c.3-.3.4-.7.4-1.1s-.3-.8-.5-1.1zM19 38.4L4.3 4.3l34.3 14.5L19 38.4zm38.5 22L41.9 44.9l2.9-2.9 15.5 15.5-2.8 2.9z"/>
	</g>
</svg>
	);
};

export default Trowel;