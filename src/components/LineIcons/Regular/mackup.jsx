import React from 'react';

function Mackup(props) {
	const title = props.title || "mackup";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M20.7 40v-6.1c7.3-.9 13-7.1 13-14.6 0-8.1-6.6-14.7-14.7-14.7S4.3 11.2 4.3 19.3c0 7.5 5.7 13.8 13 14.6V40c-9.1.5-16 4.6-16 9.7 0 5.5 7.8 9.7 17.7 9.7s17.7-4.3 17.7-9.7c0-5.1-6.9-9.2-16-9.7zm-13-20.7c0-6.2 5-11.2 11.2-11.2s11.2 5 11.2 11.2c0 6.2-5 11.2-11.2 11.2s-11.2-5-11.2-11.2zM19 55.9c-8.4 0-14.2-3.3-14.2-6.2s5.8-6.2 14.2-6.2 14.2 3.3 14.2 6.2-5.9 6.2-14.2 6.2z"/>
		<path d="M62.1 7.7c-.6-.8-1.5-1.2-2.5-1.2H48.1c-1 0-1.9.4-2.5 1.2s-.8 1.7-.6 2.7l2.9 11.2c.2.8.9 1.3 1.7 1.3h2.5v33.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V22.8h2.5c.8 0 1.5-.5 1.7-1.3l2.9-11.2c.1-.9-.1-1.9-.7-2.6zm-5.4 11.6H51L48.6 10h10.6l-2.5 9.3z"/>
	</g>
</svg>
	);
};

export default Mackup;