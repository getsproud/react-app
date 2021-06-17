import React from 'react';

function SquareMedical(props) {
	const title = props.title || "square medical";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 1.2H6C3.4 1.2 1.3 3.4 1.3 6v52c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V6c-.1-2.6-2.3-4.8-4.9-4.8zM59.3 58c0 .7-.6 1.3-1.3 1.3H6c-.7 0-1.3-.6-1.3-1.3V6c0-.7.6-1.3 1.3-1.3h52c.7 0 1.3.6 1.3 1.3v52z"/>
		<path d="M42.1 30.2h-8.4v-8.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v8.4h-8.4c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7h8.4v8.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-8.4h8.4c1 0 1.8-.8 1.8-1.7s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default SquareMedical;