import React from 'react';

function Chair1(props) {
	const title = props.title || "chair 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.2 41.9c0-.1-.1-.2-.1-.3l-5.4-12.8V3c0-1-.8-1.8-1.8-1.8S42.1 2 42.1 3v3H21.9V3c0-1-.8-1.8-1.8-1.8S18.4 2 18.4 3v25.8L13 41.6c0 .1-.1.2-.1.3V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V44h5.8v10.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V44h10.5v10.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V44h8.1v17c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V42.3c-.5-.2-.5-.3-.5-.4zm-34-1.4l4.1-9.6h21.5l4.1 9.6H17.2zm24.9-13.1H21.9v-6.7h20.3v6.7zm0-17.9v7.7H21.9V9.5h20.2z"/>
	</g>
</svg>
	);
};

export default Chair1;