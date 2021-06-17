import React from 'react';

function Arch(props) {
	const title = props.title || "arch";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M61 18.1c1 0 1.8-.8 1.8-1.8s-.8-1.7-1.8-1.7h-2.9V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v3.6H3c-1 0-1.8.8-1.8 1.8S2 18.1 3 18.1h2.9v36.6H4.2c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8H59.9c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8h-1.7V18.1H61zM9.4 11c0-.9.7-1.7 1.7-1.7H53c.9 0 1.7.7 1.7 1.7v3.6H9.4V11zm26.5 43.7h-9.5V38.2c0-3.1 2.5-5.6 5.6-5.6 3.1 0 5.6 2.5 5.6 5.6v16.5h-1.7zm18.7 0H41.1V38.2c0-5-4.1-9.1-9.1-9.1s-9.1 4.1-9.1 9.1v16.5H9.4V18.1h45.2v36.6z"/>
	</g>
</svg>
	);
};

export default Arch;