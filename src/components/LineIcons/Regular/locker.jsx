import React from 'react';

function Locker(props) {
	const title = props.title || "locker";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.3 1.2H12.7c-3.1 0-5.6 2.5-5.6 5.6V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V50h23.5v11c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3.2h15.8V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V6.8c-.3-3-2.8-5.6-5.9-5.6zm2.1 5.6V29H37.6V4.7h13.7c1.2 0 2.1 1 2.1 2.1zM12.7 4.7h21.4v14.8H10.6V6.8c0-1.1.9-2.1 2.1-2.1zm-2.1 41.7V23.1h23.5v23.4H10.6zm27 7.9V32.6h15.8v21.8H37.6z"/>
		<path d="M41.9 20.6c1 0 1.8-.8 1.8-1.8v-.6c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v.6c0 1 .8 1.8 1.8 1.8z"/>
		<path d="M41.9 39.5c-1 0-1.8.8-1.8 1.8v.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-.6c-.1-1-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Locker;