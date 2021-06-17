import React from 'react';

function ArrowsShrinkH(props) {
	const title = props.title || "arrows shrink h";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M45.4 19.7c-.6-.7-1.7-.8-2.5-.2-.7.6-.8 1.7-.2 2.5l7 8.3H14.3l7-8.3c.6-.7.5-1.8-.2-2.5-.7-.6-1.8-.5-2.5.2l-7.3 8.7a5.61 5.61 0 0 0 0 7.3l7.3 8.7c.3.4.8.6 1.3.6.4 0 .8-.1 1.1-.4.7-.6.8-1.7.2-2.5l-7-8.3h35.4l-7 8.3c-.6.7-.5 1.8.2 2.5.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6l7.3-8.7c1.8-2.1 1.8-5.2 0-7.3l-7.1-8.7z"/>
		<path d="M61 18c-1 0-1.8.8-1.8 1.8v24.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V19.7c0-1-.8-1.7-1.8-1.7z"/>
		<path d="M3 18c-1 0-1.8.8-1.8 1.8v24.6c.1.9.8 1.6 1.8 1.6s1.8-.8 1.8-1.8V19.7c0-1-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default ArrowsShrinkH;