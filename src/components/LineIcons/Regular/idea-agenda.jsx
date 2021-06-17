import React from 'react';

function IdeaAgenda(props) {
	const title = props.title || "idea agenda";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32.3 26.2c-3-.1-5.9 1.1-8.1 3.2-2.2 2.1-3.4 5-3.4 8 0 3.9 2 7.4 5.3 9.5.4.2.6.7.6 1.2v1.8c0 2.7 2.2 4.9 4.9 4.9h1c2.7 0 4.9-2.2 4.9-4.9V48c0-.2.1-.4.2-.6.1-.2.2-.3.4-.5 3.2-2 5.1-5.4 5.2-9.2.1-3-1-5.8-3.1-8-2.2-2.2-5-3.5-7.9-3.5zm.2 24.9h-1c-.8 0-1.4-.6-1.4-1.4v-1.5h3.7v1.5c0 .8-.6 1.4-1.3 1.4zm3.6-7.3c-.4.2-.7.6-1 .9H29c-.3-.3-.6-.7-1-.9-2.3-1.4-3.6-3.9-3.6-6.5 0-2.1.8-4 2.3-5.5 1.4-1.4 3.3-2.2 5.4-2.2h.2c2 0 3.9.9 5.3 2.4s2.2 3.5 2.1 5.5c-.1 2.6-1.4 5-3.6 6.3z"/>
		<path d="M58 7.4h-9.8V4.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v3.4H19.3V4.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v3.4H6c-2.6 0-4.8 2.1-4.8 4.8V57c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V12.2c0-2.6-2.2-4.8-4.8-4.8zM6 10.9h9.8v1.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-1.5h25.5v1.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-1.5H58c.7 0 1.3.6 1.3 1.3v7.3H4.8v-7.3c0-.7.5-1.3 1.2-1.3zm52 47.3H6c-.7 0-1.3-.6-1.3-1.3V23h54.5v33.9c.1.7-.5 1.3-1.2 1.3z"/>
	</g>
</svg>
	);
};

export default IdeaAgenda;