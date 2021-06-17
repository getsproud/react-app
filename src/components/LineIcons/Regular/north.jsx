import React from 'react';

function North(props) {
	const title = props.title || "north";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46.7 26.7L33.5 2.2c-.3-.6-.9-.9-1.5-.9s-1.2.4-1.5.9L17.3 26.7c-.5.9-.1 1.9.7 2.4.8.5 1.9.1 2.4-.7L32 6.7l11.7 21.7c.3.6.9.9 1.5.9.3 0 .6-.1.8-.2.9-.5 1.2-1.6.7-2.4z"/>
		<path d="M39.8 41.7c-1 0-1.8.8-1.8 1.8v12.9L25.5 42.3c-.5-.5-1.3-.7-1.9-.5-.7.3-1.1.9-1.1 1.6V61c0 1 .8 1.8 1.8 1.8S26 62 26 61V48.1l12.5 14.1c.3.4.8.6 1.3.6.2 0 .4 0 .6-.1.7-.3 1.1-.9 1.1-1.6V43.5c0-1-.8-1.8-1.7-1.8z"/>
	</g>
</svg>
	);
};

export default North;