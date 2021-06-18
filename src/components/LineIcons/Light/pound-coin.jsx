import React from 'react';

function PoundCoin(props) {
	const title = props.title || "pound coin";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M42.2 43.2H29.3c1-1.4 1.7-3.2 1.7-5.1v-4.6h8.7c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H31V27c0-3.4 2.4-6.2 5.3-6.2 1.3 0 2.6.6 3.6 1.6.6.6 1.5.6 2.1.1.6-.6.6-1.5.1-2.1-1.6-1.7-3.6-2.6-5.8-2.6-4.6 0-8.3 4.1-8.3 9.2v3.5h-6.1c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H28v4.6c0 2.8-2 5.1-4.4 5.1h-1.7c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h20.4c.8 0 1.5-.7 1.5-1.5s-.8-1.5-1.6-1.5z"/>
		<path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
	</g>
</svg>
	);
};

export default PoundCoin;