import React from 'react';

function ChestOfDrawers4(props) {
	const title = props.title || "chest of drawers 4";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 3.6H7c-3.2 0-5.8 2.6-5.8 5.8v40.2c0 3.2 2.6 5.7 5.7 5.7v3.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3.3h41.6v3.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3.3H57c3.2 0 5.8-2.6 5.8-5.8V9.4c0-3.2-2.6-5.8-5.8-5.8zM4.8 22.7h26v10h-26v-10zm29.4 0h25v10h-25v-10zM7 7.1h50c1.2 0 2.3 1 2.3 2.3v9.8H4.8V9.4c0-1.3 1-2.3 2.2-2.3zM4.8 49.6V36.2h26v15.6H7c-1.2 0-2.2-1-2.2-2.2zM57 51.8H34.2V36.2h25v13.4c.1 1.2-1 2.2-2.2 2.2z"/>
		<path d="M45.9 42.1c-1 0-1.8.8-1.8 1.8V46c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.1c-.1-1-.9-1.8-1.8-1.8z"/>
		<path d="M19 47.8c1 0 1.8-.8 1.8-1.8v-2.1c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8V46c.1 1 .9 1.8 1.8 1.8z"/>
	</g>
</svg>
	);
};

export default ChestOfDrawers4;