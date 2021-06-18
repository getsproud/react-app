import React from 'react';

function BarCodeSearch(props) {
	const title = props.title || "bar code search";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M6.6 1.2c-1 0-1.8.8-1.8 1.8v58c0 1 .8 1.8 1.8 1.8S8.3 62 8.3 61V3c0-1-.7-1.8-1.7-1.8z"/>
		<path d="M17.8 1.2c-1 0-1.8.8-1.8 1.8v41.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V3c-.1-1-.8-1.8-1.8-1.8z"/>
		<path d="M58.6 49.2l-8.1-8.1c2.5-3.3 3.4-7.5 2.6-11.4V3c0-1-.8-1.8-1.8-1.8S49.6 2 49.6 3v20.1l-.3-.3c-2.1-2.1-4.7-3.4-7.4-3.8V3c0-1-.8-1.8-1.8-1.8S38.5 2 38.5 3v15.8c-2.8.2-5.5 1.3-7.7 3.1V3c0-1-.8-1.8-1.8-1.8S27.2 2 27.2 3v23.3c-2.7 5.2-1.8 11.8 2.5 16.1 2.7 2.7 6.3 4.1 9.8 4.1 3 0 6-1 8.5-2.9l8.1 8.1c.3.3.8.5 1.2.5s.9-.2 1.2-.5c.8-.7.8-1.8.1-2.5zm-26.4-9.3c-4-4-4-10.6 0-14.7 2-2 4.7-3 7.3-3 2.7 0 5.3 1 7.3 3 4 4 4 10.6 0 14.7-3.9 4.1-10.5 4.1-14.6 0z"/>
	</g>
</svg>
	);
};

export default BarCodeSearch;