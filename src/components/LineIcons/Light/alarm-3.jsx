import React from 'react';

function Alarm3(props) {
	const title = props.title || "alarm 3";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.2 56.4L57 53c-.5-.8-.8-1.6-.8-2.5V27.6c0-6.2-2.6-11.9-7.4-16.2-4.2-3.8-9.7-6-15.4-6.3V1.5c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v3.6c-.5 0-1 .1-1.5.1C16.8 6.6 7.6 16.4 7.6 28v22.4c-.1 1-.3 1.8-.7 2.4l-2.1 3.6c-.5.8-.5 1.8 0 2.5S6 60.1 7 60.1h22.5v1.4c0 1.4 1.1 2.5 2.5 2.5s2.5-1.1 2.5-2.5v-1.4h22.7c.9 0 1.7-.4 2.1-1.2.4-.8.4-1.7-.1-2.5zM29.3 8.2c6.5-.7 12.9 1.3 17.6 5.4 4.2 3.7 6.4 8.7 6.4 14v18H10.6V28c0-10.1 8-18.6 18.7-19.8zM7.9 57.1l1.6-2.8c.6-1 .9-2.1 1.1-3.6v-2h42.7v1.8c0 1.5.4 2.8 1.2 4.1l1.6 2.5H7.9z"/>
	</g>
</svg>
	);
};

export default Alarm3;