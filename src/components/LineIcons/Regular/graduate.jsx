import React from 'react';

function Graduate(props) {
	const title = props.title || "graduate";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.6 21.7l-29-10.5c-.4-.1-.8-.1-1.2 0l-29 10.5c-.7.3-1.2.9-1.2 1.6s.5 1.4 1.2 1.6L14 29.1v5.8c0 9.9 8.1 18 18 18s18-8.1 18-18v-5.8l7.2-2.6v11.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V25.3l.9-.3c.7-.3 1.2-.9 1.2-1.6s-.6-1.5-1.3-1.7zM46.5 34.9c0 8-6.5 14.5-14.5 14.5s-14.5-6.5-14.5-14.5v-4.5l13.9 5c.2.1.4.1.6.1s.4 0 .6-.1l13.9-5v4.5zm1.1-8.6s-.1 0 0 0L32 31.9l-15.5-5.6h-.1l-8.2-3L32 14.7l23.8 8.6-8.2 3z"/>
	</g>
</svg>
	);
};

export default Graduate;