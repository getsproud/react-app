import React from 'react';

function MoneyBag2(props) {
	const title = props.title || "money bag 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 12.3H7c-3.2 0-5.8 2.6-5.8 5.8v28c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V18c0-3.2-2.6-5.7-5.8-5.7zm2.3 25.9H48.9c-.6 0-1.1-.5-1.1-1.1V26.9c0-.6.5-1.1 1.1-1.1h10.4v12.4zM57 48.3H7c-1.2 0-2.3-1-2.3-2.3V18c0-1.2 1-2.3 2.3-2.3h50c1.2 0 2.3 1 2.3 2.3v4.3H48.9c-2.5 0-4.6 2-4.6 4.6v10.3c0 2.5 2 4.6 4.6 4.6h10.4V46c0 1.2-1.1 2.3-2.3 2.3z"/>
		<path d="M54.1 34c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2c.1 1.1 1 2 2 2z"/>
	</g>
</svg>
	);
};

export default MoneyBag2;