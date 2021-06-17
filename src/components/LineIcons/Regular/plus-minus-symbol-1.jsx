import React from 'react';

function PlusMinusSymbol1(props) {
	const title = props.title || "plus minus symbol 1";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M42 25.7h-8.2v-8.2c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v8.2H22c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h8.2v8.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-8.2H42c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M42 44.8H22c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h20c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8z"/>
		<path d="M32 1.3C15 1.3 1.3 15 1.3 32S15 62.8 32 62.8 62.8 49 62.8 32 49 1.3 32 1.3zm0 58C17 59.3 4.8 47 4.8 32S17 4.8 32 4.8 59.3 17 59.3 32 47 59.3 32 59.3z"/>
	</g>
</svg>
	);
};

export default PlusMinusSymbol1;