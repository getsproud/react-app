import React from 'react';

function Profit(props) {
	const title = props.title || "profit";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M13 40.2h-2.5c-3.7 0-6.7 3-6.7 6.7V56c0 3.7 3 6.7 6.7 6.7H13c3.7 0 6.7-3 6.7-6.7v-9c0-3.8-3-6.8-6.7-6.8zm-2.5 3.5H13c1.8 0 3.2 1.4 3.2 3.2v2.8H7.3V47c0-1.8 1.4-3.3 3.2-3.3zM13 59.3h-2.5c-1.8 0-3.2-1.4-3.2-3.2v-2.8h8.9V56c0 1.8-1.4 3.3-3.2 3.3z"/>
		<path d="M33.2 33.7h-2.5c-3.7 0-6.7 3-6.7 6.7V56c0 3.7 3 6.7 6.7 6.7h2.5c3.7 0 6.7-3 6.7-6.7V40.4c.1-3.7-3-6.7-6.7-6.7zm-5.7 12.1h8.9v4h-8.9v-4zm3.3-8.6h2.5c1.8 0 3.2 1.4 3.2 3.2v1.8h-8.9v-1.8c-.1-1.7 1.4-3.2 3.2-3.2zm2.4 22.1h-2.5c-1.8 0-3.2-1.4-3.2-3.2v-2.8h8.9V56c.1 1.8-1.4 3.3-3.2 3.3z"/>
		<path d="M53.5 23.2H51c-3.7 0-6.7 3-6.7 6.7V56c0 3.7 3 6.7 6.7 6.7h2.5c3.7 0 6.7-3 6.7-6.7V29.9c0-3.7-3-6.7-6.7-6.7zm-5.7 12.7h8.9v4.6h-8.9v-4.6zm0 8.1h8.9v4.6h-8.9V44zM51 26.7h2.5c1.8 0 3.2 1.4 3.2 3.2v2.4h-8.9v-2.4c0-1.7 1.4-3.2 3.2-3.2zm2.5 32.6H51c-1.8 0-3.2-1.4-3.2-3.2v-4h8.9v4c0 1.7-1.4 3.2-3.2 3.2z"/>
		<path d="M53.5 14h-5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h2.8v.4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-.7c1.7-.5 3-2.1 3-4V13c0-2.3-1.9-4.2-4.2-4.2H51c-.4 0-.7-.3-.7-.7v-.4c-.1-.4.3-.7.7-.7h5c1 0 1.8-.8 1.8-1.8S57 3.5 56 3.5h-1.3V3c0-1-.8-1.8-1.8-1.8S51.2 2 51.2 3v.5H51c-2.3 0-4.2 1.9-4.2 4.2V8c0 2.3 1.9 4.2 4.2 4.2h2.5c.4 0 .7.3.7.7v.2c.1.6-.3.9-.7.9z"/>
	</g>
</svg>
	);
};

export default Profit;