import React from 'react';

function VideoCameraAlt1(props) {
	const title = props.title || "video camera alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.4 6.5c-.8-.6-1.9-.7-2.9-.4L48.3 9.8V7c0-3.2-2.6-5.8-5.8-5.8H7C3.8 1.3 1.3 3.8 1.3 7v18.9c0 3.2 2.6 5.8 5.8 5.8h14.5L5.2 60.1c-.5.9-.2 1.9.6 2.4.3.2.6.2.9.2.6 0 1.2-.3 1.5-.9l15.7-27.3 15.7 27.3c.3.6.9.9 1.5.9.3 0 .6-.1.9-.2.8-.5 1.1-1.6.6-2.4L26.3 31.7h16.2c3.2 0 5.8-2.6 5.8-5.8v-2.8l10.3 3.7c.3.1.7.2 1.1.2.6 0 1.3-.2 1.8-.6.8-.6 1.3-1.6 1.3-2.6V9.1c0-1-.5-2-1.4-2.6zM42.5 28.2H7c-1.2 0-2.3-1-2.3-2.3V7c0-1.2 1-2.3 2.3-2.3h35.5c1.2 0 2.3 1 2.3 2.3V25.9c0 1.3-1 2.3-2.3 2.3zm16.8-4.9l-11-4v-5.8l11-4v13.8z"/>
	</g>
</svg>
	);
};

export default VideoCameraAlt1;