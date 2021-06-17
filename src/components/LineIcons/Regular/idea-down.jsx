import React from 'react';

function IdeaDown(props) {
	const title = props.title || "idea down";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M25.7 23.7c.4.3.7.8.7 1.4V27c0 2.8 2.3 5.1 5.1 5.1h1c2.8 0 5.1-2.3 5.1-5.1v-2c0-.3.1-.5.2-.7.1-.2.3-.4.5-.5 3.4-2.1 5.5-5.7 5.6-9.7.1-3.1-1.1-6.1-3.3-8.5-2.2-2.3-5.1-3.6-8.3-3.7-3.2-.1-6.3 1.1-8.6 3.4-2.3 2.2-3.6 5.3-3.6 8.5.1 4 2.1 7.7 5.6 9.9zm6.8 4.9h-1c-.9 0-1.6-.7-1.6-1.6v-1.8h4.2V27c0 .9-.7 1.6-1.6 1.6zM26.2 7.7c1.6-1.5 3.6-2.4 5.8-2.4h.2c2.2.1 4.2 1 5.8 2.6 1.6 1.6 2.4 3.8 2.3 6-.1 2.8-1.5 5.4-3.9 6.8-.4.3-.8.6-1.1 1h-6.6c-.3-.4-.7-.7-1.1-1-2.5-1.5-3.9-4.2-3.9-7.1 0-2.2.8-4.3 2.5-5.9z"/>
		<path d="M62.5 58.7c0-.1.1-.1.1-.2 0 0 0-.1.1-.1 0-.1 0-.1.1-.2V58v-.2-.2-.2-.2-.1l-2.8-10c-.2-.9-1.2-1.5-2.1-1.3-.9.2-1.5 1.2-1.3 2.1l1.4 5.5-19.7-14c-2.6-1.9-6.2-1.4-8.3 1l-7 8.3c-.9 1.1-2.6 1.2-3.7.4L4.1 37.2c-.8-.6-1.9-.5-2.5.3-.6.8-.4 1.9.3 2.5l15.2 11.8c2.6 2 6.3 1.7 8.5-.8l7.1-8.2c.9-1.1 2.5-1.2 3.6-.4L56.9 57l-6.7 1.7c-.9.2-1.5 1.2-1.3 2.1.2.8.9 1.3 1.7 1.3.1 0 .3 0 .4-.1l10.3-2.7c.1 0 .2-.1.3-.1.1-.1.2-.1.3-.2l.1-.1.2-.2c.2.1.2.1.3 0-.1 0-.1 0 0 0z"/>
	</g>
</svg>
	);
};

export default IdeaDown;