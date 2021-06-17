import React from 'react';

function ArrowsBreakV(props) {
	const title = props.title || "arrows break v";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M21.1 13.2l9.2-7.7V24h-9.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h23.3c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-9.9V5.5l9.2 7.7c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.5-1.8-.2-2.5l-9.3-7.8c-2.2-1.9-5.5-1.9-7.7 0l-9.3 7.8c-.7.6-.8 1.7-.2 2.5.5.7 1.6.8 2.4.2z"/>
		<path d="M42.9 50.8l-9.2 7.7V40.1h9.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H20.3c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h9.9v18.5L21 50.9c-.7-.6-1.8-.5-2.5.2-.6.7-.5 1.8.2 2.5l9.3 7.8c1.1.9 2.5 1.4 3.9 1.4s2.7-.5 3.9-1.4l9.3-7.8c.7-.6.8-1.7.2-2.5s-1.6-.9-2.4-.3z"/>
	</g>
</svg>
	);
};

export default ArrowsBreakV;