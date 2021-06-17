import React from 'react';

function LockAlt1(props) {
	const title = props.title || "lock alt 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M43.8 21.1V13c0-3.2-1.2-6.1-3.4-8.3-2.2-2.2-5.2-3.5-8.3-3.5-3.7 0-7 1.7-9.3 4.6-.6.8-.5 1.9.3 2.5.8.6 1.9.5 2.5-.3 1.6-2 4-3.2 6.5-3.2 2.2 0 4.3.9 5.9 2.4 1.6 1.6 2.4 3.7 2.4 5.9v6.3c-2.6-1-5.4-1.6-8.3-1.6-12.4 0-22.4 10.1-22.4 22.5s10.1 22.5 22.4 22.5 22.4-10.1 22.4-22.5c-.1-8.1-4.3-15.2-10.7-19.2zM32 59.3c-10.4 0-18.9-8.5-18.9-19s8.5-19 18.9-19 18.9 8.5 18.9 19-8.5 19-18.9 19z"/>
		<path d="M32 40.5c-1 0-1.8.8-1.8 1.8V51c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-8.7c0-1.1-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default LockAlt1;