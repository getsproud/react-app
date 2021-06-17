import React from 'react';

function PlusMinusSymbolAlt(props) {
	const title = props.title || "plus minus symbol alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.3 25.2h-9.5v-9.5c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v9.5h-9.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h9.5v9.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-9.5h9.5c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
		<path d="M43.3 46.6H20.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h22.5c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.7-1.8z"/>
		<path d="M58 1.3H6C3.4 1.3 1.3 3.4 1.3 6v52c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V6c-.1-2.6-2.3-4.7-4.9-4.7zM59.3 58c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3V6c0-.7.6-1.3 1.3-1.3h52c.7 0 1.3.6 1.3 1.3v52z"/>
	</g>
</svg>
	);
};

export default PlusMinusSymbolAlt;