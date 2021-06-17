import React from 'react';

function OfficePlan(props) {
	const title = props.title || "office plan";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M51.7 43.6h-1.3V29.5c0-4-3.2-7.2-7.2-7.2h-5c-4 0-7.2 3.2-7.2 7.2v14.1h-.9c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h21.8c1 0 1.8-.8 1.8-1.8s-1-1.8-2-1.8zM34.4 29.5c0-2.1 1.7-3.7 3.7-3.7h5c2.1 0 3.7 1.7 3.7 3.7v14.1H34.4V29.5z"/>
		<path d="M55.8 12.5H19.9c-1.6-3.2-4.9-5.4-8.8-5.4-5.4 0-9.9 4.4-9.9 9.8V47c0 5.4 4.4 9.8 9.9 9.8h44.7c3.8 0 6.9-3.2 6.9-7.2v-30c.1-3.9-3.1-7.1-6.9-7.1zm-44.7-1.9c3.5 0 6.4 2.8 6.4 6.3v22.6c-1.7-1.5-3.9-2.3-6.4-2.3s-4.6.9-6.4 2.3V17c.1-3.5 2.9-6.4 6.4-6.4zM4.8 47c0-3.5 2.9-6.3 6.4-6.3s6.4 2.8 6.4 6.3-2.9 6.3-6.4 6.3-6.4-2.8-6.4-6.3zm54.5 2.7c0 2-1.5 3.7-3.4 3.7H18.6c1.5-1.7 2.3-3.9 2.3-6.4V17v-1h34.9c1.9 0 3.4 1.7 3.4 3.7v30z"/>
	</g>
</svg>
	);
};

export default OfficePlan;