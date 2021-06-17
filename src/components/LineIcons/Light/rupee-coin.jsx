import React from 'react';

function RupeeCoin(props) {
	const title = props.title || "rupee coin";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M44.7 15.2H28h-8.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h8.9c2.6.1 4.3 2.1 4.9 4.6H21.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h11.4c-.8 2.8-5.4 5.4-8.9 5.4-.6 0-1.1.3-1.4.9-.2.5-.2 1.1.2 1.6L35 48.2c.3.4.7.5 1.2.5.3 0 .7-.1 1-.3.6-.5.7-1.5.2-2.1L27.2 33.9c4.1-1 8.6-4 9.1-8.1h5.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6c-.3-1.8-1-3.4-2-4.6h10.5c.8 0 1.5-.7 1.5-1.5.1-.8-.6-1.5-1.4-1.5z"/>
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
	</g>
</svg>
	);
};

export default RupeeCoin;