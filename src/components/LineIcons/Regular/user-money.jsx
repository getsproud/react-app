import React from 'react';

function UserMoney(props) {
	const title = props.title || "user money";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M30.5 26.6c4.9-1.9 8.4-6.7 8.4-12.2 0-7.2-5.9-13.1-13.1-13.1-7.2 0-13.1 5.9-13.1 13.1 0 5.6 3.5 10.3 8.4 12.2-4.8 1.1-9.2 3.8-12.6 7.8C4 39.7 1.5 47 1.4 55.1c0 .7.4 1.3 1 1.6 2.8 1.4 12.9 6 23.6 6 5.7 0 11-.9 11.3-1 1-.2 1.6-1.1 1.4-2-.2-1-1.1-1.6-2-1.4-.1 0-5.3.9-10.6.9-8.9 0-17.4-3.5-21-5.1.3-6.8 2.5-12.9 6.3-17.4 3.9-4.6 9.1-7.1 14.7-7.1s10.8 2.5 14.7 7.1c.6.7 1.7.8 2.5.2.7-.6.8-1.7.2-2.5-3.8-4-8.2-6.7-13-7.8zM16.1 14.4c0-5.3 4.3-9.6 9.6-9.6s9.6 4.3 9.6 9.6S31 24 25.7 24s-9.6-4.3-9.6-9.6z"/>
		<path d="M56.4 46.8h-6.2c-1.6 0-2.9-1.2-2.9-2.7 0-1.5 1.3-2.7 2.9-2.7h9.1c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-3.5V37c0-1-.8-1.8-1.8-1.8s-1.6.8-1.6 1.8v.9h-2.2c-3.5 0-6.4 2.8-6.4 6.2 0 3.4 2.9 6.2 6.4 6.2h6.2c1.6 0 2.9 1.2 2.9 2.7s-1.3 2.7-2.9 2.7H46c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h6.4v.9c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-.9h.5c3.5 0 6.4-2.8 6.4-6.2s-3-6.3-6.5-6.3z"/>
	</g>
</svg>
	);
};

export default UserMoney;