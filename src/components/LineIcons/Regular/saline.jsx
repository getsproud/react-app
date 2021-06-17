import React from 'react';

function Saline(props) {
	const title = props.title || "saline";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M42.7 1.3H21.3c-4.1 0-7.4 3.3-7.4 7.4v24.2c0 2.7 1.5 5.2 3.8 6.5l12.5 6.8V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V46.2l12.5-6.8c2.4-1.3 3.8-3.8 3.8-6.5V8.6c-.1-4-3.4-7.3-7.4-7.3zM21.3 4.8h21.3c2.1 0 3.9 1.7 3.9 3.9v4.9h-29v-5c0-2.1 1.7-3.8 3.8-3.8zm23.2 31.5L32 43.1l-12.5-6.9c-1.2-.7-2-2-2-3.4V17h29.1v15.9c-.1 1.4-.8 2.7-2.1 3.4z"/>
	</g>
</svg>
	);
};

export default Saline;