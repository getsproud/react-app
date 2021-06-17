import React from 'react';

function CreditCard(props) {
	const title = props.title || "credit card";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 10.9H7c-3.2 0-5.8 2.6-5.8 5.8v30.7c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V16.7c0-3.2-2.6-5.8-5.8-5.8zM7 14.4h50c1.2 0 2.3 1 2.3 2.3V23H4.8v-6.3c0-1.3 1-2.3 2.2-2.3zm52.3 12.1v5.1H4.8v-5.1h54.5zM57 49.6H7c-1.2 0-2.3-1-2.3-2.3V35.1h54.5v12.3c.1 1.2-1 2.2-2.2 2.2z"/>
	</g>
</svg>
	);
};

export default CreditCard;