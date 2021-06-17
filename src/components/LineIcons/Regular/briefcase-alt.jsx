import React from 'react';

function BriefcaseAlt(props) {
	const title = props.title || "briefcase alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M57 20.1H43.6v-2.7c0-5.4-4.4-9.8-9.8-9.8h-3.6c-5.4 0-9.8 4.4-9.8 9.8v2.7H7c-3.2 0-5.8 2.6-5.8 5.8v24.7c0 3.2 2.6 5.8 5.8 5.8h50c3.2 0 5.8-2.6 5.8-5.8V25.9c0-3.2-2.6-5.8-5.8-5.8zm-33.1-2.7c0-3.5 2.8-6.3 6.3-6.3h3.6c3.5 0 6.3 2.8 6.3 6.3v2.7H23.9v-2.7zM7 23.6h50c1.2 0 2.3 1 2.3 2.3v6.5H52v-2.6c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v2.6H15.6v-2.6c0-1-.8-1.8-1.8-1.8s-1.8.8-1.8 1.8v2.6H4.8v-6.5c0-1.3 1-2.3 2.2-2.3zm50 29.3H7c-1.2 0-2.3-1-2.3-2.3V35.9H12v2.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.6h32.9v2.6c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8v-2.6h7.3v14.7c-.1 1.3-1.2 2.3-2.4 2.3z"/>
	</g>
</svg>
	);
};

export default BriefcaseAlt;