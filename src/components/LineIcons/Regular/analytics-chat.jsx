import React from 'react';

function AnalyticsChat(props) {
	const title = props.title || "analytics chat";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.9 6.8H7.1c-3.2 0-5.9 2.6-5.9 5.9V40c0 3.2 2.6 5.9 5.9 5.9h1.5v8.2c0 1.4.8 2.5 2.1 3 .3.1.7.2 1 .2.9 0 1.8-.4 2.4-1.2l8.1-10.2h34.5c3.2 0 5.9-2.6 5.9-5.9V12.6c.2-3.2-2.5-5.8-5.7-5.8zM59.3 40c0 1.3-1.1 2.4-2.4 2.4H21.5c-.5 0-1 .2-1.4.7l-7.9 10v-8.9c0-1-.8-1.8-1.8-1.8H7.1c-1.3 0-2.4-1.1-2.4-2.4V12.6c0-1.3 1.1-2.4 2.4-2.4h49.7c1.3 0 2.4 1.1 2.4 2.4V40z"/>
		<path d="M43.5 31.5h-2.1V17c0-1-.8-1.8-1.8-1.8S38 16.1 38 17v14.5h-4.6v-12c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v12.1h-4.6v-8c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v8h-1.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h23.1c1 0 1.8-.8 1.8-1.8.1-1.1-.7-1.9-1.7-1.9z"/>
	</g>
</svg>
	);
};

export default AnalyticsChat;