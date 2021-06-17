import React from 'react';

function TextUnderlineAlt(props) {
	const title = props.title || "text underline alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M50.4 1.3H13.6c-3.2 0-5.9 2.6-5.9 5.9V13c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V7.1c0-1.3 1.1-2.4 2.4-2.4H25v38.9h-5.8c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h25.5c1 0 1.8-.8 1.8-1.8s-.8-1.8-1.8-1.8H39V4.8h11.5c1.3 0 2.4 1.1 2.4 2.4V13c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8V7.1c-.2-3.2-2.8-5.8-6.1-5.8zM35.5 43.7h-7V4.8h7v38.9z"/>
		<path d="M53.5 59.3h-43c-1 0-1.8.8-1.8 1.8s.8 1.8 1.8 1.8h43.1c1 0 1.8-.8 1.8-1.8s-.9-1.8-1.9-1.8z"/>
	</g>
</svg>
	);
};

export default TextUnderlineAlt;