import React from 'react';

function RocketSearch(props) {
	const title = props.title || "rocket search";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M38.7 39.3v-.4l9.8-9.8C59.9 17.7 61 9.5 60.6 2.9c-.1-.9-.8-1.6-1.6-1.6-6.6-.4-14.8.7-26.2 12L23 23.1H11.9c-.5 0-.9.2-1.2.5l-6.8 6.8c-.3.3-.5.8-.5 1.2 0 .5.2.9.5 1.2l7.1 7.1c-.7.4-1.3.8-1.8 1.3C6.4 44 5 53.3 4.7 55.2c-.1.5.1 1.1.5 1.5.3.3.8.5 1.2.5h.2c1.8-.3 11.1-1.7 13.9-4.4.5-.5 1-1.2 1.3-1.8l7.2 7c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l1.3-1.3c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-.1.1L7.6 31.6l5-5h11.1c.5 0 .9-.2 1.2-.5l10.3-10.3c9.3-9.3 16-11.1 21.7-11.1h.3c.1 5.7-1.6 12.4-11.1 21.9L35.8 36.9c-.3.3-.5.8-.5 1.2v1.1c0 1 .8 1.8 1.8 1.8s1.6-.8 1.6-1.7zM18.1 50.2c-1.2 1.2-5.7 2.4-9.6 3.1.7-3.8 1.9-8.4 3.1-9.6.6-.6 1.2-1 2-1.2l5.7 5.7c-.2.8-.6 1.5-1.2 2z"/>
		<path d="M52.5 55.3c-.2-.2-.5-.4-.8-.4 2.2-3.2 1.9-7.6-1-10.4-1.6-1.6-3.6-2.4-5.8-2.4s-4.3.9-5.8 2.4c-3.2 3.2-3.2 8.4 0 11.6 1.5 1.6 3.6 2.4 5.8 2.4 1.7 0 3.3-.5 4.6-1.4.1.3.2.6.4.8l4.4 4.4c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5l-4.2-4.5zm-7.6-.3c-1.3 0-2.4-.5-3.3-1.4-1.8-1.8-1.8-4.8 0-6.7.9-.9 2.1-1.4 3.3-1.4s2.4.5 3.3 1.4c1.8 1.8 1.8 4.8 0 6.7-.9.9-2.1 1.4-3.3 1.4z"/>
	</g>
</svg>
	);
};

export default RocketSearch;