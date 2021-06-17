import React from 'react';

function Maze(props) {
	const title = props.title || "maze";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.7 1.3H7.4C4 1.3 1.3 4 1.3 7.4v10.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V7.4c0-1.4 1.2-2.6 2.6-2.6h49.3c1.4 0 2.6 1.2 2.6 2.6V18h-7.6c-.2-3.1-2.9-5.6-6.1-5.6h-10c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h10c1.4 0 2.6 1.2 2.6 2.6v27.2c0 1.4-1.2 2.6-2.6 2.6h-1.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h1.1c3.4 0 6.1-2.7 6.1-6.1V21.4h7.6v10c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-24c-.2-3.4-3-6.1-6.3-6.1z"/>
		<path d="M61 42.8c-1 0-1.8.8-1.8 1.8v12.1c0 1.4-1.2 2.6-2.6 2.6H7.4c-1.4 0-2.6-1.2-2.6-2.6v-14h7.6v3c0 3.4 2.7 6.1 6.1 6.1H34c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H18.4c-1.4 0-2.6-1.2-2.6-2.6v-15c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v8.6H4.8v-10c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v27.6c0 3.4 2.7 6.1 6.1 6.1h49.3c3.4 0 6.1-2.7 6.1-6.1V44.5c.1-1-.7-1.7-1.7-1.7z"/>
		<path d="M26.6 12.3h-8.2c-3.4 0-6.1 2.7-6.1 6.1v1.3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-1.3c0-1.4 1.2-2.6 2.6-2.6h8.2c1 0 1.8-.8 1.8-1.8s-1-1.7-1.9-1.7z"/>
		<path d="M40.9 30.3c1 0 1.8-.8 1.8-1.8v-1.1c0-3.4-2.7-6.1-6.1-6.1h-9.1c-3.4 0-6.1 2.7-6.1 6.1v9.1c0 3.4 2.7 6.1 6.1 6.1h9.1c3.4 0 6.1-2.7 6.1-6.1 0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8c0 1.4-1.2 2.6-2.6 2.6h-9.1c-1.4 0-2.6-1.2-2.6-2.6v-9.1c0-1.4 1.2-2.6 2.6-2.6h9.1c1.4 0 2.6 1.2 2.6 2.6v1.1c0 1 .8 1.8 1.8 1.8z"/>
	</g>
</svg>
	);
};

export default Maze;