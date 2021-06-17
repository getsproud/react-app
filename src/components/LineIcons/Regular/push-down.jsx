import React from 'react';

function PushDown(props) {
	const title = props.title || "push down";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M28.8 49.5c1.1.9 2.5 1.4 3.8 1.4s2.7-.5 3.8-1.4l9.2-7.7c.7-.6.8-1.7.2-2.5-.6-.7-1.7-.8-2.5-.2l-9 7.5V3c0-1-.8-1.8-1.7-1.8S30.8 2 30.8 3v43.6l-9-7.5c-.7-.6-1.8-.5-2.5.2-.6.7-.5 1.8.2 2.5l9.3 7.7z"/>
		<path d="M45.1 59.3H18.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h26.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default PushDown;