import React from 'react';

function FunnelAlt2(props) {
	const title = props.title || "funnel alt 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M52.4 1.3H11.6C8 1.3 5 4.3 5 7.9v3.2c0 1.6.5 3.2 1.5 4.4l17.1 21.2V55c0 2.8 1.7 5.2 4.3 6.2l3.4 1.2c.7.3 1.5.4 2.3.4 1.3 0 2.7-.4 3.8-1.2 1.8-1.2 2.8-3.2 2.8-5.4V36.7l17.1-21.2c1-1.2 1.5-2.8 1.5-4.4V7.8c.1-3.6-2.8-6.5-6.4-6.5zM8.6 7.8c0-1.7 1.4-3.1 3.1-3.1h40.7c1.7 0 3.1 1.4 3.1 3.1V11c0 .2 0 .4-.1.7H8.6c0-.2-.1-.4-.1-.7V7.8zm28.6 27.1c-.3.3-.4.7-.4 1.1v20.1c0 1-.5 1.9-1.3 2.5-.8.6-1.9.7-2.8.4l-3.4-1.2c-1.2-.4-2-1.6-2-2.9V36c0-.4-.1-.8-.4-1.1l-16-19.7h42.2L37.2 34.9z"/>
	</g>
</svg>
	);
};

export default FunnelAlt2;