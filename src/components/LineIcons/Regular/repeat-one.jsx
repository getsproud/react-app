import React from 'react';

function RepeatOne(props) {
	const title = props.title || "repeat one";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 44.2h-4.4c.5-.2.9-.5 1.1-1 1.5-3.6 2.2-7.3 2.2-11.2 0-16.2-13.2-29.3-29.3-29.3C14.4 2.7 1.3 15.8 1.3 32c0 16.2 13.2 29.3 29.3 29.3 3.9 0 7.7-.7 11.2-2.2.9-.4 1.3-1.4.9-2.3-.4-.9-1.4-1.3-2.3-.9-3.1 1.3-6.5 2-9.9 2C16.3 57.8 4.8 46.2 4.8 32S16.4 6.2 30.6 6.2c14.2 0 25.8 11.6 25.8 25.8 0 3.4-.7 6.7-2 9.9-.4.9.1 1.9.9 2.3h.1H54l-1.7-7c-.2-.9-1.2-1.5-2.1-1.3-.9.2-1.5 1.2-1.3 2.1l2 8.3c.2.8.9 1.3 1.7 1.3H61c1 0 1.8-.8 1.8-1.8s-.8-1.6-1.8-1.6z"/>
		<path d="M31.7 45.7c1 0 1.7-.8 1.7-1.8V23c0-1.2-.7-2.3-1.8-2.8s-2.4-.4-3.3.4l-5.6 4.7c-.7.6-.9 1.7-.2 2.5.6.7 1.7.8 2.5.2l5-4.1v20.2c0 .8.8 1.6 1.7 1.6z"/>
	</g>
</svg>
	);
};

export default RepeatOne;