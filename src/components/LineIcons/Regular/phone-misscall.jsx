import React from 'react';

function PhoneMisscall(props) {
	const title = props.title || "phone misscall";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.3 3.5c-.7-.7-1.8-.7-2.5-.1l-12.7 12-4.5-4.2H46c1 0 1.8-.8 1.8-1.8S47 7.8 46 7.8h-7.5c-1 0-1.8.8-1.8 1.8V17c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3.2l5.6 5.3c.3.3.8.5 1.2.5s.9-.2 1.2-.5L62.2 6c.7-.7.7-1.8.1-2.5z"/>
		<path d="M60.3 45.2l-9.1-6.1c-2-1.3-4.5-.7-6 1.5L43 43.8c-.2.3-.5.3-.8.2C30 36.4 22.4 25.7 19.7 21.5c-.2-.3-.1-.6.2-.8l3.7-2.5c1.8-1.3 2.3-3.8 1.1-5.7l-6.1-9.1C17.3 1.6 14.9 1 13 2.1L4.3 7.2l-.3.3c-6.7 6.7-.5 23.4 14.2 38.1 6.8 6.8 14.4 12.1 21.3 14.8 3.4 1.4 6.6 2 9.3 2 3.1 0 5.7-.9 7.5-2.7l.3-.3 5.1-8.6c1-2 .4-4.4-1.4-5.6zM58.6 49l-5 8.4c-2.4 2.2-7 2.1-12.8-.2-6.5-2.6-13.7-7.6-20.1-14.1-14-14-18.6-28.2-14.3-33l8.4-5c.2-.1.6 0 .8.2l6.1 9.1c.2.3.1.7-.2.9l-3.7 2.5c-1.8 1.3-2.3 3.7-1.1 5.6C19.6 27.8 27.6 39 40.4 47c1.8 1.2 4.3.6 5.5-1.2l2.3-3.3c.2-.2.7-.9 1.2-.6l9.1 6.1c.1.3.2.7.1 1z"/>
	</g>
</svg>
	);
};

export default PhoneMisscall;