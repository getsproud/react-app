import React from 'react';

function Farenheit(props) {
	const title = props.title || "farenheit";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 3.6H37.5c-3.5 0-6.3 2.8-6.3 6.3v16.5h-5.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h5.8v28.7c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V29.9h16.4c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H34.8V10c0-1.6 1.2-2.8 2.8-2.8H61c1 0 1.8-.8 1.8-1.8S62 3.6 61 3.6z"/>
		<path d="M8.9 3.9c-4.2 0-7.6 3.4-7.6 7.6v.2c0 4.2 3.4 7.6 7.6 7.6 4.2 0 7.6-3.4 7.6-7.6v-.2c0-4.2-3.4-7.6-7.6-7.6zm4.1 7.8c0 2.3-1.9 4.1-4.1 4.1S4.8 14 4.8 11.7v-.2c0-2.3 1.9-4.1 4.1-4.1S13 9.3 13 11.5v.2z"/>
	</g>
</svg>
	);
};

export default Farenheit;