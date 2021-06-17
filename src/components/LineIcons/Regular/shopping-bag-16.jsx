import React from 'react';

function ShoppingBag16(props) {
	const title = props.title || "shopping bag 16";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.7 54.7l-4.2-36.4c-.4-3.6-3.5-6.4-7.2-6.4h-2.8v-.1C42.5 6 37.8 1.3 32 1.3S21.5 6 21.5 11.8v.1h-2.8c-3.7 0-6.7 2.7-7.2 6.4L7.3 54.7c-.2 2 .4 4.1 1.8 5.6s3.3 2.4 5.4 2.4h35.1c2.1 0 4-.9 5.4-2.4 1.3-1.5 1.9-3.5 1.7-5.6zM25 11.8c0-3.9 3.2-7 7-7 3.9 0 7 3.2 7 7v.1H25v-.1zm-10 6.9c.2-1.9 1.8-3.3 3.7-3.3h26.7c1.9 0 3.5 1.4 3.7 3.3l3 26.4H11.9L15 18.7zM52.3 58c-.7.8-1.7 1.2-2.8 1.2h-35c-1.1 0-2.1-.4-2.8-1.2-.7-.8-1-1.8-.9-2.9l.8-6.6h41l.8 6.6c0 1.1-.4 2.1-1.1 2.9z"/>
	</g>
</svg>
	);
};

export default ShoppingBag16;