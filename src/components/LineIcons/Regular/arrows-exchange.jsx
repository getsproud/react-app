import React from 'react';

function ArrowsExchange(props) {
	const title = props.title || "arrows exchange";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.3 19.3l-8-9.5c-.6-.7-1.7-.8-2.5-.2-.7.6-.8 1.7-.2 2.5l5.5 6.6h-38c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c.7 0 1.3-.4 1.6-1 .3-.7.2-1.4-.3-2z"/>
		<path d="M44.7 41.8H3c-.7 0-1.3.4-1.6 1-.3.6-.2 1.3.2 1.9l8 9.5c.3.4.8.6 1.3.6.4 0 .8-.1 1.1-.4.7-.6.8-1.7.2-2.5l-5.5-6.6h38c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default ArrowsExchange;