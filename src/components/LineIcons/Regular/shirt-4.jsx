import React from 'react';

function Shirt4(props) {
	const title = props.title || "shirt 4";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53 26.7l-9.5-12.3V3c0-1-.8-1.8-1.8-1.8S40 2 40 3v11.5l-8 10.4-8.1-10.6V3c0-1-.8-1.8-1.8-1.8S20.4 2 20.4 3v11.5L11 26.7c-.2.3-.4.7-.4 1.1v32.5c0 .9.7 1.7 1.6 1.7 5.8.5 12.6.7 19.7.7s14-.3 19.7-.7c.9-.1 1.6-.8 1.6-1.7V27.7c.1-.4 0-.7-.2-1zm-3.2 31.9c-5.3.4-11.4.6-17.8.6s-12.5-.2-17.8-.6V28.3l8-10.5 8.4 10.9c.7.9 2.1.9 2.8 0l8.4-10.9 8 10.5v30.3z"/>
	</g>
</svg>
	);
};

export default Shirt4;