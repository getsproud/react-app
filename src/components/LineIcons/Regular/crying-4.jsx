import React from 'react';

function Crying4(props) {
	const title = props.title || "crying 4";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46.4 17.2h-10c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.3v8.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-8.7h3.3c1 0 1.8-.8 1.8-1.8s-1.1-1.8-2-1.8z"/>
		<path d="M20.9 29.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-8.7h3.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-10c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h3.3v8.7z"/>
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M40.9 42.9H22.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h18.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Crying4;