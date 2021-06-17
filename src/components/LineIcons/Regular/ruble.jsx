import React from 'react';

function Ruble(props) {
	const title = props.title || "ruble";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
		<path d="M37.7 16.7h-8c-1 0-1.8.8-1.8 1.8v17.3h-6.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h6.4v6.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-6.3h6.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6.4v-6.1h6.3c3.6 0 6.5-2.9 6.5-6.5s-3-6.5-6.6-6.5zm0 9.4h-6.3v-5.9h6.3c1.6 0 3 1.3 3 3s-1.3 2.9-3 2.9z"/>
	</g>
</svg>
	);
};

export default Ruble;