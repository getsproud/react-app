import React from 'react';

function Table2(props) {
	const title = props.title || "table 2";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M46.9 9.8H17.1c-8.7 0-15.8 7.1-15.8 15.8v2.3c0 1 .8 1.8 1.8 1.8h6.5v22.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V29.7H18V43c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V29.7h21.3V43c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V29.7H51v22.8c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V29.7H61c1 0 1.8-.8 1.8-1.8v-2.3c0-8.7-7.2-15.8-15.9-15.8zm12.4 16.4H4.8v-.6c0-6.8 5.5-12.3 12.3-12.3h29.8c6.8 0 12.3 5.5 12.3 12.3v.6z"/>
	</g>
</svg>
	);
};

export default Table2;