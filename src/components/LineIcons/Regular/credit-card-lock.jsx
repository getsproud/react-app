import React from 'react';

function CreditCardLock(props) {
	const title = props.title || "credit card lock";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58.4 44.3h-2.3v-3.7c0-3.9-3.2-7.1-7.1-7.1s-7.1 3.2-7.1 7.1v3.7h-2.3c-1 0-1.8.8-1.8 1.8v11c0 1 .8 1.8 1.8 1.8h18.9c1 0 1.8-.8 1.8-1.8V46c-.2-.9-.9-1.7-1.9-1.7zm-13.1-3.8c0-2 1.6-3.6 3.6-3.6s3.6 1.6 3.6 3.6v3.7h-7.2v-3.7zm11.3 14.8H41.3v-7.5h15.4v7.5z"/>
		<path d="M56 5.2H8c-3.7 0-6.8 3-6.8 6.8v29.1c0 3.7 3 6.8 6.8 6.8h17.6c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H8c-1.8 0-3.3-1.5-3.3-3.3V28h54.5v3c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V12c0-3.7-3.1-6.8-6.8-6.8zM8 8.7h48c1.8 0 3.3 1.5 3.3 3.3v2.9H4.8V12c0-1.8 1.4-3.3 3.2-3.3zM4.8 24.5v-6.1h54.5v6.1H4.8z"/>
	</g>
</svg>
	);
};

export default CreditCardLock;