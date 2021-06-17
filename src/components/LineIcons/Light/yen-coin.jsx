import React from 'react';

function YenCoin(props) {
	const title = props.title || "yen coin";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.6 14.8c-.7-.5-1.6-.4-2.1.3l-9.4 12.7H32h-.1l-9.4-12.7c-.5-.7-1.4-.8-2.1-.3-.7.5-.8 1.4-.3 2.1l10.4 14v2.2H24c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h6.5v5H24c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h6.5v6.5c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-6.5H40c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.5v-5H40c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-6.5v-2.2l10.4-14c.5-.7.3-1.6-.3-2.1z"/>
		<path d="M32 0C14.4 0 0 14.4 0 32s14.3 32 32 32 32-14.3 32-32S49.6 0 32 0zm0 61C16 61 3 48 3 32S16 3 32 3s29 13 29 29-13 29-29 29z"/>
	</g>
</svg>
	);
};

export default YenCoin;