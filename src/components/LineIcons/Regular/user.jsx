import React from 'react';

function User(props) {
	const title = props.title || "user";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.4 34.5c-3.4-4.1-7.8-6.8-12.6-7.8 4.9-1.9 8.4-6.7 8.4-12.2 0-7.2-5.9-13.1-13.1-13.1C24.9 1.4 19 7.3 19 14.5c0 5.6 3.5 10.3 8.4 12.2-4.8 1.1-9.2 3.8-12.6 7.8-4.5 5.3-7 12.7-7.1 20.7 0 .7.4 1.3 1 1.6 2.8 1.4 12.8 6 23.6 6 11.6 0 21-4.6 23.6-6 .6-.3.9-.9.9-1.6-.4-8-2.9-15.4-7.4-20.7zm-27-20.1c0-5.3 4.3-9.6 9.6-9.6s9.6 4.3 9.6 9.6S37.3 24 32 24s-9.6-4.3-9.6-9.6zM32 59.3c-9 0-17.8-3.6-21-5.1.3-6.8 2.5-12.9 6.3-17.4 3.9-4.6 9.1-7.1 14.7-7.1s10.8 2.5 14.7 7.1c3.8 4.5 6 10.6 6.3 17.4-3.3 1.6-11.3 5.1-21 5.1z"/>
	</g>
</svg>
	);
};

export default User;