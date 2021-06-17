import React from 'react';

function ConstructionRular(props) {
	const title = props.title || "construction rular";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M56.9 38.2H20.6V8.6c0-2.6-2.1-4.8-4.8-4.8H6C3.4 3.9 1.3 6 1.3 8.6v45.7c0 3.2 2.6 5.8 5.8 5.8h49.8c3.2 0 5.9-2.6 5.9-5.9V44c0-3.2-2.7-5.8-5.9-5.8zM13.5 56.6H7c-1.2 0-2.3-1-2.3-2.3V8.6c0-.7.6-1.3 1.3-1.3h9.8c.7 0 1.3.6 1.3 1.3v48h-3.6zm45.8-2.4c0 1.3-1.1 2.4-2.4 2.4h-4.8v-8.8c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v8.8h-5.8v-4.8c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v4.8h-5.8v-8.8c0-1-.8-1.8-1.8-1.8s-1.5.9-1.5 1.8v8.8h-9.4v-15h36.3c1.3 0 2.4 1.1 2.4 2.4v10.2z"/>
	</g>
</svg>
	);
};

export default ConstructionRular;