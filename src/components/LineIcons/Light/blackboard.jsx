import React from 'react';

function Blackboard(props) {
	const title = props.title || "blackboard";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.8 8.3H33.5v-4c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v4H3.2C1.4 8.3 0 9.8 0 11.5v27.1c0 1.8 1.4 3.2 3.2 3.2h13.5L7.1 59c-.4.7-.1 1.6.6 2 .2.1.5.2.7.2.5 0 1-.3 1.3-.8l10.4-18.6h10.4v17.9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V41.8H44l10.5 18.6c.3.5.8.8 1.3.8.3 0 .5-.1.7-.2.7-.4 1-1.3.6-2l-9.7-17.2h13.3c1.8 0 3.2-1.4 3.2-3.2V11.5c.1-1.7-1.3-3.2-3.1-3.2zm.2 30.3c0 .1-.1.2-.2.2H3.2c-.1 0-.2-.1-.2-.2V11.5c0-.1.1-.2.2-.2h57.6c.1 0 .2.1.2.2v27.1z"/>
	</g>
</svg>
	);
};

export default Blackboard;