import React from 'react';

function Silverware(props) {
	const title = props.title || "silverware";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M16.6 0C9.4 0 4.1 10.3 4.1 19.6c0 4.4 3.8 8 8.4 8h2.9v34.9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V27.6h2.2c4.6 0 8.4-3.6 8.4-8C29 10.3 23.7 0 16.6 0zm4 24.6h-8.1c-3 0-5.4-2.2-5.4-5C7.1 11.4 11.9 3 16.6 3s9.5 8.4 9.5 16.6c-.1 2.8-2.5 5-5.5 5z"/>
		<path d="M58.4.8c-.8 0-1.5.7-1.5 1.5v16.3c0 3.8-3.2 6.9-7.1 7V2.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v23.4c-3.9-.1-7.1-3.2-7.1-7V2.3c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v16.3c0 5.5 4.5 9.9 10.1 10v33.9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V28.6c5.6-.1 10.1-4.6 10.1-10V2.3c0-.9-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Silverware;