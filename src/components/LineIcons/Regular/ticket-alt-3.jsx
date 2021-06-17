import React from 'react';

function TicketAlt3(props) {
	const title = props.title || "ticket alt 3";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 13.5H7c-3.2 0-5.8 2.6-5.8 5.8v25.6c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V19.2c0-3.2-2.6-5.7-5.8-5.7zm2.3 31.3c0 1.2-1 2.3-2.3 2.3h-7v-1.3c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V47H7c-1.2 0-2.3-1-2.3-2.3V19.2C4.8 18 5.8 17 7 17h39.5v2.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V17h7c1.2 0 2.3 1 2.3 2.3v25.5z"/>
		<path d="M48.2 33.4c-1 0-1.8.8-1.8 1.8v5.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.3c0-1-.8-1.8-1.8-1.8z"/>
		<path d="M48.2 22.8c-1 0-1.8.8-1.8 1.8v5.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-5.3c0-1.1-.8-1.8-1.8-1.8z"/>
		<path d="M22.1 29.4H19c-.7 0-1.3-.7-1.3-1.6s.6-1.6 1.3-1.6h4.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-1.6c0-.9-.8-1.7-1.7-1.7-1 0-1.7.8-1.7 1.7-2.6.1-4.6 2.3-4.6 5.1s2.1 5.1 4.8 5.1h3.1c.7 0 1.3.7 1.3 1.6 0 .9-.6 1.6-1.3 1.6h-4.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1.6c0 .9.8 1.7 1.7 1.7 1 0 1.7-.8 1.7-1.7 2.5-.1 4.6-2.3 4.6-5.1s-2.1-5.1-4.8-5.1z"/>
	</g>
</svg>
	);
};

export default TicketAlt3;