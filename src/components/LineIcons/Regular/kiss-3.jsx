import React from 'react';

function Kiss3(props) {
	const title = props.title || "kiss 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M35.9 38.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c.8 0 1.4.5 1.4.9s-.6.9-1.4.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c.8 0 1.4.5 1.4.9s-.6.9-1.4.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c2.7 0 4.9-2 4.9-4.4 0-1-.4-1.9-1-2.6.6-.7 1-1.6 1-2.6 0-2.8-2.2-4.8-4.9-4.8z"/>
		<path d="M32 1.3C15 1.3 1.2 15 1.2 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.7 47 4.7 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M21.4 19.3c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.5-3.5-3.5-3.5z"/>
		<path d="M42.6 19.3c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5z"/>
	</g>
</svg>
	);
};

export default Kiss3;