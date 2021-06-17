import React from 'react';

function ArrowsShrinkV(props) {
	const title = props.title || "arrows shrink v";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M42.1 21.3c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.5-1.8-.2-2.5l-8.7-7.3a5.61 5.61 0 0 0-7.3 0l-8.7 7.3c-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.5.2l8.3-7v35.4l-8.3-7c-.7-.6-1.8-.5-2.5.2-.6.7-.5 1.8.2 2.5l8.7 7.3c1.1.9 2.4 1.3 3.7 1.3 1.3 0 2.6-.4 3.7-1.3l8.7-7.3c.7-.6.8-1.7.2-2.5-.6-.7-1.7-.8-2.5-.2l-8.3 7V14.3l8.3 7z"/>
		<path d="M19.7 4.8h24.6c1 0 1.7-.8 1.7-1.8s-.8-1.8-1.8-1.8H19.7C18.7 1.3 18 2 18 3s.7 1.8 1.7 1.8z"/>
		<path d="M44.3 59.3H19.7c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h24.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default ArrowsShrinkV;