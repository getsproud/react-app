import React from 'react';

function Height(props) {
	const title = props.title || "height";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.8 49.1l-15.1-36c-.4-1-.8-1.2-1.8-1.2h-8.1c-.8 0-1.3 0-2 1.2L21.7 49.4c-.7 1.2.3 2.7 1.8 2.7h5.3c1 0 1.8-.8 2-1.2l2.6-6.4H52l2.3 6.4c.3 1 1.2 1.2 2 1.2h5.6c1.8-.1 2.5-1.5 1.9-3zm-26.6-12L42.7 23 48 37.1H37.2z"/>
		<path d="M11.6 20.4c.3.3.6.4 1 .4s.8-.2 1.1-.5c.6-.6.5-1.6-.1-2.1l-5.5-5.1c-.6-.5-1.5-.5-2 0L.6 18.2c-.6.6-.7 1.5-.1 2.1.5.6 1.4.7 2 .1l3-2.8v28.8l-3-2.8c-.6-.6-1.6-.5-2.1.1-.6.6-.5 1.6.1 2.1L6 50.9c.3.3.6.4 1 .4s.7-.1 1-.4l5.5-5.1c.6-.6.7-1.5.1-2.1-.6-.6-1.5-.7-2.1-.1l-3 2.8V17.6l3.1 2.8z"/>
	</g>
</svg>
	);
};

export default Height;