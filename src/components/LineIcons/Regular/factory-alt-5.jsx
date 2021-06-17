import React from 'react';

function FactoryAlt5(props) {
	const title = props.title || "factory alt 5";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.4 21.8c-2.1-1-4.4-.7-6.2.7l-8 6.3v-1.7c0-2.3-1.3-4.3-3.3-5.3s-4.4-.7-6.2.7l-8 6.3V11.1c0-2.6-2.1-4.8-4.8-4.8H6c-2.6 0-4.8 2.1-4.8 4.8V53c0 2.6 2.1 4.8 4.8 4.8h50.9c3.2 0 5.9-2.6 5.9-5.9V27.1c0-2.3-1.3-4.3-3.4-5.3zM4.8 52.9V11.1c0-.7.6-1.3 1.3-1.3H23c.7 0 1.3.6 1.3 1.3v43.2H6c-.7-.1-1.2-.7-1.2-1.4zm22.8-19.6l10.2-8.1c.7-.6 1.7-.7 2.5-.3.8.4 1.4 1.2 1.4 2.2v27.1H27.6V33.3zm31.7 18.5c0 1.3-1.1 2.4-2.4 2.4H45.2V33.3l10.2-8.1c.7-.6 1.7-.7 2.5-.3.8.4 1.4 1.2 1.4 2.2v24.7z"/>
	</g>
</svg>
	);
};

export default FactoryAlt5;