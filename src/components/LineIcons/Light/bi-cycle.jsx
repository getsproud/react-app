import React from 'react';

function BiCycle(props) {
	const title = props.title || "bi cycle";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M11.3 37.5C5.1 37.5 0 42.5 0 48.7 0 54.9 5.1 60 11.3 60s11.3-5.1 11.3-11.3c-.1-6.2-5.1-11.2-11.3-11.2zm0 19.5C6.7 57 3 53.3 3 48.7c0-4.6 3.7-8.3 8.3-8.3s8.3 3.7 8.3 8.3c-.1 4.6-3.8 8.3-8.3 8.3z"/>
		<path d="M52.8 37.5c-6.2 0-11.2 5-11.2 11.2s5 11.2 11.2 11.2S64 54.9 64 48.7s-5-11.2-11.2-11.2zm0 19.4c-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2 8.2 3.7 8.2 8.2-3.7 8.2-8.2 8.2z"/>
		<path d="M48.2 29.8c.5.7 1.5.8 2.1.2s.8-1.5.2-2.1l-9.3-11.7-.1-.1c-.8-.8-1.9-1-2.9-.4L25.7 23c-.6.4-1.1 1-1.2 1.7-.1.7.1 1.3.6 1.8l4.2 4.8c.7.9 1.2 2 1.2 3.1v7.3c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-7.3c0-1.9-.7-3.7-1.9-5.1L28 25.1l11.3-6.6 8.9 11.3z"/>
		<path d="M50.1 15.5c3.2 0 5.7-2.6 5.7-5.7 0-3.2-2.6-5.7-5.7-5.7-3.2 0-5.7 2.6-5.7 5.7-.1 3.1 2.5 5.7 5.7 5.7zm0-8.5c1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7s-2.7-1.2-2.7-2.7c0-1.5 1.2-2.7 2.7-2.7z"/>
	</g>
</svg>
	);
};

export default BiCycle;