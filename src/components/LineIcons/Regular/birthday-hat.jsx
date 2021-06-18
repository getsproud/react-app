import React from 'react';

function BirthdayHat(props) {
	const title = props.title || "birthday hat";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M60.3 56.1L47.8 33.6c0-.1-.1-.1-.1-.2l-5.9-10.7s0-.1-.1-.1l-5.1-9.1C38 12.2 39 10.3 39 8.3c0-3.9-3.2-7-7-7s-7 3.2-7 7c0 2.1.9 3.9 2.4 5.2L3.7 56.1c-.7 1.4-.7 3 .1 4.4.8 1.4 2.3 2.2 3.9 2.2h48.6c1.6 0 3.1-.8 3.9-2.2.8-1.4.9-3 .1-4.4zM20.5 33l19-7.3 4.3 7.7-30 11.7L20.5 33zM32 4.8c1.9 0 3.5 1.6 3.5 3.5 0 1.4-.8 2.6-2 3.2-.5.2-1 .4-1.5.4-1.9 0-3.5-1.6-3.5-3.5s1.6-3.6 3.5-3.6zm0 10.5c.5 0 1.1-.1 1.6-.2l4.2 7.6-14.6 5.6 7.3-13.2c.4.1 1 .2 1.5.2zM6.8 58.8c-.1-.1-.3-.5 0-1l4.3-7.8 34.4-13.5 4 7.3-37.4 15.4H7.7c-.6 0-.8-.3-.9-.4zm50.4 0c-.1.1-.3.5-.9.5h-35L51.2 47l6 10.8c.3.4.1.8 0 1z"/>
	</g>
</svg>
	);
};

export default BirthdayHat;