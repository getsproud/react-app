import React from 'react';

function Save(props) {
	const title = props.title || "save";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.3 10.4L49.8.7l-.1-.1c-.6-.4-1.2-.6-1.9-.6H5.6C4 0 2.8 1.3 2.8 2.9v58.2C2.8 62.7 4 64 5.6 64h52.7c1.6 0 2.9-1.3 2.9-2.9V12.6c0-.9-.3-1.6-.9-2.2zM41.6 3v8.1H16.9V3h24.7zm-22 58V39h24.7v22H19.6zm38.6 0H47.4V38.9c0-1.6-1.3-2.9-2.9-2.9h-25c-1.6 0-2.9 1.3-2.9 2.9V61H5.8V3h8.1v8.2c0 1.6 1.3 2.9 2.9 2.9h25c1.6 0 2.9-1.3 2.9-2.9V3H48l10.4 9.5V61z"/>
		<path d="M37.5 44.4h-11c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h11.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.6-1.5z"/>
		<path d="M37.5 52.7h-11c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h11.1c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.6-1.5z"/>
	</g>
</svg>
	);
};

export default Save;