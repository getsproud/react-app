import React from 'react';

function ArrowsExchangeAlt(props) {
	const title = props.title || "arrows exchange alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46.5 20.5c0-1-.8-1.8-1.8-1.8h-38l5.5-6.6c.6-.7.5-1.8-.2-2.5-.7-.6-1.8-.5-2.4.3l-8 9.5c-.4.5-.5 1.2-.2 1.9.3.6.9 1 1.6 1h41.7c1-.1 1.8-.9 1.8-1.8z"/>
		<path d="M62.6 42.8c-.3-.6-.9-1-1.6-1H19.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h38L51.8 52c-.6.7-.5 1.8.2 2.5.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6l8-9.5c.4-.7.5-1.4.2-2z"/>
	</g>
</svg>
	);
};

export default ArrowsExchangeAlt;