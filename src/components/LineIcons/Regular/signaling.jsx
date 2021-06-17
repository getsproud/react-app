import React from 'react';

function Signaling(props) {
	const title = props.title || "signaling";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58c-2.3 0-4.5-.3-6.6-.8V49l7.7-5.5c.5-.3.7-.9.7-1.4V20l5.4 5.4c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.7-.7.7-1.8 0-2.5l-8.4-8.4c-.7-.7-1.8-.7-2.5 0L22.4 23c-.7.7-.7 1.8 0 2.5s1.8.7 2.5 0l5.4-5.4v21.2l-4.9 3.5v-6c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v18.6c-10-4-17.1-13.8-17.1-25.3C4.8 17 17 4.8 32 4.8S59.3 17 59.3 32 47 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default Signaling;