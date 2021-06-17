import React from 'react';

function Popcorn(props) {
	const title = props.title || "popcorn";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.1 22.9c.6-1.2.9-2.6.9-3.9 0-4.9-3.9-8.8-8.7-9-.2-4.8-4.1-8.7-9-8.7-2.6 0-5.1 1.1-6.8 3.1-.6-.1-1.3-.2-1.9-.2-3.8 0-7.1 2.4-8.4 5.8h-.3c-5 0-9 4-9 9 0 1.4.3 2.7.9 3.9-.3.4-.5.8-.5 1.3L13 58.5c.1 1 .5 1.9 1.2 2.7l.1.1c.8.9 2 1.4 3.3 1.4h28.8c2.4 0 4.4-1.9 4.6-4.2l2.6-34.3c.1-.5-.1-.9-.5-1.3.1 0 0 0 0 0zM18.8 59.3l31-31-1 13.5-17.5 17.5H18.8zM14 25.8h15.9L15.1 40.6 14 25.8zm1.5 19.4l19.3-19.3h12.5L16.4 56.7l-.9-11.5zM19 13.5c.4 0 .8 0 1.2.1.5.1 1 0 1.4-.2.4-.3.7-.7.8-1.2.5-2.6 2.7-4.5 5.4-4.5.7 0 1.3.1 1.9.4.8.3 1.7 0 2.1-.7 1-1.6 2.7-2.6 4.6-2.6 3 0 5.5 2.5 5.5 5.5 0 .5 0 .8-.1 1.2-.2.6 0 1.3.5 1.7.4.4 1.1.6 1.7.4.3-.1.7-.1 1.2-.1 3 0 5.5 2.5 5.5 5.5 0 1.2-.4 2.4-1.1 3.3 0 0 0 .1-.1.1H14.6s0-.1-.1-.1c-.7-.9-1.1-2.1-1.1-3.3.1-3.1 2.5-5.5 5.6-5.5zm27.4 45.8H36.2l12.1-12.1-.9 11.1c0 .5-.4 1-1 1z"/>
	</g>
</svg>
	);
};

export default Popcorn;