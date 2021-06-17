import React from 'react';

function MobileChat(props) {
	const title = props.title || "mobile chat";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 13.9H39V1.5c0-.8-.6-1.5-1.5-1.5h-36C.7 0 0 .7 0 1.5v61c0 .8.7 1.5 1.5 1.5h36c.8 0 1.5-.7 1.5-1.5V36.3h23.5c.8 0 1.5-.7 1.5-1.5V15.4c0-.9-.7-1.5-1.5-1.5zM3 61V3h33v10.9h-9.6c-.8 0-1.5.7-1.5 1.5v26.3c0 .6.3 1.1.8 1.3.2.1.5.2.7.2.3 0 .6-.1.8-.3l8.7-6v24H3zm58-27.7H36.6c-.3 0-.6.1-.8.3L28 38.9v-22h33v16.4z"/>
		<path d="M19.2 49.9c-2.4 0-4.3 1.9-4.3 4.3s1.9 4.3 4.3 4.3 4.3-1.9 4.3-4.3-1.9-4.3-4.3-4.3zm0 5.6c-.7 0-1.3-.6-1.3-1.3 0-.7.6-1.3 1.3-1.3.7 0 1.3.6 1.3 1.3 0 .7-.6 1.3-1.3 1.3z"/>
	</g>
</svg>
	);
};

export default MobileChat;