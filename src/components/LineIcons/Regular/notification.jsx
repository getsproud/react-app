import React from 'react';

function Notification(props) {
	const title = props.title || "notification";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.3 4.6c-5 0-9.2 3.2-10.8 7.8H6.8c-3.1 0-5.6 2.5-5.6 5.6v35.8c0 3.1 2.5 5.6 5.6 5.6h37.5c3.1 0 5.6-2.5 5.6-5.6V27.9c.5.1.9.1 1.4.1 6.3 0 11.5-5.2 11.5-11.7 0-6.4-5.2-11.7-11.5-11.7zm-4.9 49.2c0 1.1-.9 2.1-2.1 2.1H6.8c-1.1 0-2.1-.9-2.1-2.1V18c0-1.1.9-2.1 2.1-2.1h33v.4c0 4.7 2.7 8.7 6.6 10.5v27zm4.9-29.3c-4.4 0-8-3.7-8-8.2s3.6-8.2 8-8.2 8 3.7 8 8.2-3.6 8.2-8 8.2z"/>
		<path d="M11.9 31.5H32c1 0 1.8-.8 1.8-1.8S33 28 32 28H11.9c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7z"/>
		<path d="M36.9 40h-25c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h25c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Notification;