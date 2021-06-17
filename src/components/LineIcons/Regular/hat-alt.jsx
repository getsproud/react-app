import React from 'react';

function HatAlt(props) {
	const title = props.title || "hat alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M47.1 26.9c0 3.9 3.2 7.1 7.1 7.1s7.1-3.2 7.1-7.1c0-3.8-3.1-7-6.8-7.1C50.6 7.7 46 1.6 40.6 1.3 33 .8 27.8 12 27.2 13.2L8 59.3H4.4c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h48.8c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-3.6L30.7 14c1.5-3.1 5.6-9.5 9.7-9.2 2.1.1 6.3 2.4 10.7 15.8-2.4 1.2-4 3.6-4 6.3zM11.8 59.3l17-40.8 17 40.8h-34zm42.4-36c2 0 3.6 1.6 3.6 3.6s-1.6 3.6-3.6 3.6-3.6-1.6-3.6-3.6 1.6-3.6 3.6-3.6z"/>
	</g>
</svg>
	);
};

export default HatAlt;