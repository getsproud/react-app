import React from 'react';

function CandleAlt(props) {
	const title = props.title || "candle alt";

	return (
		<svg height="64" width="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M58 25h-.5v-4.7c3.1-1 5.3-4.8 5.3-9.4 0-5.4-3.1-9.7-7-9.7s-7 4.2-7 9.7c0 4.6 2.2 8.3 5.3 9.4V25h-.5c-2.6 0-4.8 2.1-4.8 4.8V58c0 2.6 2.1 4.8 4.8 4.8H58c2.6 0 4.8-2.1 4.8-4.8V29.7c0-2.6-2.2-4.7-4.8-4.7zM55.7 4.8c1.7 0 3.5 2.5 3.5 6.2s-1.9 6.2-3.5 6.2c-1.7 0-3.5-2.5-3.5-6.2s1.9-6.2 3.5-6.2zm-2.2 23.7H58c.7 0 1.3.6 1.3 1.3v3.8l-7 3.5v-7.4c-.1-.7.5-1.2 1.2-1.2zM58 59.3h-4.5c-.7 0-1.3-.6-1.3-1.3V41l7-3.5V58c.1.7-.5 1.3-1.2 1.3z"/>
		<path d="M15.3 10.9c0-5.4-3.1-9.7-7-9.7s-7 4.2-7 9.7c0 4.6 2.2 8.3 5.3 9.4V25H6c-2.6 0-4.8 2.1-4.8 4.8V58c0 2.6 2.1 4.8 4.8 4.8h4.5c2.6 0 4.8-2.1 4.8-4.8V29.7c0-2.6-2.1-4.8-4.8-4.8H10v-4.7c3.1-1 5.3-4.7 5.3-9.3zm-4.8 48.4H6c-.7 0-1.3-.6-1.3-1.3v-3.8l7-3.5V58c.1.7-.5 1.3-1.2 1.3zm1.3-29.6v17l-7 3.5V29.7c0-.7.6-1.3 1.3-1.3h4.5c.6.1 1.2.6 1.2 1.3zM8.3 4.8c1.7 0 3.5 2.5 3.5 6.2s-1.9 6.2-3.5 6.2c-1.7 0-3.5-2.5-3.5-6.2s1.8-6.2 3.5-6.2z"/>
		<path d="M39 10.9c0-5.4-3.1-9.7-7-9.7s-7 4.2-7 9.7c0 4.6 2.2 8.3 5.3 9.4V25h-.5c-2.6 0-4.8 2.1-4.8 4.8V58c0 2.6 2.1 4.8 4.8 4.8h4.5c2.6 0 4.8-2.1 4.8-4.8V29.7c0-2.6-2.1-4.8-4.8-4.8h-.5v-4.7c3-1 5.2-4.7 5.2-9.3zm-3.5 18.8V58c0 .7-.6 1.3-1.3 1.3h-4.5c-.7 0-1.3-.6-1.3-1.3V29.7c0-.7.6-1.3 1.3-1.3h4.5c.8.1 1.3.6 1.3 1.3zM32 4.8c1.7 0 3.5 2.5 3.5 6.2s-1.9 6.2-3.5 6.2c-1.7 0-3.5-2.5-3.5-6.2s1.8-6.2 3.5-6.2z"/>
	</g>
</svg>
	);
};

export default CandleAlt;