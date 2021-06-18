import React from 'react';

function ShieldAlt1(props) {
	const title = props.title || "shield alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 62.7c-1 0-1.9-.2-2.8-.7-2.6-1.3-6.4-3.5-10.3-6.3-5.9-4.3-13-11-13-18.3V13.3c0-2.7 1.7-5 4.3-5.8l20-6c1.1-.3 2.3-.3 3.5 0l20 6c2.6.8 4.3 3.1 4.3 5.8v24.2c0 7.4-7.1 14-13 18.3-3.8 2.8-7.7 4.9-10.3 6.3-.8.4-1.7.6-2.7.6zm0-58c-.2 0-.5 0-.7.1l-20 6c-1.1.3-1.8 1.3-1.8 2.4v24.2c0 4.6 4.1 10.1 11.5 15.5 3.7 2.7 7.4 4.7 9.8 6 .7.4 1.6.4 2.3 0 2.5-1.3 6.2-3.4 9.8-6 7.4-5.4 11.5-10.9 11.5-15.5V13.3c0-1.1-.7-2.1-1.8-2.4l-20-6c-.1-.1-.4-.2-.6-.2z"/>
	</g>
</svg>
	);
};

export default ShieldAlt1;