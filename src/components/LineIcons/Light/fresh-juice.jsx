import React from 'react';

function FreshJuice(props) {
	const title = props.title || "fresh juice";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.9 33.4c-1.9-.4-3.9.1-5.4 1.3-.7.5-1.5.9-2.3 1.1.5-2.5 3.3-6.3 5.2-8.3.6-.6.5-1.6-.1-2.1-.6-.6-1.6-.5-2.1.1-.6.7-5.5 6-6 10.3-.8-.2-1.6-.6-2.4-1.1-1.7-1.1-3.6-1.6-5.3-1.2-4 .7-6.6 4.4-6 8.4C35 52.1 38 56 40.2 57.5c1 .7 2.1 1.1 3.4 1.1.3 0 .7 0 1.1-.1h.1c1.2-.3 1.8-.7 2.2-1.1.5-.5 1.2-.8 1.8-.8.6 0 1.3.3 1.8.8.4.4 1 1 2.4 1.2 1.7.2 3.2-.1 4.5-1 2.1-1.6 5-5.6 6.6-15.6.4-4.2-2.3-7.9-6.2-8.6zm3 7.9c-1.6 9.9-4.3 12.8-5.4 13.6-.7.5-1.3.6-2.4.5-.3 0-.4-.1-.6-.3-1.1-1-2.5-1.6-3.9-1.6s-2.8.6-3.9 1.6c-.1.1-.2.2-.7.3-1 .1-1.6 0-2.3-.5-1.1-.8-3.9-3.7-5.4-13.6-.4-2.4 1.2-4.6 3.6-5 .2 0 .4-.1.6-.1.8 0 1.7.3 2.5.8 1.7 1.2 3.6 1.8 5.6 1.8h.5c2-.1 3.7-.7 5.1-1.9.9-.7 2-.9 3.1-.7 2.4.5 4 2.8 3.6 5.1z"/>
		<path d="M29.2 5.5H20c-2.4 0-4.5 1.7-5 4l-1.5 7v.1H4.8c-1.3 0-2.6.6-3.5 1.5-.9 1-1.3 2.3-1.2 3.6l2.7 32.4c.2 2.4 2.3 4.3 4.7 4.3h14.9c2.5 0 4.5-1.9 4.7-4.3l2.7-32.4c.1-1.3-.3-2.6-1.2-3.6-.9-1-2.2-1.5-3.5-1.5h-8.6l1.4-6.4c.2-1 1.1-1.7 2.1-1.7h9.2c.8 0 1.5-.7 1.5-1.5s-.6-1.5-1.5-1.5zm-5 48.4c-.1.9-.8 1.6-1.7 1.6h-15c-.9 0-1.7-.7-1.7-1.6l-2.2-26h22.8l-2.2 26zm2.2-33.8c.3.4.5.8.5 1.3l-.3 3.4H3.3L3 21.5c0-.5.1-1 .5-1.3.3-.4.8-.6 1.3-.6h20.4c.4 0 .9.2 1.2.5z"/>
	</g>
</svg>
	);
};

export default FreshJuice;