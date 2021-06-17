import React from 'react';

function WeightMachine(props) {
	const title = props.title || "weight machine";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M53.3 1.3H10.7c-5.2 0-9.5 4.3-9.5 9.5v42.5c0 5.2 4.3 9.5 9.5 9.5h42.5c5.2 0 9.5-4.3 9.5-9.5V10.7c.1-5.2-4.2-9.4-9.4-9.4zM43 4.8v6.6c0 2.5-2.1 4.6-4.6 4.6h-4.9l2.4-4.3c.5-.8.2-1.9-.7-2.4-.8-.5-1.9-.2-2.4.7l-3.4 6h-3.9C23 16 21 13.9 21 11.4V4.8h22zm16.3 48.5c0 3.3-2.7 6-6 6H10.7c-3.3 0-6-2.7-6-6V10.7c0-3.3 2.7-6 6-6h6.7v6.6c0 4.5 3.6 8.1 8.1 8.1h12.8c4.5 0 8.1-3.6 8.1-8.1V4.8h6.7c3.3 0 6 2.7 6 6v42.5z"/>
	</g>
</svg>
	);
};

export default WeightMachine;