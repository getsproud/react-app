import React from 'react';

function TableLamp1(props) {
	const title = props.title || "table lamp 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.5 22.7L45.9 8c-1-4-4.5-6.7-8.6-6.7H26.8c-4.1 0-7.6 2.8-8.6 6.7l-3.7 14.7c-.7 2.7-.1 5.5 1.6 7.6 1.7 2.2 4.3 3.4 7 3.4h7.2v25.5h-5.1c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h13.7c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-5.1V33.8H41c2.8 0 5.3-1.2 7-3.4 1.6-2.2 2.2-5 1.5-7.7zm-4.3 5.5c-1 1.3-2.6 2.1-4.3 2.1H23.1c-1.7 0-3.2-.8-4.3-2.1-1-1.3-1.4-3-1-4.6l3.7-14.7c.6-2.4 2.8-4.1 5.2-4.1h10.5c2.5 0 4.6 1.7 5.2 4.1l3.7 14.7c.5 1.6.1 3.3-.9 4.6z"/>
	</g>
</svg>
	);
};

export default TableLamp1;