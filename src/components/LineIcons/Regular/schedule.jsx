import React from 'react';

function Schedule(props) {
	const title = props.title || "schedule";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 12.5h-7.2V6.3c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v6.2H16.7V6.3c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v6.2H6c-2.6 0-4.8 2.1-4.8 4.8v37.4c0 2.6 2.1 4.8 4.8 4.8h52c2.6 0 4.8-2.1 4.8-4.8V17.3c0-2.6-2.2-4.8-4.8-4.8zM6 16h52c.7 0 1.3.6 1.3 1.3v8.3H4.8v-8.3c0-.7.5-1.3 1.2-1.3zm52 39.9H6c-.7 0-1.3-.6-1.3-1.3V29.1h54.5v25.6c.1.7-.5 1.2-1.2 1.2z"/>
		<path d="M33.3 36.1c-.7-.3-1.4-.1-1.9.4l-3.1 3.1c-.7.7-.7 1.8 0 2.5s1.8.7 2.5 0l.1-.1v4.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-9.1c-.1-.8-.6-1.4-1.2-1.7z"/>
	</g>
</svg>
	);
};

export default Schedule;