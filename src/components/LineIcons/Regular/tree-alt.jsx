import React from 'react';

function TreeAlt(props) {
	const title = props.title || "tree alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52 39.2L42.8 23h.9c1.1 0 2.1-.6 2.6-1.6s.4-2.2-.3-3.1L34.3 2.4c-.6-.7-1.4-1.2-2.4-1.2s-1.8.4-2.4 1.2L17.9 18.3c-.7.9-.8 2.1-.3 3.1s1.5 1.6 2.6 1.6h1.9L12 39.1c-.6.9-.6 2.1-.1 3 .5.9 1.5 1.5 2.6 1.5h15.7V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V43.6h15.8c1.1 0 2-.5 2.5-1.5.5-.9.5-2-.1-2.9zm-36.5.9L25.6 24c.6-.9.6-2.1.1-3s-1.5-1.5-2.6-1.5h-1.8L31.9 5.1l10.6 14.3h-.7c-1.1 0-2 .5-2.5 1.5-.5.9-.5 2 0 2.9l9.3 16.3H15.5z"/>
	</g>
</svg>
	);
};

export default TreeAlt;