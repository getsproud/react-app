import React from 'react';

function CottageAlt(props) {
	const title = props.title || "cottage alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.4 29.1V29v-.2-.1c0-.1-.1-.3-.1-.4v-.1c-.1-.1-.1-.2-.2-.3l-23-24.8C35 1.9 33.6 1.3 32 1.3c-1.6 0-3 .6-4.1 1.8L5.1 27.7c-.1.2-.2.3-.3.4v.1c-.1.1-.1.3-.1.4v.5c0 .2.1.3.1.4.1.3.1.4.2.5 0 0 0 .1.1.1l.3.3c.1.1.2.1.4.2h.1c.1 0 .3.1.5.1 1.9 0 3.4 1.5 3.4 3.4V56c0 3.7 3 6.8 6.8 6.8h31c3.7 0 6.8-3 6.8-6.8V34.1c0-1.9 1.5-3.4 3.4-3.4.2 0 .3 0 .5-.1h.1c.1 0 .3-.1.4-.2l.3-.3s0-.1.1-.1c.1-.1.2-.2.2-.4.1-.1.1-.3.1-.4-.2-.1-.2-.1-.1-.1zM30.5 5.4c.4-.5 1-.7 1.5-.7.6 0 1.1.2 1.5.7l20.1 21.7H10.4L30.5 5.4zm7 53.9h-11V53c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5v6.3zm13.2-25.2V56c0 1.8-1.5 3.3-3.3 3.3H41V53c0-4.9-4-9-9-9-4.9 0-9 4-9 9v6.3h-6.5c-1.8 0-3.3-1.5-3.3-3.3V34.1c0-1.2-.3-2.4-.9-3.4h39.3c-.5 1-.9 2.1-.9 3.4z"/>
	</g>
</svg>
	);
};

export default CottageAlt;