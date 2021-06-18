import React from 'react';

function IdeaPresentation(props) {
	const title = props.title || "idea presentation";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M26.1 38.2c.4.2.6.7.6 1.2v1.8c0 2.7 2.2 4.9 4.9 4.9h1c2.7 0 4.9-2.2 4.9-4.9v-1.9c0-.2.1-.4.2-.6.1-.2.2-.3.4-.5 3.2-2 5.1-5.4 5.3-9.2.1-3-1-5.8-3.1-8s-4.8-3.4-7.8-3.5c-3-.1-5.9 1.1-8.1 3.2-2.2 2.1-3.4 5-3.4 8-.2 3.9 1.8 7.5 5.1 9.5zm6.4 4.4h-1c-.8 0-1.4-.6-1.4-1.4v-1.6h3.7v1.6c0 .8-.6 1.4-1.3 1.4zm-5.9-19.4C28.1 21.8 30 21 32 21h.2c2 0 3.9.9 5.3 2.4s2.2 3.5 2.1 5.5c-.1 2.6-1.4 4.9-3.6 6.3-.4.2-.7.6-1 .9h-6c-.3-.3-.6-.7-1-.9-2.3-1.4-3.6-3.9-3.6-6.5-.1-2.1.7-4 2.2-5.5z"/>
		<path d="M57.2 1.3H6.8C4.2 1.3 2.1 3.4 2.1 6v2.4c0 2.5 2 4.6 4.5 4.7v33.5c0 4.8 3.9 8.7 8.7 8.7h15V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.6h15c4.8 0 8.7-3.9 8.7-8.7V13.1c2.5-.2 4.5-2.2 4.5-4.7V6c-.2-2.6-2.3-4.7-4.9-4.7zm-3.3 45.4c0 2.9-2.3 5.2-5.2 5.2H15.3c-2.9 0-5.2-2.3-5.2-5.2V13.1H54v33.6zm4.5-38.3c0 .7-.6 1.3-1.3 1.3H6.8c-.7 0-1.3-.6-1.3-1.3V6c0-.7.6-1.3 1.3-1.3h50.3c.7 0 1.3.6 1.3 1.3v2.4z"/>
	</g>
</svg>
	);
};

export default IdeaPresentation;