import React from 'react';

function Taka(props) {
	const title = props.title || "taka";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50.6 17.8H23.1V3c0-1-.8-1.8-1.8-1.8S19.6 2 19.6 3v14.8h-6.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h6.2v26.5c0 8.2 6.7 14.9 15 14.9s15-6.7 15-14.9c0-6-3.6-11.4-9.2-13.7-.9-.4-1.9 0-2.3.9-.4.9 0 1.9.9 2.3 4.3 1.8 7 5.9 7 10.5 0 6.3-5.2 11.4-11.5 11.4S23 54.2 23 47.9V21.3h27.4c1 0 1.8-.8 1.8-1.8s-.7-1.7-1.6-1.7z"/>
	</g>
</svg>
	);
};

export default Taka;