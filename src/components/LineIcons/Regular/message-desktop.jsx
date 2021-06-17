import React from 'react';

function MessageDesktop(props) {
	const title = props.title || "message desktop";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.2 14c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8c.5 0 1 .4 1 1v27.2c0 .5-.5 1-1 1H5.8c-.5 0-1-.5-1-1V18.5c0-.5.5-1 1-1 1 0 1.8-.8 1.8-1.8S6.7 14 5.8 14c-2.5 0-4.5 2-4.5 4.5v27.2c0 2.5 2 4.5 4.5 4.5h19l-5 8.4h-6.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h36.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-6.2l-5-8.4h19c2.5 0 4.5-2 4.5-4.5V18.5c0-2.5-2.1-4.5-4.6-4.5zm-18 44.6H23.8l5-8.4h6.4l5 8.4z"/>
		<path d="M19 24.7h26c1.9 0 3.4-1.5 3.4-3.4v-16c0-1.9-1.5-3.4-3.4-3.4H19c-1.9 0-3.4 1.5-3.4 3.4v16c0 1.9 1.6 3.4 3.4 3.4zm.1-3.5v-14L30 13.9c.6.4 1.3.6 2 .6s1.4-.2 2-.6l10.9-6.6v14H19.1zm3.7-15.8h18.4l-9.1 5.5c-.1.1-.2.1-.3 0l-9-5.5z"/>
	</g>
</svg>
	);
};

export default MessageDesktop;