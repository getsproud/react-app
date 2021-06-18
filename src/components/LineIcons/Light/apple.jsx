import React from 'react';

function Apple(props) {
	const title = props.title || "apple";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55 48.3c-1.6-.9-3-2.2-4.2-3.9-1.7-2.5-2.5-5.2-2.5-8.1 0-2.7.8-5.1 2.3-7.4.7-.9 1.6-2 2.7-3 .3-.3.5-.7.5-1.1 0-.4-.2-.8-.4-1.1-.8-.8-1.6-1.5-2.3-2-2.1-1.5-4.5-2.2-7.3-2.2-1.7 0-3.7.4-6 1.2-2.3.8-4 1.2-5.1 1.2-.4 0-1.5 0-5-1-2.5-.7-4.5-1-6.1-1-3.9 0-7 1.6-9.6 4.9-2.6 3.3-3.9 7.6-3.9 12.9 0 5.5 1.7 11.3 5.2 17.5C16.8 61 20.2 64 23.6 64c1.2 0 2.7-.4 4.5-1.1 1.9-.8 3.6-1.2 5.1-1.2 1.6 0 3.4.4 5.5 1.2 2.1.7 3.7 1.1 4.8 1.1 2.8 0 5.7-2.3 8.7-6.7 1.6-2.3 2.8-4.6 3.7-7.1.1-.7-.2-1.5-.9-1.9zm-5.4 7.2c-3.1 4.7-5.2 5.4-6.2 5.4-.2 0-1.2 0-3.7-.9-2.4-.9-4.5-1.3-6.5-1.3-1.9 0-4 .5-6.3 1.4-1.4.6-2.5.9-3.3.9-2.1 0-4.9-2.7-7.6-7.3-3.2-5.6-4.8-11-4.8-16 0-4.6 1.1-8.3 3.3-11 2-2.6 4.3-3.8 7.3-3.8 1.3 0 3.1.3 5.3.9 3.4 1 4.8 1.2 5.8 1.2 1.5 0 3.4-.4 6.1-1.4 2-.7 3.6-1 5-1 2.1 0 3.9.5 5.5 1.7.2.2.5.4.8.6-.8.8-1.4 1.6-2 2.4-1.9 2.8-2.9 5.9-2.9 9.2 0 3.5 1 6.8 3 9.8 1.2 1.7 2.6 3.1 4.1 4.2-.8 1.6-1.7 3.3-2.9 5z"/>
		<path d="M32.9 15.4c.2 0 .4 0 .7-.1 2.3-.4 5.5-1.3 7.7-3.2 2.2-2.1 3.1-5.6 3.4-8.2.2-1.1-.2-2.2-1-3-.8-.8-1.9-1.1-3-1-2.5.4-5.9 1.3-8.1 3.4-1.3 1.3-2.3 3.9-3.1 7.8-.2 1.1.1 2.3.9 3.1.7.8 1.6 1.2 2.5 1.2zm1.8-9.8C36 4.4 38.3 3.5 41.2 3c.2 0 .3.1.4.1.1.1.2.2.1.4-.4 2.9-1.3 5.2-2.5 6.3-1.6 1.5-4.2 2.2-6.2 2.6-.2 0-.4-.1-.5-.1-.1-.1-.2-.2-.1-.4.7-3.2 1.5-5.6 2.3-6.3z"/>
	</g>
</svg>
	);
};

export default Apple;