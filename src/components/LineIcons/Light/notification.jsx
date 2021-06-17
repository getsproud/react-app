import React from 'react';

function Notification(props) {
	const title = props.title || "notification";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.3 3.6c-5.2 0-9.6 3.4-11.1 8.2H1.5c-.8 0-1.5.7-1.5 1.5V59c0 .8.7 1.5 1.5 1.5H49c.8 0 1.5-.7 1.5-1.5V27.3c.6.1 1.2.2 1.8.2 6.5 0 11.8-5.3 11.8-11.9s-5.4-12-11.8-12zm-4.8 53.8H3V14.7h37.6v.8c0 4.8 2.9 9 7 10.9v31zm4.8-33c-4.8 0-8.8-4-8.8-8.9s3.9-8.9 8.8-8.9 8.8 4 8.8 8.9-4 8.9-8.8 8.9z"/>
		<path d="M9.4 31.1H32c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5H9.4c-.8 0-1.5.7-1.5 1.5s.6 1.5 1.5 1.5z"/>
		<path d="M37.2 40.7H9.4c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h27.8c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"/>
	</g>
</svg>
	);
};

export default Notification;