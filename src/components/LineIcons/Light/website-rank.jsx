import React from 'react';

function WebsiteRank(props) {
	const title = props.title || "website rank";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 8.2h-61C.7 8.2 0 8.9 0 9.7v44.6c0 .8.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5V9.7c0-.8-.7-1.5-1.5-1.5zm-1.5 3v9.4H3v-9.4h58zM3 52.8V23.7h58v29.1H3z"/>
		<ellipse cx="38.2" cy="16.1" rx="2.1" ry="2.1"/>
		<ellipse cx="46.5" cy="16.1" rx="2.1" ry="2.1"/>
		<ellipse cx="54.7" cy="16.1" rx="2.1" ry="2.1"/>
		<path d="M40.3 34.9l-4.8-.7-2.2-4.4c-.2-.5-.7-.8-1.3-.8s-1.1.3-1.3.8l-2.2 4.4-4.8.7c-.6.1-1 .5-1.2 1-.2.5 0 1.1.4 1.5l3.5 3.4-.8 4.8c-.1.6.1 1.1.6 1.5.3.2.6.3.9.3.2 0 .5-.1.7-.2L32 45l4.3 2.3c.5.3 1.1.2 1.6-.1.5-.3.7-.9.6-1.5l-.8-4.8 3.5-3.4c.4-.4.6-1 .4-1.5-.2-.6-.7-1-1.3-1.1zM35 39.3c-.4.3-.5.8-.4 1.3l.4 2.6-2.3-1.2c-.4-.2-1-.2-1.4 0L29 43.2l.4-2.6c.1-.5-.1-1-.4-1.3l-1.9-1.8 2.6-.4c.5-.1.9-.4 1.1-.8l1.2-2.4 1.2 2.4c.2.4.6.8 1.1.8l2.6.4-1.9 1.8z"/>
	</g>
</svg>
	);
};

export default WebsiteRank;