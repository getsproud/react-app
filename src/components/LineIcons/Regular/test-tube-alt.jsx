import React from 'react';

function TestTubeAlt(props) {
	const title = props.title || "test tube alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.4 40.9l-32-32.8 3.8-3.9c.7-.7.7-1.8 0-2.5s-1.8-.7-2.5 0l-4 4.1c-1.2 1.2-1.2 3.2 0 4.4l21.7 22.2c-2.4 2.6-6.5 6.1-8.8 5.5-4-1.1-7 1.3-8.6 3.1L10.9 23.6c-.6-.6-1.4-1-2.3-1-.9 0-1.7.3-2.3 1l-4 4.1c-.7.7-.7 1.8 0 2.5s1.8.7 2.5 0l3.7-3.8 32 32.7c2.4 2.4 5.5 3.8 8.9 3.8 3.4 0 6.5-1.3 8.9-3.8 5-5.1 5-13.2.1-18.2zm-2.5 15.6c-1.7 1.7-4 2.7-6.4 2.7-2.4 0-4.7-1-6.4-2.7L30.4 43.6c1-1.2 2.9-2.8 5.2-2.2 4.5 1.2 9.8-3.7 12.2-6.4l8.1 8.3c3.6 3.7 3.6 9.6 0 13.2z"/>
	</g>
</svg>
	);
};

export default TestTubeAlt;