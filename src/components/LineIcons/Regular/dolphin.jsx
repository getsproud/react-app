import React from 'react';

function Dolphin(props) {
	const title = props.title || "dolphin";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M4.4 59c-1.1 0-2-.4-2.5-1.1-.6-.8-.6-1.7-.6-2.1 0-3.3 1.3-6.6 3.5-9l.2-.2c.7-1 1-1.4 1-1.9s-.1-1.1-.2-1.6c-.1-.7-.2-1.4-.2-2.2-.1-2.8.2-5.5.8-8.1 1.2-5.3 3.9-10.2 7.6-13.9 1.1-1.1 2.5-2.5 2.2-3.5-.1-.5-.7-1-1.3-1.6l-.6-.6c-1.8-1.7-2.4-3.9-1.4-5.6.8-1.3 2.1-1.8 3.1-2.1 3.8-1 7.9-.7 11.4 1 .2.1.4.2.7.3.6.3 1.2.6 1.7.7.8.2 1.7 0 2.8-.1l.4-.1c4.8-.7 9.8-.4 14.5.8 3.8 1 6.6 2.5 8.6 4.7.5.6 1 1.2 1.4 1.8.6.7 1.1 1.4 1.7 2 .2.2.5.4.8.6l.2.2c.5.4 1.1.9 1.6 1.5 1 1.2 1.3 2.9 1 4.5-.3 1.7-1.3 3.1-2.6 3.8-1.6.9-3.4 1-5 1H55c-4.2 0-8.4.5-12.5 1.5-.9.2-1.8.5-2.4.9-.5.4-.9.9-1.3 1.5-.2.3-.4.5-.6.8-2.5 3.2-6.5 5.2-10.6 5.3-1.8 0-3.1-.5-3.8-1.6-.7-1.1-.7-2.4-.1-3.8-.4.2-.8.5-1.1.7-1.6 1.1-2.8 2.6-3.7 4.2-.3.7-1.4 3-.3 4.6.4.6 1.1 1.1 1.8 1.7.4.3.9.7 1.3 1.1 2.3 2.1 3.6 5.4 3.3 8.6-.1 1.6-.7 2.8-1.7 3.5-1.4 1.1-3.5 1.1-5.5-.1-.4-.2-.8-.5-1.2-.8-.6-.4-1.1-.8-1.6-1-1-.3-2.3 0-4 1-.3.2-.6.3-.9.5-1.4.9-3 1.8-4.9 2.1-.4.1-.6.1-.8.1zM20.2 8.5c-1.2 0-2.3.1-3.4.4-.8.2-1 .4-1 .4 0 .1.1.7.8 1.3.2.2.4.3.5.5.9.8 2 1.8 2.4 3.3.8 2.9-1.6 5.3-3.1 6.8-3.2 3.2-5.6 7.5-6.6 12.2-.5 2.3-.8 4.8-.7 7.3 0 .6.1 1.3.2 1.9.1.6.1 1.2.2 1.8.1 2.1-1.1 3.3-2 4.4l-.2.2c-1.6 1.7-2.5 4.1-2.6 6.4 1.1-.2 2.3-.9 3.4-1.6.3-.2.6-.4 1-.6 2.6-1.5 4.9-1.9 6.9-1.3 1 .3 1.9.9 2.6 1.5.3.2.6.5.9.6.7.4 1.3.5 1.5.3.1-.1.3-.4.3-1.1.2-2.1-.6-4.3-2.2-5.7-.3-.3-.7-.6-1.1-.9-.9-.7-1.9-1.5-2.6-2.6-1.4-2.2-1.3-5.1.2-8.1 1.1-2.2 2.7-4.1 4.8-5.5 1.3-1 3.2-2.1 5.3-2.5.9-.2 2.1-.4 2.9.6.4.5.7 1.3.2 2.6-.3.8-.9 1.4-1.4 1.9-.1.1-.2.3-.4.4-.3.4-.5.7-.5.9.1 0 .4.1.8.1 3-.1 6-1.6 7.9-3.9.2-.2.3-.4.5-.7.5-.7 1.1-1.6 2-2.2 1.2-.9 2.5-1.3 3.7-1.5 4.3-1 8.8-1.6 13.2-1.6h.2c1.2 0 2.4 0 3.2-.5.5-.3.8-.8 1-1.5.1-.7 0-1.3-.3-1.7-.2-.3-.6-.6-1-.9l-.2-.1c-.3-.2-.6-.5-.9-.8-.9-.8-1.5-1.6-2.1-2.5L53.3 15c-1.5-1.6-3.8-2.8-6.9-3.7-4.2-1.1-8.7-1.4-13.1-.7l-.3.3c-1.2.2-2.6.4-4 .1-.9-.2-1.8-.6-2.5-1l-.6-.3c-1.8-.8-3.7-1.2-5.7-1.2z"/>
	</g>
</svg>
	);
};

export default Dolphin;