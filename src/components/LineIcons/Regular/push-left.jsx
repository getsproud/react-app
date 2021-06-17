import React from 'react';

function PushLeft(props) {
	const title = props.title || "push left";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 30.8H17.4l7.5-9c.6-.7.5-1.8-.2-2.5-.7-.6-1.8-.5-2.5.2l-7.7 9.2a5.78 5.78 0 0 0 0 7.6l7.7 9.2c.3.4.8.6 1.3.6.4 0 .8-.1 1.1-.4.7-.6.8-1.7.2-2.5l-7.5-9H61c1 0 1.8-.8 1.8-1.7s-.8-1.7-1.8-1.7z"/>
		<path d="M3 17.2c-1 0-1.8.8-1.8 1.8v26.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V18.9c0-1-.8-1.7-1.8-1.7z"/>
	</g>
</svg>
	);
};

export default PushLeft;