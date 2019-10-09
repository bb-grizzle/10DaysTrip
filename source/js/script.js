// todelete
// document.addEventListener('touchstart', changeNight);

// getStart
window.onload = function () {
	fillCountry();
	fillColorPalette();
	fillCitys();
	fillDuration();

	scrollTop();
	fillStars();

	// event Litener
	showPhoto_listener();
	showAbout_listener();
	hidePhoto_listener();
}

window.onbeforeunload = function () {
	scrollTop();
}

var croatia = {
	name: "Croatia",
	color: ["#F77331", "#EDE3CC", "#8BB1EA"],
	citys: ["Dbrovnic", "Slano", "Split", "Zadar", "Zagreb"],
	duration_start: "2019.01.02",
	duration_end: "- 2019.01.11",
	discript: "There are few Koreans and there are not many people yet. It was nice to have a quiet trip and I really want to go there again. I promised to go to the beach in the summer. Unfortunately, the food was salty, salty and salty.",
	discript_ko: "한국인이 거의 없고 아직 사람들이 많이 없는 곳. 한적하고 조용한 여행을 할 수 있어 좋았고 꼭 다시 한 번 가보고 싶다. 여름에 가서 꼭 해수욕해야겠다고 다짐. 아쉽게도 음식은 짜고 짜고 짰다."

}
var switzerland = {
	name: "Switzerland",
	color: ["#336DFF", "#606060", "#F4F4F4"],
	citys: ["Zurich", "Bern", "Interlaken", "Luzern", "Schwyz"],
	duration_start: "2019.01.12",
	duration_end: "- 2019.01.19",
	discript: "The slopes of the Swiss ski resort were the best slopes of life. It's a bloody price, but it's so touching. As expected, the food is not delicious.",
	discript_ko: "스위스의 스키장 슬로프는 인생 최고의 슬로프였다. 피눈물 나는 가격이지만 그만큼 감격스러운 듯. 역시나 음식은 맛없다."
}
var italy = {
	name: "Italy",
	color: ["#FF9E99", "#B4CCD3", "#5566FF"],
	citys: ["Milano", "Venezia", "Firenze", "Roma", "Napoli"],
	duration_start: "2019.01.20",
	duration_end: "- 2019.02.01",
	discript: "a country where one can see historic sites and ruins with great excitement It was a great tourist attraction for me who liked to walk. I was worried about security, but it was better than I thought. I want to come to the country where I want to make a lot of money and go shopping. Maybe next life. The food is still bad.",
	discript_ko: "신나게 유적과 유적을 볼 수 있는 나라. 걷는 걸 좋아하는 나로서는 아주 좋은 관광지였다. 치안이 걱정이었는데 생각보다 괜찮았고 돈 많이 벌어서 쇼핑하러 오고 싶은 나라. 아마 다음 생. 여전히 음식은 맛없다. "
}
var country = [croatia, switzerland, italy];

// fillCountry
function fillCountry() {
	var countryNameWrap = document.querySelector(".countryTitle-wrap");
	for (var i = 0; i < country.length; i++) {

		var el = document.createElement("h1");
		var el_br = document.createElement("br");
		el.setAttribute("class", "sec-country mainColor");
		var name = country[i].name;
		var text = document.createTextNode("#0" + (i + 1) + "<br>" + country[i].name);

		el.innerHTML = "#0" + (i + 1) + "<br>" + country[i].name;
		// console.log(el);
		countryNameWrap.appendChild(el);
	}
}

function fillPhotoHeader() {
	var h_country = document.querySelector(".photo-header-country");
	var h_text = document.querySelector(".photo-header-text");
	var h_text_ko = document.querySelector(".photo-header-textko");


	console.log("cityStatus" + cityStatus);
	h_country.innerHTML = country[cityStatus].name;
	h_text.innerHTML = country[cityStatus].discript;
	h_text_ko.innerHTML = country[cityStatus].discript_ko;
}

function fillPhoto() {
	for (var i = 0; i < 18; i++) {
		var photoList = document.querySelector(".photo-list");
		var el_li = document.createElement("li");
		var el_div = document.createElement("div");

		el_div.classList.add("list-padding");


		var photoNum = i + 1;
		// console.log("cityStatus : " + cityStatus);

		// console.log("photoNum : " + photoNum);
		el_div.style.backgroundImage = "url(source/img/photo/" + (cityStatus + 1) + "/" + photoNum + ".jpg)"
		el_li.appendChild(el_div);
		photoList.appendChild(el_li);
	}
}

function deletePhoto() {
	for (var i = 0; i < 18; i++) {
		var photoList = document.querySelector(".photo-list");
		var el_li = photoList.getElementsByTagName("li");
		var photo = document.querySelectorAll(".list-padding");

		photoList.innerHTML = "";

	}
}

