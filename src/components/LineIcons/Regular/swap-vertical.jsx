import React from 'react';

function SwapVertical(props) {
	const title = props.title || "swap vertical";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M26.9 50.8l-9.2 7.7V19c0-1-.8-1.8-1.8-1.8s-1.6.8-1.6 1.8v39.5l-9.2-7.7c-.7-.6-1.8-.5-2.5.2-.6.7-.5 1.8.2 2.5l9.3 7.8c1.1.9 2.5 1.4 3.8 1.4s2.7-.5 3.8-1.4l9.3-7.8c.7-.6.8-1.7.2-2.5s-1.6-.8-2.3-.2z"/>
		<path d="M61.2 10.5l-9.3-7.8c-2.2-1.9-5.5-1.9-7.7 0l-9.3 7.8c-.7.6-.8 1.7-.2 2.5.3.4.8.6 1.3.6.4 0 .8-.1 1.1-.4l9.2-7.7V45c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V5.5l9.2 7.7c.7.6 1.8.5 2.5-.2.4-.8.3-1.9-.4-2.5z"/>
	</g>
</svg>
	);
};

export default SwapVertical;