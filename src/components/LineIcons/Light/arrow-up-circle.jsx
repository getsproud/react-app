import React from 'react';

function ArrowUpCircle(props) {
	const title = props.title || "arrow up circle";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M41.2 17.9l-6.7-4.8a4.2 4.2 0 0 0-5 0l-6.7 4.8c-.7.5-.8 1.4-.3 2.1.3.4.8.6 1.2.6.3 0 .6-.1.9-.3l5.9-4.2v32.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V16.1l5.9 4.2c.7.5 1.6.3 2.1-.3.5-.7.3-1.6-.3-2.1z"/>
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
	</g>
</svg>
	);
};

export default ArrowUpCircle;