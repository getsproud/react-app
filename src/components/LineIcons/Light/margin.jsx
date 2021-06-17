import React from 'react';

function Margin(props) {
	const title = props.title || "margin";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M62.5 0h-61C.7 0 0 .7 0 1.5v61c0 .8.7 1.5 1.5 1.5h61c.8 0 1.5-.7 1.5-1.5v-61c0-.8-.7-1.5-1.5-1.5zM61 14H50V3h11v11zm0 33H50V17h11v30zM3 17h11v30H3V17zm14 0h30v30H17V17zM47 3v11H17V3h30zM14 3v11H3V3h11zM3 50h11v11H3V50zm14 11V50h30v11H17zm33 0V50h11v11H50z"/>
	</g>
</svg>
	);
};

export default Margin;