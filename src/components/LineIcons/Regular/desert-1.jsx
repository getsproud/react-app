import React from 'react';

function Desert1(props) {
	const title = props.title || "desert 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.7 54.7c-.2-.9-1.2-1.5-2.1-1.3-2.5.6-6.4.7-10.8.3v-9.6h2.5c3.2 0 5.8-2.6 5.8-5.8v-4.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v4.9c0 1.2-1 2.3-2.3 2.3h-2.5V21.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v14.3h-5.4c-1.2 0-2.3-1-2.3-2.3v-4.9c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v4.9c0 3.2 2.6 5.8 5.8 5.8H46v14.6c-2.6-.3-5.2-.7-7.8-1.2l-5.6-11.4c-1-2-3-3.2-5.2-3.2s-4.2 1.2-5.2 3.2L21 43.3 18.4 38c-1-2-3-3.2-5.2-3.2S9 36 8 38L2.8 49.4h-.2c-.9.2-1.5 1.2-1.3 2.1.2.9 1.2 1.5 2.1 1.3.1 0 10.4-2.5 19-1.2h.2c1.6.2 3.2.6 4.6 1.1 7.4 2.8 18.8 4.6 27.2 4.6 2.8 0 5.2-.2 7-.6.9-.1 1.5-1.1 1.3-2zM7.1 48.6l4.5-9.2c.4-.8 1.1-1.3 2-1.3s1.6.5 2 1.3l4.2 8.4c-4.7-.2-9.5.3-12.7.8zm16.8-.3l-.6-1.2 2.4-4.8c.4-.8 1.1-1.3 2-1.3.9 0 1.6.5 2 1.3l4.4 9c-2.1-.5-4-1.1-5.6-1.7-1.5-.6-3-1-4.6-1.3z"/>
		<path d="M11.5 21.7c4.2 0 7.6-3.4 7.6-7.6s-3.4-7.6-7.6-7.6-7.6 3.5-7.6 7.7 3.4 7.5 7.6 7.5zm0-11.6c2.3 0 4.1 1.8 4.1 4.1s-1.8 4.1-4.1 4.1-4.1-1.8-4.1-4.1 1.8-4.1 4.1-4.1z"/>
	</g>
</svg>
	);
};

export default Desert1;