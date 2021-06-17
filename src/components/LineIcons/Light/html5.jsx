import React from 'react';

function Html5(props) {
	const title = props.title || "html5";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.4 1.4c-.5-.5-1.1-.8-1.8-.8H2.5c-.7 0-1.4.3-1.8.8-.5.5-.7 1.2-.7 1.9l5.3 52.4c.1.9.8 1.8 1.7 2l23.4 5.6c.4.1.9.1 1.4.1.5 0 1 0 1.4-.1l23.5-5.6c.8-.2 1.7-.9 1.7-1.9L64 3.3c0-.7-.2-1.4-.6-1.9zm-7.9 53.5l-22.9 5.5c-.4.1-1 .1-1.4 0L8.3 54.9 3.1 3.6h57.8l-5.4 51.3z"/>
		<path d="M12.4 12.9c-.7.9-1 2-.8 3l1.9 10.4c.3 1.5 1.6 2.7 3.2 2.7h29c.1 0 .2 0 .2.1s.1.1 0 .2l-2.8 13.8-11.8 4.3-11.8-4.2-1.2-6.7c-.1-.8-.9-1.4-1.7-1.2-.8.1-1.4.9-1.2 1.7l1.3 7.5c.1.5.5 1 1 1.1l13.1 4.7c.2.1.3.1.5.1s.3 0 .5-.1l13.1-4.7c.5-.2.9-.6 1-1.1l3-14.6c.2-1 0-1.9-.7-2.7-.6-.8-1.5-1.2-2.5-1.2h-29c-.1 0-.2-.1-.2-.2l-1.9-10.5c0-.2 0-.3.1-.6.2-.2.4-.2.6-.2h34.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H15.4c-1.2.1-2.2.6-3 1.4z"/>
	</g>
</svg>
	);
};

export default Html5;