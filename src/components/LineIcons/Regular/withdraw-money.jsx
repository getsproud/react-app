import React from 'react';

function WithdrawMoney(props) {
	const title = props.title || "withdraw money";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M55.9 1.3H8.1C5 1.3 2.5 3.8 2.5 6.9v20.8c0 3.1 2.5 5.6 5.6 5.6h7c-.3.5-.6.9-.9 1.4-3.3 4.7-5.1 10.2-5.1 15.9v6.6c0 3.1 2.5 5.6 5.6 5.6h16.7c3.1 0 5.6-2.5 5.6-5.6v-6.6c0-5 1.5-9.8 4.4-13.9.8-1.1 1.5-2.2 2.1-3.4h12.3c3.1 0 5.6-2.5 5.6-5.6V6.9c.1-3.1-2.4-5.6-5.5-5.6zM18.6 21.6h-1.4c-1.2 0-2.1-.9-2.1-2.1V15c0-1.2.9-2.1 2.1-2.1h1.5v7.8c-.1.3-.1.6-.1.9zm15 28.9v6.6c0 1.2-.9 2.1-2.1 2.1H14.7c-1.2 0-2.1-.9-2.1-2.1v-6.6c0-5 1.5-9.8 4.4-13.9 1-1.4 1.8-2.8 2.5-4.4 0-.1.1-.1.1-.2 1.2-2.7 2-5.5 2.3-8.4 0-.1.1-.3.1-.4.1-.8.1-1.7.1-2.5v-7.8h21v7.8c0 5-1.5 9.8-4.4 13.9-3.4 4.7-5.1 10.2-5.1 15.9zm13-29.8v-7.8h1.5c1.2 0 2.1.9 2.1 2.1v4.4c0 1.2-.9 2.1-2.1 2.1h-1.6c.1-.2.1-.5.1-.8zM58 27.6c0 1.2-.9 2.1-2.1 2.1H45c.5-1.5.9-3.1 1.2-4.7h1.9c3.1 0 5.6-2.5 5.6-5.6V15c0-3.1-2.5-5.6-5.6-5.6h-31c-3.1 0-5.6 2.5-5.6 5.6v4.4c0 3.1 2.5 5.6 5.6 5.6h1.1c-.3 1.6-.7 3.2-1.3 4.7H8.1C7 29.7 6 28.8 6 27.6V6.9c0-1.2 1-2.1 2.1-2.1h47.8c1.1 0 2.1.9 2.1 2.1v20.7z"/>
		<path d="M27.9 30.1c-3 0-5.3 2.9-5.3 6.6s2.3 6.6 5.3 6.6 5.3-2.9 5.3-6.6-2.4-6.6-5.3-6.6zm0 9.6c-.9 0-1.8-1.3-1.8-3.1s1-3.1 1.8-3.1c.9 0 1.8 1.3 1.8 3.1s-1 3.1-1.8 3.1z"/>
		<path d="M26.8 22.6c1 0 1.8-.8 1.8-1.8v-3.6c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v3.6c.1 1 .8 1.8 1.8 1.8z"/>
		<path d="M28.1 48.9c-1 0-1.8.8-1.8 1.8v3.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-3.6c-.1-1-.8-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default WithdrawMoney;