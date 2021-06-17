import React from 'react';

function Forrest(props) {
	const title = props.title || "forrest";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.9 21.1c3.4 0 6.3-2.8 6.3-6.3s-2.8-6.3-6.3-6.3-6.3 2.8-6.3 6.3 2.9 6.3 6.3 6.3zm0-9c1.5 0 2.8 1.2 2.8 2.8s-1.2 2.8-2.8 2.8-2.8-1.2-2.8-2.8 1.3-2.8 2.8-2.8z"/>
		<path d="M61 51.9h-3.4L45.9 23.8c-.9-2.1-2.8-3.4-5.1-3.4s-4.2 1.3-5 3.4l-5.7 14-4.6-10.9c-.9-2.1-2.8-3.3-5.1-3.4-2.3 0-4.2 1.3-5 3.4l-10.2 25H3c-1 0-1.8.8-1.8 1.8S2 55.4 3 55.4h58c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7zM39 25.2c.5-1.1 1.5-1.2 1.8-1.2.3 0 1.4.1 1.8 1.2L53.8 52H42.7v-2.4c2-.9 3.3-3.3 3.3-6.3 0-3.7-2.3-6.7-5.1-6.7s-5.1 2.9-5.1 6.7c0 3 1.4 5.4 3.4 6.3V52h-3.3l-4-9.5L39 25.2zm1.9 21.2c-.7 0-1.6-1.2-1.6-3.2s1-3.2 1.6-3.2 1.6 1.2 1.6 3.2-.9 3.2-1.6 3.2zM18.6 28.3c.5-1.1 1.5-1.2 1.8-1.2.3 0 1.4.1 1.8 1.2L32.1 52H8.9l9.7-23.7z"/>
	</g>
</svg>
	);
};

export default Forrest;