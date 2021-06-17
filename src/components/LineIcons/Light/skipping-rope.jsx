import React from 'react';

function SkippingRope(props) {
	const title = props.title || "skipping rope";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M59.1 44.4H46.5c-2.7 0-4.9 2.2-4.9 4.9v.7H18.2c-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2h27.6c6.2 0 11.2-5 11.2-11.2 0-6.2-5-11.2-11.2-11.2H22.4V7.7c0-2.7-2.2-4.9-4.9-4.9H4.9C2.2 2.8 0 5 0 7.7v7.1c0 2.7 2.2 4.9 4.9 4.9h12.6c2.7 0 4.9-2.2 4.9-4.9v-.7h23.4c4.5 0 8.2 3.7 8.2 8.2 0 4.5-3.7 8.2-8.2 8.2H18.2C12 30.5 7 35.5 7 41.7s5 11.2 11.2 11.2h23.4v3.4c0 2.7 2.2 4.9 4.9 4.9h12.6c2.7 0 4.9-2.2 4.9-4.9v-7.1c0-2.6-2.2-4.8-4.9-4.8zM19.4 14.7c0 1-.8 1.9-1.9 1.9H4.9c-1 0-1.9-.8-1.9-1.9v-7c0-1 .8-1.9 1.9-1.9h12.6c1 0 1.9.8 1.9 1.9v7zM61 56.3c0 1-.8 1.9-1.9 1.9H46.5c-1 0-1.9-.8-1.9-1.9v-7.1c0-1 .8-1.9 1.9-1.9h12.6c1 0 1.9.8 1.9 1.9v7.1z"/>
	</g>
</svg>
	);
};

export default SkippingRope;