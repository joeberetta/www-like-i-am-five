const setYTPlayerSize = () => {
	const ytFrame = document.querySelector('#ytplayer');
	if (ytFrame) {
		const ytVideoContainer = document.querySelector('#ytplayer');
		resizeYTContainer(ytVideoContainer);
	}
};
// on page load
setTimeout(setYTPlayerSize, 4);
// on page resize
window.addEventListener('resize', setYTPlayerSize);

function resizeYTContainer(ytIframe) {
	const parentSizes = document.querySelector('#main').getBoundingClientRect();
	const w = parentSizes.width;
	ytIframe.width = w;
	ytIframe.height = (w * 9) / 16;
}
