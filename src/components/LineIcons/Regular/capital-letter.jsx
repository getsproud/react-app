import React from 'react';

function CapitalLetter(props) {
	const title = props.title || "capital letter";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M7.3 26.5c.6 0 1-.4 1.2-.7l1.5-3.6h10.8l1.3 3.6c.2.6.7.7 1.2.7h3.3c1.1-.1 1.5-.9 1.2-1.7L18.9 4.2c-.2-.6-.4-.7-1-.7h-4.7c-.4 0-1 .2-1.2.7L3.1 25c-.4.7.2 1.6 1 1.6h3.2zm8-16.7l3.1 8.1h-6.3l3.2-8.1z"/>
		<path d="M36.1 7.5H61c1 0 1.8-.8 1.8-1.8S62 4 61 4H36.1c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7z"/>
		<path d="M61 22.3H36.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M61 40.5H5.4c-1 0-1.8.8-1.8 1.8S4.4 44 5.4 44H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7z"/>
		<path d="M61 58.8H5.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default CapitalLetter;