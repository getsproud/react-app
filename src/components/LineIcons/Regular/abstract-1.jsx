import React from 'react';

function Abstract1(props) {
	const title = props.title || "abstract 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 14.8L34.4 1.7a5.1 5.1 0 0 0-4.8 0L7 14.8c-1.5.8-2.4 2.4-2.4 4.1v26.2c0 1.7.9 3.3 2.4 4.1l22.7 13.1c.7.4 1.6.6 2.4.6.8 0 1.6-.2 2.4-.6L57 49.2c1.5-.8 2.4-2.4 2.4-4.1V18.9c0-1.7-.9-3.3-2.4-4.1zm-48.3 3L31.4 4.7c.2-.1.4-.2.6-.2s.4.1.6.2l21.1 12.2L42 24c-.3-.3-.6-.5-1-.7l-6-3.6c-1.8-1.1-4.1-1.1-5.9 0L23 23.3c-1.8 1-2.9 3-2.9 5v7.3c0 .4.1.8.1 1.2L8.1 43.9v-25c0-.4.2-.8.6-1.1zm16.1 19.9c-.7-.4-1.2-1.2-1.2-2v-7.3c0-.8.4-1.6 1.2-2l6.1-3.6c.4-.2.8-.3 1.2-.3s.8.1 1.2.3l6.1 3.6c.7.4 1.2 1.2 1.2 2v7.3c0 .8-.4 1.6-1.2 2l-6.1 3.6c-.7.4-1.7.4-2.4 0l-6.1-3.6zm30.5 8.5L32.6 59.3c-.4.2-.9.2-1.3 0L9.9 46.8 22 39.9c.3.3.6.5 1 .8l6.1 3.6c.9.5 1.9.8 3 .8s2.1-.3 3-.8l6.1-3.6c1.8-1 2.9-3 2.9-5v-7.3c0-.4-.1-.9-.2-1.3l12.2-7.3v25.4c-.2.3-.4.7-.8 1z"/>
	</g>
</svg>
	);
};

export default Abstract1;