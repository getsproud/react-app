import React from 'react';

function MoshjidLocation(props) {
	const title = props.title || "moshjid location";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 32.9c.4 0 .9-.2 1.2-.5l2.6-2.6h2c1 0 1.8-.8 1.8-1.8v-2l2.6-2.6c.3-.3.5-.8.5-1.2s-.2-.9-.5-1.2l-2.6-2.6v-2c0-1-.8-1.8-1.8-1.8h-2L33.2 12c-.7-.7-1.8-.7-2.5 0l-2.6 2.6h-2c-1 0-1.8.8-1.8 1.8v2L21.7 21c-.7.7-.7 1.8 0 2.5l2.6 2.6v2c0 1 .8 1.8 1.8 1.8h2l2.6 2.6c.4.3.9.4 1.3.4zm-3.1-6.5h-1v-1c0-.5-.2-.9-.5-1.2l-1.8-1.8 1.8-1.8c.3-.3.5-.8.5-1.2v-1h1c.5 0 .9-.2 1.2-.5l1.8-1.8 1.8 1.8c.3.3.8.5 1.2.5h1v1c0 .5.2.9.5 1.2l1.8 1.8-1.8 1.8c-.3.3-.5.8-.5 1.2v1h-1c-.5 0-.9.2-1.2.5L32 28.7l-1.8-1.8c-.4-.3-.8-.5-1.3-.5z"/>
		<path d="M57.5 57.7l-5.3-8.5c-.6-1-1.7-1.6-2.8-1.6H37.8c6.3-6.3 15.3-16.7 15.3-25.3 0-11.6-9.5-21.1-21.1-21.1-11.6 0-21.1 9.5-21.1 21.1 0 8.6 9 19 15.3 25.3H14.6c-1.2 0-2.2.6-2.8 1.6l-5.3 8.5c-.6 1-.7 2.3-.1 3.4s1.7 1.7 2.9 1.7h45.4c1.2 0 2.3-.7 2.9-1.7.6-1.1.5-2.4-.1-3.4zM14.4 22.3c0-9.7 7.9-17.6 17.6-17.6 9.7 0 17.6 7.9 17.6 17.6 0 7.4-8.9 18.1-17.6 26-8.7-7.9-17.6-18.6-17.6-26zm-4.8 37l5.1-8.1h15.1c.4.3.7.6 1 .9.3.3.7.4 1.2.4.4 0 .8-.1 1.2-.4.3-.3.6-.6 1-.9h15.1l5.1 8.1H9.6z"/>
	</g>
</svg>
	);
};

export default MoshjidLocation;