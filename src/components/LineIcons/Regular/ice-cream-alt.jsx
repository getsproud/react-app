import React from 'react';

function IceCreamAlt(props) {
	const title = props.title || "ice cream alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3C25 1.3 19.2 7 19.2 14v29.2c0 2.1 1.7 3.8 3.8 3.8h7.3v14c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V47H41c2.1 0 3.8-1.7 3.8-3.8V14C44.8 7 39 1.3 32 1.3zm9.3 41.9c0 .1-.1.3-.3.3H23c-.1 0-.3-.1-.3-.3V14c0-5.1 4.2-9.3 9.3-9.3 5.1 0 9.3 4.2 9.3 9.3v29.2z"/>
	</g>
</svg>
	);
};

export default IceCreamAlt;