// fillColorPalette
function fillColorPalette() {
	for (var j = 0; j < country.length; j++) {
		for (var i = 0; i < croatia.color.length; i++) {

			var color_el = document.createElement("li");
			color_el.style.backgroundColor = country[j].color[i];

			var colorPalette = document.querySelectorAll(".colorPalette");
			colorPalette[j].appendChild(color_el);
		}
	}
}

// fillcitys
function fillCitys() {
	var citys_wrap = document.querySelector(".citys-wrap");

	for (var i = 0; i < country.length; i++) {
		var el_ul = document.createElement("ul");
		el_ul.setAttribute("class", "citys");
		for (var j = 0; j < country[i].citys.length; j++) {
			var el_li = document.createElement("li");
			el_li.classList.add("textColor");
			if (j == 0) el_li.setAttribute("class", "mainColor");
			el_li.innerHTML = "- " + country[i].citys[j];
			el_ul.appendChild(el_li);
		}
		citys_wrap.appendChild(el_ul);
	}
	// console.log(citys_wrap);
}

// fill duration
function fillDuration() {
	var duration_con = document.querySelector(".duration-container");

	for (var i = 0; i < country.length; i++) {
		var el_div = document.createElement("div");
		el_div.setAttribute("class", "duration-wrap");
		el_div.classList.add("textColor");

		var el_p_start = document.createElement("p");
		el_p_start.innerHTML = country[i].duration_start;
		var el_p_end = document.createElement("p");
		el_p_end.innerHTML = country[i].duration_end;

		el_div.appendChild(el_p_start);
		el_div.appendChild(el_p_end);

		duration_con.appendChild(el_div);
	}
}

function removeStars() {
	var fillBg = document.querySelector(".fillBg");
	fillBg.innerHTML = "";
}

function fillStars() {
	if(screen_w<600){
		 
	var starSize = 3;
		 }else{
			 
	var starSize = 10;
		 }
	for (var i = 0; i < 30; i++) {
		var fillBg = document.querySelector(".fillBg");
		var el_div = document.createElement("div");
		el_div.classList.add("bgStar");

		var width_r = (Math.random() * starSize) + 3;
		var pos_x = Math.random() * 100;
		var pos_y = Math.random() * 100;

		el_div.style.width = width_r + "px";
		el_div.style.height = width_r + "px";
		el_div.style.left = pos_x + "vw";
		el_div.style.top = pos_y + "vh";

		fillBg.appendChild(el_div);
	}


}

// mouse move
var illust = document.querySelector("#illust");
var illustWrap = document.querySelector(".section-illust");
var illustOverflow = document.querySelector(".illust-wrap");

var timeout;
var isOnIllust = false;
var screen_w = window.innerWidth;
var screen_h = window.innerHeight;
var center_w = screen_w / 2;
var center_h = screen_h / 2;
var y_lim = screen_h/4;
var x_lim = screen_w/4;
	
window.onmousedown = function () {
	var mouse_x = event.clientX;
	var mouse_y = event.clientY;

	var dx = (center_w - mouse_x);
	var dy = (center_h - mouse_y);
	
	if (Math.abs(dx) < 90 && Math.abs(dy) < 90) {
		isOnIllust = true;
		// console.log("true");

	} else {
		isOnIllust = false;
		// console.log("false");
	}
}

	var moveRatio = 0.015;

	var dragRatio = 0.01;
	var scaleRatio = 0.03;

