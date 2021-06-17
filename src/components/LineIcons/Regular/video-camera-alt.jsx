import React from 'react';

function VideoCameraAlt(props) {
	const title = props.title || "video camera alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.4 22c-.8-.6-1.9-.7-2.9-.4l-10.3 3.7v-2.8c0-3.2-2.6-5.8-5.8-5.8H7c-3.2 0-5.8 2.6-5.8 5.8v18.9c0 3.2 2.6 5.8 5.8 5.8h35.5c3.2 0 5.8-2.6 5.8-5.8v-2.8l10.3 3.7c.3.1.7.2 1.1.2.6 0 1.3-.2 1.8-.6.8-.6 1.3-1.5 1.3-2.6V24.6c0-1-.5-2-1.4-2.6zM42.5 43.7H7c-1.2 0-2.3-1-2.3-2.3V22.6c0-1.2 1-2.3 2.3-2.3h35.5c1.2 0 2.3 1 2.3 2.3V41.5c0 1.2-1 2.2-2.3 2.2zm16.8-4.8l-11-4v-5.8l11-4v13.8z"/>
	</g>
</svg>
	);
};

export default VideoCameraAlt;