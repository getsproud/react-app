import React from 'react';

function SymbolsFemale(props) {
	const title = props.title || "symbols female";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 1.2H6C3.4 1.2 1.3 3.4 1.3 6v52c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V6c-.1-2.6-2.3-4.8-4.9-4.8zM59.3 58c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3V6c0-.7.6-1.3 1.3-1.3h52c.7 0 1.3.6 1.3 1.3v52z"/>
		<path d="M44.4 26.3C44.4 19.5 38.8 14 32 14c-6.8 0-12.4 5.5-12.4 12.4 0 6.2 4.6 11.4 10.6 12.2v3.8h-6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h6v5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5h6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6v-3.8c5.9-.9 10.6-6.1 10.6-12.3zm-21.3 0c0-4.9 4-8.9 8.9-8.9s8.9 4 8.9 8.9-4 8.9-8.9 8.9-8.9-4-8.9-8.9z"/>
	</g>
</svg>
	);
};

export default SymbolsFemale;