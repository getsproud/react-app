import React from 'react';

function PushUp(props) {
	const title = props.title || "push up";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M35.2 14.5a5.78 5.78 0 0 0-7.6 0l-9.2 7.7c-.7.6-.8 1.7-.2 2.5.6.7 1.7.8 2.5.2l9-7.5V61c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V17.4l9 7.5c.3.3.7.4 1.1.4.5 0 1-.2 1.3-.6.6-.7.5-1.8-.2-2.5l-9.3-7.7z"/>
		<path d="M45.1 1.3H18.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h26.2c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default PushUp;