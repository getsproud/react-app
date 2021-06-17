import React from 'react';

function YogaMat2(props) {
	const title = props.title || "yoga mat 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.7 9.6H22.2c-1.8-3.6-5.6-6.1-9.9-6.1-6.1 0-11.1 5-11.1 11.1v34.7c0 6.1 5 11.1 11.1 11.1H56.6c3.4 0 6.1-2.7 6.1-6.1V15.7c.1-3.4-2.7-6.1-6-6.1zM12.4 7c4.2 0 7.6 3.4 7.6 7.6v26.7c-2-1.9-4.7-3-7.6-3-2.9 0-5.6 1.2-7.6 3V14.6c0-4.2 3.4-7.6 7.6-7.6zM4.8 49.4c0-4.2 3.4-7.6 7.6-7.6s7.6 3.4 7.6 7.6-3.4 7.6-7.6 7.6-7.6-3.4-7.6-7.6zm54.5 5c0 1.4-1.2 2.6-2.6 2.6H20.4c1.9-2 3-4.7 3-7.6V14.6c0-.5 0-1-.1-1.5h33.3c1.4 0 2.6 1.2 2.6 2.6v38.7z"/>
	</g>
</svg>
	);
};

export default YogaMat2;