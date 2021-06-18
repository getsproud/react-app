import React from 'react';

function Lighthouse(props) {
	const title = props.title || "lighthouse";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46 18c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2C43.2 9 39 4.8 33.6 4V3c0-1-.8-1.8-1.7-1.8S30.2 2 30.2 3v1.2c-5.4.8-9.6 5-10.4 10.4H18c-1 0-1.8.8-1.8 1.8S17.1 18 18 18h1.6v22.3L17 60.7c-.1.5.1 1 .4 1.4.3.4.8.6 1.3.6h8.7c.1 0 .3.1.4.1H36c.1 0 .3 0 .4-.1h8.7c.5 0 1-.2 1.3-.6.3-.4.5-.9.4-1.4l-2.7-20.4V18H46zm-22.8 0h17.5v20.7H23.2V18zm8.7-10.5c4.2 0 7.8 3 8.6 7H23.3c.8-4 4.4-7 8.6-7zm2.4 51.7h-4.7v-4.5c0-.7.6-1.3 1.3-1.3H33c.7 0 1.3.6 1.3 1.3v4.5zm3.5 0v-4.5c0-2.6-2.1-4.8-4.8-4.8h-2.1c-2.6 0-4.8 2.1-4.8 4.8v4.5h-5.4l2.3-17h17.9l2.3 17h-5.4z"/>
		<path d="M31.9 22.8c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 6.5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
	</g>
</svg>
	);
};

export default Lighthouse;