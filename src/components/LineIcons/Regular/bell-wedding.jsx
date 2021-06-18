import React from 'react';

function BellWedding(props) {
	const title = props.title || "bell wedding";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M54 52.3l-3.2-6.5V29.4c0-5.1-2-9.6-5.3-13 4.7-1.6 7.6-5.9 6.5-9.9-1.2-4.1-6.2-6.2-11.2-4.8-3.4 1-6.9 5.3-8.7 7.8-1.8-2.5-5.3-6.8-8.7-7.8-5-1.4-10 .7-11.2 4.8-1.1 4 1.8 8.3 6.5 9.9-3.3 3.4-5.3 8-5.3 13v16l-3.3 7c-.4.9-.3 1.8.2 2.6s1.4 1.3 2.3 1.3h11c1 3.7 4.5 6.5 8.5 6.5s7.5-2.7 8.5-6.5h11c1 0 1.8-.5 2.3-1.3.5-.8.5-1.8.1-2.7zM41.7 5.1c3.1-.9 6.2.2 6.9 2.4.6 2.2-1.5 4.8-4.6 5.7-.4.1-1.3.2-2.6 0-1.9-1.1-3.9-1.8-6.1-2.2 1.8-2.6 4.5-5.4 6.4-5.9zM15.4 7.5c.6-2.2 3.8-3.3 6.9-2.4 1.9.5 4.6 3.4 6.5 5.9-2.2.4-4.2 1.1-6.1 2.2-1.4.2-2.2.1-2.7 0-3.1-.9-5.2-3.5-4.6-5.7zM32 59.3c-2.1 0-3.9-1.2-4.8-3h9.5c-.8 1.7-2.6 3-4.7 3zm-18.3-6.5l3.2-6.7V29.4c0-8.4 6.8-15.2 15.2-15.2 8.4 0 15.2 6.8 15.2 15.2v16.3c0 .2 0 1 .4 1.7l2.7 5.4H13.7z"/>
	</g>
</svg>
	);
};

export default BellWedding;