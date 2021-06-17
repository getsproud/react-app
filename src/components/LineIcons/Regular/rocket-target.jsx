import React from 'react';

function RocketTarget(props) {
	const title = props.title || "rocket target";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M30 35.3v-.1l7.6-7.6c7.2-7.2 10.1-13.5 9.6-21-.1-.9-.8-1.6-1.6-1.6-7.5-.5-13.8 2.4-21 9.6L17 22.2H8.4c-.5 0-.9.2-1.2.5L1.8 28c-.3.3-.5.8-.5 1.2 0 .5.2.9.5 1.2L7 35.8c-.4.3-.8.5-1.1.9-2.2 2.2-3.3 9.1-3.6 11.2-.1.5.1 1.1.5 1.5.3.3.8.5 1.2.5h.2c2.1-.3 9-1.4 11.2-3.6.3-.3.6-.7.9-1.1l5.3 5.3c.3.3.8.5 1.2.5.4 0 .9-.2 1.2-.5l1-1c.7-.7.7-1.8 0-2.5-.6-.6-1.6-.7-2.3-.2L5.5 29.3l3.6-3.6h8.6c.5 0 .9-.2 1.2-.5l8.1-8.1c7.2-7.2 12.3-8.6 16.7-8.7 0 4.4-1.5 9.5-8.7 16.7l-8 8.1c-.3.3-.5.8-.5 1.2v.9c0 1 .8 1.8 1.8 1.8s1.7-.8 1.7-1.8zm-17 8.4c-.8.8-3.8 1.6-6.9 2.2.6-3.1 1.5-6.1 2.2-6.8.3-.3.8-.6 1.2-.8l4.2 4.2c-.1.5-.3.9-.7 1.2z"/>
		<path d="M50.6 45.6c-1 0-1.8.8-1.8 1.8 0 4.5-3.7 8.2-8.2 8.2s-8.2-3.7-8.2-8.2c0-4.5 3.7-8.2 8.2-8.2.8 0 1.6.1 2.4.3.9.3 1.9-.3 2.2-1.2.3-.9-.3-1.9-1.2-2.2-1.1-.3-2.2-.5-3.4-.5-6.5 0-11.7 5.3-11.7 11.7S34.2 59 40.6 59s11.7-5.3 11.7-11.7c.1-.9-.7-1.7-1.7-1.7z"/>
		<path d="M61 33.5h-4.6v-4.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v5L40.5 45.2c-.7.6-.8 1.7-.2 2.5.3.4.8.6 1.3.6.4 0 .8-.1 1.2-.4L55.2 37H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
		<path d="M36.6 45.6c-1 0-1.8.8-1.8 1.8 0 3.2 2.6 5.8 5.8 5.8 1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8c-1.2 0-2.3-1-2.3-2.3.1-.9-.7-1.7-1.7-1.7z"/>
	</g>
</svg>
	);
};

export default RocketTarget;