import React from 'react';

function Badge7(props) {
	const title = props.title || "badge 7";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54.6 23.8C54.6 11.4 44.4 1.3 32 1.3 19.6 1.3 9.4 11.4 9.4 23.8c0 7.5 3.7 14.2 9.4 18.3V61c0 .6.3 1.1.7 1.4s1 .4 1.6.3L32 59.2l10.9 3.5c.2.1.4.1.5.1.4 0 .7-.1 1-.3.5-.3.7-.9.7-1.4v-19c5.8-4.1 9.5-10.8 9.5-18.3zM41.7 58.6l-9.2-2.9c-.3-.1-.7-.1-1.1 0l-9.2 2.9V44.2c2.9 1.4 6.2 2.2 9.7 2.2 3.5 0 6.8-.8 9.7-2.2v14.4zM32 42.9c-10.5 0-19.1-8.6-19.1-19.1 0-10.5 8.6-19.1 19.1-19.1 10.5 0 19.1 8.6 19.1 19.1 0 10.5-8.6 19.1-19.1 19.1z"/>
		<path d="M41.4 17.2c-2.6-2.3-6.5-2.4-9.4-.5-1.3-.9-2.8-1.4-4.4-1.4-2.2 0-4.3 1-5.8 2.6-2.6 3-2.4 7.7.5 10.6l7.2 7.2c.7.7 1.6 1 2.5 1s1.8-.3 2.5-1l7.4-7.3C43.2 27 44 25.1 44 23c0-2.2-.9-4.3-2.6-5.8zM39.3 26L32 33.3l-7.2-7.2c-1.6-1.6-1.8-4.2-.3-5.8.8-.9 2-1.4 3.2-1.4 1.1 0 2.2.4 2.9 1.2l.2.2c.3.3.8.5 1.3.5s.9-.2 1.3-.5c1.6-1.6 4.2-1.8 5.8-.3.9.8 1.4 2 1.4 3.2-.1.9-.5 2-1.3 2.8z"/>
	</g>
</svg>
	);
};

export default Badge7;