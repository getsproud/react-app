import React from 'react';

function MoneyEnvelope(props) {
	const title = props.title || "money envelope";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.9 22.6l-8.1-5.1c-.7-2.7-3.2-4.6-6-4.6h-1.3L32.9 4.5c-.6-.4-1.3-.4-1.9 0L17.5 13h-1.3c-2.9 0-5.3 1.9-6 4.6l-8.1 5.1c-.5.3-.8.9-.8 1.5v29.4c0 3.5 2.8 6.3 6.3 6.3h48.9c3.5 0 6.3-2.8 6.3-6.3V24.1c0-.6-.4-1.1-.9-1.5zm-2.6 5.9l-5.2 1.9v-8.6l5.2 3.2v3.5zM32 8l7.9 4.9H24.1L32 8zm-15.8 8.4h31.6c1.4 0 2.6 1 2.7 2.4v12.9l-19 7-18.2-6.6V19.2v-.3-.1c.3-1.3 1.5-2.4 2.9-2.4zm-6.3 5.5v9L4.7 29v-3.9l5.2-3.2zm46.6 34.4h-49c-1.5 0-2.8-1.3-2.8-2.8V32.7L31 42.2c.2.1.4.1.6.1.2 0 .4 0 .6-.1l27.1-10v21.3c0 1.5-1.3 2.8-2.8 2.8z"/>
		<path d="M32 33.5a6.7 6.7 0 1 0 0-13.4 6.7 6.7 0 0 0 0 13.4zm0-9.9c1.8 0 3.2 1.4 3.2 3.2S33.8 30 32 30c-1.8 0-3.2-1.4-3.2-3.2s1.4-3.2 3.2-3.2z"/>
	</g>
</svg>
	);
};

export default MoneyEnvelope;