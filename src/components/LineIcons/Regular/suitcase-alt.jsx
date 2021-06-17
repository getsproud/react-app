import React from 'react';

function SuitcaseAlt(props) {
	const title = props.title || "suitcase alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M44.1 14.7h-2.3V8.6c0-4-3.3-7.3-7.3-7.3h-4.9c-4 0-7.3 3.3-7.3 7.3v6.1H20c-3.2 0-5.8 2.6-5.8 5.8V50c0 3 2.4 5.5 5.4 5.7V61c0 1 .8 1.8 1.8 1.8S23 62 23 61v-5.3h18V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.3c3-.2 5.4-2.7 5.4-5.7V20.4c-.2-3.2-2.7-5.7-5.9-5.7zM25.7 8.6c0-2.1 1.7-3.8 3.8-3.8h4.9c2.1 0 3.8 1.7 3.8 3.8v6.1H25.7V8.6zM46.3 50c0 1.2-1 2.3-2.3 2.3H19.9c-1.2 0-2.3-1-2.3-2.3V20.4c0-1.2 1-2.3 2.3-2.3h24.2c1.2 0 2.3 1 2.3 2.3V50z"/>
		<path d="M37.4 24.1H26.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h10.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.7-1.8z"/>
	</g>
</svg>
	);
};

export default SuitcaseAlt;