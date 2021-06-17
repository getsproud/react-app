import React from 'react';

function CheckSign(props) {
	const title = props.title || "check sign";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.3 6.7l-.4-.2c-1.5-.7-3.1-.8-4.6-.2-1.5.5-2.7 1.7-3.4 3.1l-1.6 3.4-6.5 14H7.3c-3.3 0-6 2.7-6 6V52c0 3.3 2.7 6 6 6h39.3c3.3 0 6-2.7 6-6V35.4l8-17.3 1.6-3.4c1.4-3 .1-6.6-2.9-8zm-3.8 2.9c.6-.2 1.3-.2 1.9.1l.4.2c1.3.6 1.8 2.1 1.2 3.3l-.8 1.8-5-2.3.8-1.8c.3-.6.8-1 1.5-1.3zM48 36.9l-4.6 3.3-.4-5.6 2.5-5.3L51.7 16l5 2.3L48 36.9zm-1.5 17.6H7.3c-1.4 0-2.5-1.1-2.5-2.5V32.8c0-1.4 1.1-2.5 2.5-2.5h33.9l-1.5 3.2c-.1.3-.2.6-.2.9l.6 9.3c0 .6.4 1.2 1 1.5.2.1.5.2.7.2.4 0 .7-.1 1-.3l6.2-4.5V52c.1 1.4-1.1 2.5-2.5 2.5z"/>
		<path d="M30.7 36.5H11.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h18.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M27.8 45.1h-16c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h16.1c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.9-1.8z"/>
	</g>
</svg>
	);
};

export default CheckSign;