import React from 'react';

function PlusMinusSymbol(props) {
	const title = props.title || "plus minus symbol";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M12 24.7h18.2v18.2c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V24.7H52c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H33.8V3c0-1-.8-1.8-1.8-1.8S30.3 2 30.3 3v18.2H12c-1 0-1.8.8-1.8 1.8s.9 1.7 1.8 1.7z"/>
		<path d="M52 59.3H12c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h40c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.8-1.8z"/>
	</g>
</svg>
	);
};

export default PlusMinusSymbol;