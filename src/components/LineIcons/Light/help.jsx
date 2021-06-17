import React from 'react';

function Help(props) {
	const title = props.title || "help";

	return (
		<svg height="64" id="Layer_2_1_" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.8 12.9C45.1 6.3 39.7 1 33 .1c-6.1-.7-11.9 2.4-14.7 7.8-.4.7-.1 1.6.6 2 .7.4 1.6.1 2-.6 2.2-4.3 6.8-6.7 11.7-6.2 5.4.7 9.6 4.9 10.2 10.1.5 4.9-2 9.5-6.5 11.6-4 1.9-6.6 6.1-6.6 10.7v14.9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V35.5c0-3.4 2-6.6 4.9-8 5.6-2.6 8.9-8.5 8.2-14.6z"/>
		<circle cx="31.3" cy="61.3" r="2.7"/>
	</g>
</svg>
	);
};

export default Help;