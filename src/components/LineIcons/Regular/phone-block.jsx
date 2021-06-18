import React from 'react';

function PhoneBlock(props) {
	const title = props.title || "phone block";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50.4 25.7c3.2 0 6.2-1.2 8.4-3.5 4.6-4.6 4.6-12.2 0-16.8C56.6 3.2 53.6 2 50.4 2S44.2 3.2 42 5.5c-4.6 4.6-4.6 12.2 0 16.8 2.2 2.2 5.2 3.4 8.4 3.4zm5.9-5.9c-1.6 1.6-3.7 2.5-5.9 2.5-1.6 0-3.2-.5-4.6-1.4L57.4 9.3c2.1 3.2 1.8 7.6-1.1 10.5zM44.5 7.9c1.6-1.6 3.7-2.5 5.9-2.5 1.6 0 3.2.5 4.6 1.4L43.4 18.4c-2.1-3.3-1.8-7.6 1.1-10.5z"/>
		<path d="M60.9 45.3l-9.1-6.1c-2-1.3-4.5-.7-6 1.5L43.4 44c-.2.3-.6.4-.8.2-12.3-7.7-20-18.5-22.7-22.7-.2-.3-.1-.7.2-.9l3.7-2.6c1.9-1.3 2.3-3.9 1.1-5.7l-6.1-9.1c-1.2-1.8-3.7-2.4-5.6-1.3L4.4 7c-.2.1-.3.1-.4.3-6.8 6.7-.5 23.6 14.3 38.4 6.9 6.9 14.5 12.2 21.5 15 3.5 1.4 6.6 2.1 9.3 2.1 3.1 0 5.7-.9 7.6-2.8l.3-.3 5.2-8.7c1.1-2 .5-4.5-1.3-5.7zm-1.8 3.8l-5 8.5c-2.4 2.2-7.1 2.1-13-.2-6.6-2.6-13.8-7.7-20.4-14.2C6.6 29.1 1.9 14.7 6.3 9.9l8.5-5c.3-.2.7-.1.9.2l6.1 9.1c.2.3.1.7-.2.9L18 17.7c-1.8 1.3-2.3 3.7-1.1 5.6 2.9 4.5 10.9 15.7 23.8 23.8 1.9 1.2 4.3.7 5.6-1.2l2.3-3.3c.2-.2.7-.9 1.2-.6l9.1 6.1c.3.3.4.7.2 1z"/>
	</g>
</svg>
	);
};

export default PhoneBlock;