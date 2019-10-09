var isTouch = false;
var changeSky = false;

document.ontouchstart = function (e) {

	isTouch = true;

	var touch_x = e.touches[0].clientX;
	var touch_y = e.touches[0].clientY;

	const mdx = center_w - touch_x;
	const mdy = center_h - touch_y;

	if (Math.abs(mdx) < 90 && Math.abs(mdy) < 90) {
		isOnIllust = true;
	} else {
		isOnIllust = false;
	}

}


document.ontouchend = function (e) {
	isTouch = false;
	console.log("isPhotoView : " + isPhotoView);
	console.log("isOnIllust : " + isOnIllust);
	console.log("changeSky : " + changeSky);
	console.log("-- ");
	

	if (!isPhotoView && isOnIllust) {

		if (!changeSky && !isCityMove) {
			changeNight();
		} else if(changeSky && !isCityMove){
			changeDay();
		}

		changeSky = !changeSky;
	}

	if (isCityMove) {
		moveCitys();
	}

	var illust_border = document.querySelector(".illust-border");

	illustWrap.style.left = "50%";
	illustWrap.style.top = "50%";
	illustOverflow.style.width = "95%";
	illustOverflow.style.height = "95%";

	if (screen_w < 600) {

		illust_border.style.width = "150px";
		illust_border.style.height = "150px";
	} else {
		illust_border.style.width = "190px";
		illust_border.style.height = "190px";
	}

}




document.ontouchmove = function (e) {

	hideGuideline();
	drawGuideline();

	const touch_x = e.touches[0].clientX;
	const touch_y = e.touches[0].clientY;

	const mdx = center_w - touch_x;
	const mdy = center_h - touch_y;
	var md = Math.round(Math.sqrt(Math.pow(mdx, 2) + Math.pow(mdy, 2)));

	if (isTouch) {
		var illust_border = document.querySelector(".illust-border");

		if (mdx < x_lim * -1) {
			moveRight = false;
			isCityMove = true;
		} else if (mdx > x_lim) {

			moveRight = true;
			isCityMove = true;
		}
		dragRatio = 0.05;
		illustWrap.style.left = 50 + mdx * -1 * dragRatio + "%";
		illustWrap.style.top = 50 + mdy * -1 * dragRatio + "%";

		illustOverflow.style.width = 180 + md * scaleRatio + "px";
		illustOverflow.style.height = 180 + md * scaleRatio + "px";

		illust_border.style.width = 190 + md * scaleRatio + "px";
		illust_border.style.height = 190 + md * scaleRatio + "px";

	}
}