import React from 'react';

function Postcard(props) {
	const title = props.title || "postcard";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.5 11.1h-57c-1.9 0-3.5 1.6-3.5 3.5v34.8c0 1.9 1.6 3.5 3.5 3.5h57c1.9 0 3.5-1.6 3.5-3.5V14.6c0-1.9-1.6-3.5-3.5-3.5zm.5 38.3c0 .3-.2.5-.5.5h-57c-.3 0-.5-.2-.5-.5V14.6c0-.3.2-.5.5-.5h57c.3 0 .5.2.5.5v34.8z"/>
		<path d="M32 22.2c-.8 0-1.5.7-1.5 1.5v16.6c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V23.7c0-.8-.7-1.5-1.5-1.5z"/>
		<path d="M53.2 17.6h-9.1c-1.4 0-2.5 1.1-2.5 2.5v9.1c0 1.4 1.1 2.5 2.5 2.5h9.1c1.4 0 2.5-1.1 2.5-2.5v-9.1c0-1.3-1.1-2.5-2.5-2.5zm-.5 11.1h-8.1v-8.1h8.1v8.1z"/>
		<path d="M20.9 25H9.8c-.8 0-1.5.7-1.5 1.5S9 28 9.8 28h11.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
		<path d="M20.9 33.3H9.8c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h11.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Postcard;