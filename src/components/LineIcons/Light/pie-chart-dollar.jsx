import React from 'react';

function PieChartDollar(props) {
	const title = props.title || "pie chart dollar";

	return (
		<svg height="64" id="Layer_1" width="64" version="1.1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" x="0" y="0" xmlSpace="preserve">
	<title>{title}</title>
	<g fill="#000000">
		<path d="M63.3 31c0-.8-.7-1.4-1.5-1.4H34.4V3.4c0-.8-.6-1.5-1.5-1.5h-1C14.7 1.8.7 15.8.7 32.9.7 50.1 14.7 64 32 64s31.3-13.9 31.3-31.1V31zM31.4 4.9v25.4L9 49.3C5.7 44.7 3.7 39 3.7 32.9c0-15.3 12.4-27.7 27.7-28zM32 61c-8.4 0-15.9-3.6-21.1-9.4l22.4-19.1h27v.3C60.3 48.4 47.6 61 32 61z"/>
		<path d="M53.1 18.9h-7.3c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5H51v1.8c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5v-1.9c2.5-.4 4.5-2.6 4.5-5.3 0-3-2.4-5.4-5.4-5.4h-3.4c-1.3 0-2.4-1.1-2.4-2.4s1.1-2.4 2.4-2.4H57c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-3V1.5c0-.8-.7-1.5-1.5-1.5S51 .7 51 1.5v1.8h-1.3c-3 0-5.4 2.4-5.4 5.4s2.4 5.4 5.4 5.4h3.4c1.3 0 2.4 1.1 2.4 2.4s-1.1 2.4-2.4 2.4z"/>
	</g>
</svg>
	);
};

export default PieChartDollar;