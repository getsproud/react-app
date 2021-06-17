import React from 'react';

function CapsuleAlt(props) {
	const title = props.title || "capsule alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M32 1.3c-8 0-14.5 6.5-14.5 14.5v32.4c0 8 6.5 14.5 14.5 14.5s14.5-6.5 14.5-14.5V15.8c0-8-6.5-14.5-14.5-14.5zm11 46.9c0 6.1-5 11-11 11-6.1 0-11-5-11-11V33.8h22v14.4zM21 15.8c0-6.1 4.9-11 11-11s11 4.9 11 11v14.4H21V15.8z"/>
		<path d="M28.7 16.6c-1 0-1.8.8-1.8 1.8v4c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-4c0-1-.8-1.8-1.8-1.8z"/>
		<path d="M28.7 47.4c1 0 1.8-.8 1.8-1.8v-4c0-1-.8-1.8-1.8-1.8s-1.7.8-1.7 1.8v4c0 1 .8 1.8 1.7 1.8z"/>
	</g>
</svg>
	);
};

export default CapsuleAlt;