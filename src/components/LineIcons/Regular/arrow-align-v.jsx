import React from 'react';

function ArrowAlignV(props) {
	const title = props.title || "arrow align v";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M21.9 12.1c.4 0 .8-.1 1.1-.4l7.2-6.1v15.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-15l7.2 6.1c.7.6 1.8.5 2.5-.2.6-.7.5-1.8-.2-2.5l-7.8-6.6c-2-1.7-4.8-1.7-6.8 0L20.8 9c-.7.6-.8 1.7-.2 2.5.3.4.8.6 1.3.6z"/>
		<path d="M41 52.3l-7.2 6.1V43.2c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v15.1l-7.2-6c-.7-.6-1.8-.5-2.5.2-.6.7-.5 1.8.2 2.5l7.8 6.6c1 .8 2.2 1.2 3.4 1.2s2.4-.4 3.4-1.2l7.8-6.6c.7-.6.8-1.7.2-2.5s-1.6-.8-2.3-.2z"/>
		<path d="M43.1 30.3H20.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h22.2c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default ArrowAlignV;