import React from 'react';

function Kayak(props) {
	const title = props.title || "kayak";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61.9 53l-7.7-7.7c-.7-.7-1.8-.7-2.5 0l-2 2-5.1-5.1 5.6-5.6c6.6-6.6 9.2-16.8 7.3-28.7-.1-.7-.7-1.3-1.5-1.5-12-1.9-22.2.7-28.7 7.2l-5.6 5.6-5.1-5.1 2-2c.7-.7.7-1.8 0-2.5L11 2.1C9.1.2 6.1.2 4.3 2.1L2.1 4.2C.2 6.1.2 9.1 2.1 10.9l7.7 7.7c.3.3.8.5 1.2.5s.9-.2 1.2-.5l2-2 5.1 5.1-5.6 5.6C7.1 34 4.6 44.1 6.4 56.1c.1.8.7 1.3 1.5 1.5 2.6.4 5 .6 7.4.6 8.7 0 16.1-2.7 21.2-7.8l5.6-5.6 5.1 5.1-2 2c-.7.7-.7 1.8 0 2.5l7.7 7.7c.9.9 2.1 1.4 3.4 1.4 1.2 0 2.4-.5 3.4-1.4l2.2-2.2c1.9-2 1.9-5 0-6.9zM11 15L4.5 8.5C4 8 4 7.2 4.5 6.7l2.2-2.2c.3-.2.6-.3.9-.3.3 0 .6.1.9.4L15 11l-4 4zm18.9 1.2c5.5-5.5 14.1-7.8 24.4-6.4 1.4 10.2-.9 18.9-6.5 24.4l-5.6 5.6-4.3-4.3c1-1.4 1.7-2.8 2.1-4.2.6-2.4.2-4.6-1.2-6-1.4-1.4-3.6-1.8-6-1.2-1.4.4-2.9 1.1-4.2 2.1l-4.3-4.3 5.6-5.7zm-3.6 18.5c.4-1.5 1.4-3.2 2.8-4.5 1.4-1.4 3-2.4 4.5-2.8.4-.1.8-.2 1.2-.2.6 0 1.1.2 1.4.5.5.5.6 1.5.3 2.7-.4 1.5-1.4 3.2-2.8 4.5-1.4 1.4-3 2.4-4.5 2.8-1.2.3-2.2.2-2.7-.3s-.5-1.5-.2-2.7zm7.8 13.2c-5.5 5.5-14.1 7.7-24.4 6.4-1.3-10.3.9-18.9 6.4-24.4l5.6-5.6 4.2 4.2c-1.5 1.7-2.6 3.6-3 5.4-.6 2.4-.2 4.6 1.2 6 1 1 2.4 1.5 3.9 1.5.7 0 1.3-.1 2.1-.3 1.9-.5 3.8-1.5 5.4-3l4.2 4.2-5.6 5.6zm25.4 9.4l-2.2 2.2c-.5.5-1.3.5-1.8 0L49 53l4-4 6.5 6.5c.5.5.5 1.3 0 1.8z"/>
	</g>
</svg>
	);
};

export default Kayak;