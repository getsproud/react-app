import React from 'react';

function TruckStar(props) {
	const title = props.title || "truck star";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.4 33.5L55.2 23c-.3-.5-.9-.8-1.4-.8H42.4v-2.6c0-3.4-2.7-6.1-6.1-6.1h-8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h8c1.4 0 2.6 1.2 2.6 2.6V49.1H28.7c-.6-2.8-3-4.9-6-4.9s-5.4 2.1-6 4.9H9.5C8.1 49.1 7 48 7 46.5V32.7c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v13.9c0 3.4 2.7 6.1 6.1 6.1h7.6c.9 2.2 3.1 3.8 5.6 3.8s4.7-1.6 5.6-3.8h16.1c.9 2.2 3.1 3.8 5.6 3.8s4.7-1.6 5.6-3.8H61c1 0 1.8-.8 1.8-1.8V34.5c0-.4-.2-.7-.4-1zm-9.5-7.7l5.3 7.7H42.4v-7.7h10.5zM22.7 52.9c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6c1.4 0 2.6 1.2 2.6 2.6s-1.2 2.6-2.6 2.6zm27.4 0c-1.4 0-2.6-1.2-2.6-2.6s1.2-2.6 2.6-2.6 2.6 1.2 2.6 2.6-1.2 2.6-2.6 2.6zm6-3.8c-.6-2.8-3-4.9-6-4.9s-5.4 2.1-6 4.9h-1.7V36.9h16.8v12.2h-3.1z"/>
		<path d="M4.3 24.5c0 .6.3 1.1.7 1.4.3.2.7.3 1 .3.2 0 .4 0 .5-.1l4.4-1.4 4.4 1.4c.5.2 1.1.1 1.6-.3.4-.3.7-.8.7-1.4v-4.6l2.7-3.7c.3-.5.4-1 .2-1.6-.2-.5-.6-.9-1.1-1.1L15.1 12l-2.7-3.7c-.7-.9-2.1-.9-2.8 0L6.8 12l-4.4 1.5c-.5.2-.9.6-1.1 1.1-.2.5-.1 1.1.2 1.6l2.7 3.7.1 4.6zm4.1-9.3c.3-.1.6-.3.8-.6l1.7-2.2 1.7 2.2c.2.3.5.5.8.6l2.6.9-1.6 2.3c-.2.3-.3.6-.3 1v2.8l-2.7-.8c-.2-.1-.3-.1-.5-.1s-.4 0-.5.1l-2.7.8v-2.8c0-.4-.1-.7-.3-1L5.8 16l2.6-.8z"/>
	</g>
</svg>
	);
};

export default TruckStar;