import React from 'react';

function Wallet(props) {
	const title = props.title || "wallet";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.9 21.8h-2.4V9.1c0-1-.5-2-1.3-2.6-.8-.6-1.8-.8-2.8-.5L2.2 21.7c-.4.1-.8.3-1.1.6-.7.6-1.1 1.4-1.1 2.4v30.2C0 56.6 1.4 58 3.1 58h57.8c1.7 0 3.1-1.4 3.1-3.2V25c0-1.8-1.4-3.2-3.1-3.2zM55.3 9h.1l.1.1v12.6h-43L55.3 9zm5.6 46H3.1s-.1 0-.1-.1V24.8h57.9s.1.1.1.2v7.9H47.4c-3.9 0-7 3.2-7 7s3.2 7 7 7H61v7.9c0 .2-.1.2-.1.2zm.1-19.1V44H47.4c-2.2 0-4-1.8-4-4s1.8-4 4-4H61z"/>
	</g>
</svg>
	);
};

export default Wallet;