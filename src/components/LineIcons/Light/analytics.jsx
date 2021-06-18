import React from 'react';

function Analytics(props) {
	const title = props.title || "analytics";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.5 61.4l-18-18h-.1c9.1-10.2 8.8-25.9-1-35.7C39.5 2.7 33 0 26 0 19.1 0 12.6 2.7 7.7 7.7 2.7 12.6 0 19.1 0 26c0 7 2.7 13.5 7.7 18.4 5 5.1 11.7 7.6 18.3 7.6 6.2 0 12.4-2.2 17.3-6.6v.1l18 18c.3.3.7.4 1.1.4s.8-.1 1.1-.4c.6-.6.6-1.5 0-2.1zM9.8 42.3C5.4 38 3 32.2 3 26S5.4 14.1 9.8 9.8 19.9 3 26 3s12 2.4 16.3 6.8c9 9 9 23.6 0 32.5-9 9-23.5 9-32.5 0z"/>
		<path d="M23.5 12.7c-4.7-.1-7.1 4-7.7 6.3-.2.8.3 1.6 1 1.8.1 0 .3.1.4.1.7 0 1.3-.4 1.4-1.1 0-.2 1.3-4.1 4.7-4.1.8.1 1.5-.6 1.5-1.5.2-.8-.5-1.5-1.3-1.5z"/>
		<path d="M38.1 18.9s-4.2-1.2-4-4.7c0-.8-.6-1.5-1.5-1.5-.8-.1-1.5.6-1.5 1.5-.1 4.7 4 7.1 6.3 7.7.1 0 .3.1.4.1.7 0 1.3-.4 1.4-1.1.2-.9-.3-1.7-1.1-2z"/>
		<path d="M11.5 30c-.7.4-1 1.3-.6 2s1.3 1 2 .6c.2-.1 3.8-2.1 6.2.5.3.3.7.5 1.1.5.4 0 .7-.1 1-.4.6-.6.6-1.5.1-2.1-3.1-3.5-7.8-2.3-9.8-1.1z"/>
		<path d="M36.6 34c-.8-.2-1.6.3-1.8 1.1 0 0-1.1 4.1-4.6 4.1h-.1c-.8 0-1.5.6-1.5 1.5 0 .8.6 1.5 1.5 1.5h.2c4.6 0 6.9-4.1 7.5-6.3 0-.9-.4-1.7-1.2-1.9z"/>
	</g>
</svg>
	);
};

export default Analytics;