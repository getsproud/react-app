import React from 'react';

function MoveTask(props) {
	const title = props.title || "move task";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 30.3H32.6c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M61 47.6H32.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H61c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M32.8 16.4H61c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7H32.8c-1 0-1.8.8-1.8 1.8s.8 1.7 1.8 1.7z"/>
		<path d="M18.3 30L6.2 21.3c-1-.7-2.2-.8-3.3-.2-1.1.5-1.7 1.6-1.7 2.8v17.4c0 1.2.7 2.3 1.7 2.8.5.2.9.3 1.4.3.6 0 1.3-.2 1.8-.6l12.1-8.7c.8-.6 1.3-1.5 1.3-2.5.1-1-.3-2-1.2-2.6zM4.8 40.6v-16l11.1 8-11.1 8z"/>
	</g>
</svg>
	);
};

export default MoveTask;