window.onmousemove = function () {
	// auto show guide
	hideGuideline();
	drawGuideline();

	var mouse_x = event.clientX;
	var mouse_y = event.clientY;
	var screen_w = window.innerWidth;
	var screen_h = window.innerHeight;
	var center_w = screen_w / 2;
	var center_h = screen_h / 2;


	var dx = (center_w - mouse_x);
	var dy = (center_h - mouse_y);
	var d = Math.round(Math.sqrt(Math.pow(dx, 2) + Math.pow(dy, 2)));

	// console.log("mouse_x: " + mouse_x);
	// console.log("mouse_y: " + mouse_y);
	// console.log("screen_w: " + screen_w);
	// console.log("screen_h: " + screen_h);
	// console.log("dx: " + dx);
	// console.log("dy: " + dy);
	// console.log("d: " + d);
	// console.log("-");

	//change mouse cursor
	if (!isPhotoView) {
		if (Math.abs(dx) < 100 && Math.abs(dy) < 100) {
			document.body.style.cursor = "grab";
		} else {
			document.body.style.cursor = "auto";
		}
	}


	illust.style.left = 50 + dx * moveRatio * 0.5 + "%";
	illust.style.top = 50 + dy * moveRatio * 0.5 + "%";

	if (isMouseDown) {
		var illust_border = document.querySelector(".illust-border");
		if (dy > y_lim) {
			isSkyNight = true;
			changeStatus = true;
		} else if (dy < y_lim * -1) {
			isSkyNight = false;
			changeStatus = true;
		} else {
			changeStatus = false;
		}


		//illust Move event
		illustWrap.style.left = 50 + dx * -1 * dragRatio + "%";
		illustWrap.style.top = 50 + dy * -1 * dragRatio * 2 + "%";

		illustOverflow.style.width = 180 + d * scaleRatio + "px";
		illustOverflow.style.height = 180 + d * scaleRatio + "px";

		illust_border.style.width = 190 + d * scaleRatio + "px";
		illust_border.style.height = 190 + d * scaleRatio + "px";

		//change citys event
		console.log("dx : " + dx);
		console.log("x_lim : " + x_lim);
		
		if (dx < x_lim * -1) {
			moveRight = false;
			isCityMove = true;
		} else if (dx > x_lim) {

			moveRight = true;
			isCityMove = true;
		}
	} else {
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
}

// mouse pull
var isMouseDown = false;
document.onmousedown = function () {
	isMouseDown = true;
}





document.onmouseup = function () {
	isMouseDown = false;
	if (!isPhotoView && isOnIllust) {

		if (!isSkyNight && changeStatus) {
			changeNight();
		} else if (isSkyNight && changeStatus) {
			changeDay();
		}
	}
	if (isCityMove) {
		moveCitys();
	}
}


//changeMode fnc
var sundeg = 0;
var isSkyNight = false;
var changeStatus = false;
var isCityMove = false;

function changeNight() {
	removeStars();
	fillStars();
	
	var night = document.querySelectorAll(".night");
	for (var i = 0; i < night.length; i++) {
		night[i].style.opacity = "1";
	}

	var sun = document.querySelectorAll(".illust-sun");
	sundeg = -180;
	for (var i = 0; i < sun.length; i++) {
		sun[i].style.transform = "rotate(" + sundeg + "deg)";
	}
	changeStatus = !changeStatus;
	// console.log("changeStatus: " + changeStatus);

	// change text COlor
	var bg = document.querySelector(".fillBg");
	bg.style.opacity = "1";

	var subColor = document.querySelectorAll(".subColor");
	for (color of subColor) {
		color.style.color = "white";
	}
	var textColor = document.getElementsByClassName("textColor");

	for (var i = 0; i < textColor.length; i++) {
		textColor[i].style.color = "white";
	}
}

function changeDay() {
	var night = document.querySelectorAll(".night");
	for (var i = 0; i < night.length; i++) {
		night[i].style.opacity = "0";
	}

	// to fix

	var sun = document.querySelectorAll(".illust-sun");
	sundeg = 0;
	for (var i = 0; i < sun.length; i++) {
		sun[i].style.transform = "rotate(" + sundeg + "deg)";
	}
	changeStatus = !changeStatus;
	// console.log("changeStatus: " + changeStatus);

	// change text COlor
	var bg = document.querySelector(".fillBg");
	bg.style.opacity = "0";

	var subColor = document.querySelectorAll(".subColor");
	for (color of subColor) {
		color.style.color = "black";
	}
	var textColor = document.getElementsByClassName("textColor");

	for (var i = 0; i < textColor.length; i++) {
		textColor[i].style.color = "#606060";
	}

}

// changeCitys
var cityStatus = 0;
var moveRight = false;

var move01 = 0;
var move02 = 33.3;

function checkDir() {
	if (moveRight) {
		if (cityStatus < 2) {
			move01 -= 100;
			move02 -= 33.3;
			cityStatus++;
		}
	} else {
		if (cityStatus > 0) {
			move01 += 100;
			move02 += 33.3;
			cityStatus--;
		}
	}
}

// to delete
function changeCitys() {
	var title = document.querySelector(".countryTitle-wrap");
	title.style.marginLeft = move01 + "%"; //500

	var palette = document.querySelector(".colorPalette-wrap");
	palette.style.marginLeft = move01 + "%"; //320px

	var citys = document.querySelector(".citys-wrap");
	citys.style.marginLeft = move01 + "%"; //110px

	var duration = document.querySelector(".duration-container");
	duration.style.marginLeft = move01 + "%"; //500
}

function changeCityIllust(){
	var illustarr = document.querySelectorAll(".illustArr");
	for (var i = 0; i < illustarr.length; i++) {
		// illustarr[i].style.left = testMove + "%";
		illustarr[i].style.left = move02 + "%";
	}
}

function changeMainColor() {
	var mainColor = document.querySelectorAll(".mainColor");
	var mainBg = document.querySelectorAll(".mainBg");
	for (var i = 0; i < mainColor.length; i++) {
		mainColor[i].style.color = country[cityStatus].color[0];
		mainColor[i].style.borderColor = country[cityStatus].color[0];
	}

	for (var i = 0; i < mainBg.length; i++) {
		mainBg[i].style.backgroundColor = country[cityStatus].color[0];
	}
}

function moveCitys() {
	if (isOnIllust && !isPhotoView) {
		checkDir();
		changeCitys();
		changeCityIllust();
		changeMainColor();
		isCityMove = false;

	}
}

// show photo
var isPhotoView = false;

function showPhoto_listener() {
	var showPhotoBtn = document.querySelector("#showPhotoBtn");
	showPhotoBtn.addEventListener("click", showPhoto);
}

function hidePhoto_listener() {
	var hidePhotoBtn = document.querySelector("#hidePhotoBtn");
	hidePhotoBtn.addEventListener("click", hidePhoto);
}

function showPhoto() {
	isPhotoView = !isPhotoView;

	preventIllustScroll(isPhotoView);

	var secContents = document.querySelector(".sec-contents");
	var secIllust = document.querySelector(".section-illust");
	var showPhotoBtn = document.querySelector("#showPhotoBtn");

	secContents.style.opacity = "0";
	secIllust.style.opacity = "0";
	showPhotoBtn.style.opacity = "0";

	var secPhoto = document.querySelector(".sec-photo");
	var photoListWrap = document.querySelector(".photo-list-wrap");

	secPhoto.style.display = "block";
	// document.body.style.overflow = "auto";
	setTimeout(() => {

		secPhoto.style.opacity = "1";
		photoListWrap.style.top = "100px";
		photoListWrap.style.opacity = "1";

	}, 300);

	fillPhotoHeader();
	deletePhoto();
	fillPhoto();
}

function hidePhoto() {
	isPhotoView = !isPhotoView;
	preventIllustScroll(isPhotoView);
	var secContents = document.querySelector(".sec-contents");
	var secIllust = document.querySelector(".section-illust");
	var showPhotoBtn = document.querySelector("#showPhotoBtn");

	secContents.style.opacity = "1";
	secIllust.style.opacity = "1";
	showPhotoBtn.style.opacity = "1";

	// secContents.style.display = "none";
	// secIllust.style.display = "none";

	var secPhoto = document.querySelector(".sec-photo");
	var photoListWrap = document.querySelector(".photo-list-wrap");
	// var photoBg = document.querySelector(".photo-bg");

	secPhoto.style.opacity = "0";
	photoListWrap.style.top = "120px";
	photoListWrap.style.opacity = "0";
	setTimeout(() => {
		secPhoto.style.display = "none";

		secPhoto.style.opacity = "0";

	}, 300);

	scrollTop();
	// document.body.style.overflow = "hidden";
}

function preventIllustScroll(status) {
	var illust = document.querySelector(".section-illust");

}

// on mouse scroll
window.addEventListener("wheel", function () {
	scrollBg();
});

function scrollBg() {
	var photoPage = document.querySelector(".sec-photo");
	var y = window.scrollY;
	var screen_h = window.innerHeight - 100;
	var totalHeight = photoPage.scrollHeight;

	var scrollPercent = Math.round(y / (totalHeight - screen_h) * 100);

	var bg = document.querySelector(".photo-bg");
	bg.style.height = scrollPercent + "%";
}

function scrollTop() {
	window.scrollTo(0, 0);
	var bg = document.querySelector(".photo-bg");
	bg.style.height = "0%";
}

var isMouseMove = false;

function hideGuideline() {
	var h = document.querySelector(".guide-h");
	var v = document.querySelector(".guide-v");

	h.style.width = "0";
	v.style.height = "0";
}

function drawGuideline() {
	clearTimeout(timeout);
	if(screen_w<600){
		var size = 200;
	}else{
		var size = 250;
	}
	
	timeout = setTimeout(function () {
		var h = document.querySelector(".guide-h");
		var v = document.querySelector(".guide-v");


		h.style.width = size + 50+"px";
		v.style.height = size + 50+"px";
		setTimeout(() => {
			h.style.width = size + "px";
			v.style.height = size + "px";
			drawGuideline();
		}, 1000);
	}, 5000);
}

// show about page
var aboutStatus = false;

function showAbout_listener() {
	var aboutBtn = document.querySelectorAll(".header-about-wrap");
	for (about of aboutBtn) {
		about.addEventListener("click", showAbout);
	}
}

function showAbout() {
	aboutStatus = !aboutStatus;
	var about = document.querySelector(".about");
	if (!aboutStatus) {
		about.style.height = "100vh";
	} else {
		about.style.height = "0";
	}
}