import React from 'react';

function Crane(props) {
	const title = props.title || "crane";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54.8 42.3l-18.2-9.5c.2-.6 0-1.4-.6-1.8-.7-.6-1.8-.5-2.5.2-.2.3-1 .5-1.9.3-.8-.2-1.3-.8-1.4-1.7-.1-1.3.5-2.2 2-2.8 1-.4 1.7-1.4 1.6-2.5V18c3.8-.8 6.6-4.2 6.6-8.3 0-4.7-3.8-8.5-8.5-8.5S23.4 5 23.4 9.7c0 4.1 2.9 7.5 6.8 8.3l.1 5.9c-2.5 1.3-3.9 3.5-3.6 6.2.1 1 .4 1.8.9 2.6L9.3 42.3c-1.9 1-3 2.9-3 5v9.9c0 3.1 2.5 5.6 5.6 5.6h40.3c3.1 0 5.6-2.5 5.6-5.6v-9.9c0-2.2-1.2-4.1-3-5zM27 9.7c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5zm27.3 47.4c0 1.2-.9 2.1-2.1 2.1H11.8c-1.2 0-2.1-1-2.1-2.1v-9.9c0-.8.4-1.5 1.1-1.9l20-10.4.1-.1c.5.1.9.2 1.4.2.3 0 .6 0 .9-.1l19.9 10.4c.7.4 1.1 1.1 1.1 1.9v9.9z"/>
		<path d="M19.5 50.1h-4.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M33.5 50h-4.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M49.2 50.1h-4.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h4.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default Crane;