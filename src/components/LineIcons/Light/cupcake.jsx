import React from 'react';

function Cupcake(props) {
	const title = props.title || "cupcake";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.7 25.3c-.3-.4-.7-.6-1.2-.6h-6.9v-.1C55.5 11.3 44.8 0 32 0S8.5 11.3 8.5 24.6v.1h-7c-.5 0-.9.2-1.2.6-.3.4-.4.9-.2 1.4l13 36.3c.2.6.8 1 1.4 1h35c.6 0 1.2-.4 1.4-1l13-36.3c.2-.5.1-1-.2-1.4zm-52.2-.7C11.5 12.9 20.9 3 32 3s20.5 9.9 20.5 21.5v.1h-41c-.1 0 0 0 0 0zm30 36.4h-7.4V27.7h12.5L41.5 61zm-17.7 0l-5.1-33.3h12.5V61h-7.4zM3.6 27.7h12L20.7 61h-5.2L3.6 27.7zM48.5 61h-3.9l5.1-33.3h10.7L48.5 61z"/>
	</g>
</svg>
	);
};

export default Cupcake;