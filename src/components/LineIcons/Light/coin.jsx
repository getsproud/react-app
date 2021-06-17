import React from 'react';

function Coin(props) {
	const title = props.title || "coin";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M36.2 30.5h-7.8c-2.8 0-5.1-2.2-5.1-4.9s2.3-4.9 5.1-4.9h11.2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.1v-3.6c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v3.6h-2.1c-4.5 0-8.1 3.5-8.1 7.9s3.6 7.9 8.1 7.9h7.8c2.8 0 5.1 2.2 5.1 4.9s-2.3 4.9-5.1 4.9H24.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h6.1v3.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-3.6h2.7c4.5 0 8.1-3.5 8.1-7.9s-3.7-7.9-8.1-7.9z"/>
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
	</g>
</svg>
	);
};

export default Coin;