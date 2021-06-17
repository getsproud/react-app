import React from 'react';

function Flag(props) {
	const title = props.title || "flag";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M49.3 18L28.5 5.9V3c0-1-.8-1.8-1.8-1.8S25 2 25 3v49.1c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-19L49.3 21c.5-.3.9-.9.9-1.5s-.4-1.2-.9-1.5zM28.5 29V9.9l16.4 9.5L28.5 29z"/>
		<path d="M37.9 53.1c-1 0-1.8.8-1.8 1.8 0 2.1-4 4.4-9.4 4.4s-9.4-2.3-9.4-4.4c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8c0 4.4 5.7 7.9 12.9 7.9s12.9-3.5 12.9-7.9c.2-1-.6-1.8-1.6-1.8z"/>
	</g>
</svg>
	);
};

export default Flag;