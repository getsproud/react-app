import React from 'react';

function ChurchAlt(props) {
	const title = props.title || "church alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57.2 36.4H48V29c0-1.9-1-3.7-2.6-4.7l-11.7-7.5V12h2.5c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-2.5V5.5c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v2.9h-2.5c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h2.5v4.9l-11.7 7.5c-1.6 1-2.6 2.8-2.6 4.7v7.4h-9c-3.1 0-5.6 2.5-5.6 5.6v12.7c0 3.1 2.5 5.6 5.6 5.6H57.1c3.1 0 5.6-2.5 5.6-5.6V42c.1-3.1-2.5-5.6-5.5-5.6zM6.8 56.7c-1.2 0-2.1-.9-2.1-2.1V42c0-1.2.9-2.1 2.1-2.1H16v16.8H6.8zm37.7 0h-25V29c0-.7.4-1.4 1-1.8L32 19.9l11.6 7.4c.6.4 1 1 1 1.8v27.6zm14.8-2.1c0 1.2-.9 2.1-2.1 2.1H48V39.9h9.1c1.2 0 2.1.9 2.1 2.1v12.6z"/>
	</g>
</svg>
	);
};

export default ChurchAlt;