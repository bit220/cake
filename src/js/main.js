var fillingWasSelected = false;
var coverWasSelected = false;
var decorWasSelected = false;
var formStr = "circle";
var sliderItems = $('.filling-slider__item');
var bulletActiveNum = 0;
var fillingText = $('.filling-text__wrapper');
var decorNum;
var firstFilling;
var firstCover;
var firstColor;
var firstDecor;
var currentDecorNum;

//аккордеон
$(function(){
	var firstStep = $('.constructor-steps__item:nth-child(1)');
	var firstItem = firstStep.closest('.constructor-steps__item');
	var firstContent = firstItem.find('.constructor-desc');
	var firstReqHeight = firstContent.find('.constructor-content').outerHeight();

	firstStep.addClass('active');
	firstContent.height(firstReqHeight);

	$('.constructor-steps__link').on('click', function(e){
		e.preventDefault();

		var target = $(e.target);
		var item = target.closest('.constructor-steps__item');
		var content = item.find('.constructor-desc');
		var reqHeight = content.find('.constructor-content').outerHeight();

		if (!item.hasClass('active')) {
			item.addClass('active');
			item.siblings().removeClass('active');
			content.height(reqHeight);
			item.siblings().find('.constructor-desc').height(0);
		} else {
			item.removeClass('active');
			content.height(0);
		}
	});
});

//выбор формы
$(function(){
	$('.constructor-content__form-item').on('click', function(e){
		e.preventDefault();

		var item = $(e.target).closest('.constructor-content__form-item');
		var imageDeactive = item.find('.form-block__img.deactive');
		var imageActive = item.find('.form-block__img.active');

		if (!item.hasClass('active')) {
			item.addClass('active');
			item.siblings().removeClass('active');
			imageActive.css("display", "block");
			imageDeactive.css("display", "none");
			item.siblings().find('.form-block__img.active').css("display", "none");
			item.siblings().find('.form-block__img.deactive').css("display", "block");
		}

		var sliderImages = $('.filling-slider__image');
		var decorImages = $('.decor-images__image');
		bulletActiveNum = $('.swiper-pagination-bullet-active').index();

		if ($(this).hasClass('circle')) {
			$('.info-form').html('Форма: круглая');
			formStr = "circle";
			$(sliderImages).each(function(i, el){
				$(sliderImages)[i].src = el.src.replace('square', 'circle');
			});
			$('.decor-images__image').each(function(i, el){
				$(decorImages)[i].src = el.src.replace('square', 'circle');
			});

			if (coverWasSelected) {
				$('.view-img-color__form_circle').addClass('active');
				$('.view-img-color__form_square').removeClass('active');
			}
		}

		if ($(this).hasClass('square')) {
			$('.info-form').html('Форма: квадратная');
			formStr = "square";
			$(sliderImages).each(function(i, el){
				$(sliderImages)[i].src = el.src.replace('circle', 'square');
			});
			$('.decor-images__image').each(function(i, el){
				$(decorImages)[i].src = el.src.replace('circle', 'square');
			});

			if (coverWasSelected) {
				$('.view-img-color__form_square').addClass('active');
				$('.view-img-color__form_circle').removeClass('active');
			}
		}

		$('.view-img-form').css("background-image", "url('img/forms/" + formStr + ".png')");
		$('.view-img-form-2, .view-img-form-3').css("background-image", "url('img/forms/" + formStr + "_base.png')");

		if (fillingWasSelected) {
			$('.view-img-filling, .view-img-filling-2, .view-img-filling-3').css("background-image", "url('img/fillings/" + bulletActiveNum + "_" + formStr + ".png')");
		}
		
		var coverActiveNum = $('.cover-item.active').index();
		if (coverWasSelected) {
			$('.view-img-cover, .view-img-cover-2, .view-img-cover-3').css("background-image", "url('img/covers/" + coverActiveNum + "_" + formStr + ".png')");
		}

		$('.decoration-image').css("background-image", "url('img/decor/" + currentDecorNum + "_" + formStr + ".png')");
	});
});

//выбор количества уровней
$(function(){

	var level_2 = '<div class="constructor-view__img view-img-extra-2 view-img-form-2"></div>'
	 	+ '<div class="constructor-view__img view-img-extra-2 view-img-filling-2"></div>'
	 	+ '<div class="constructor-view__img view-img-extra-2 view-img-cover-2"></div>'
	 	+ '<div class="constructor-view__img view-img-extra-2 view-img-color-2 color-image">'
      +'<svg height="202" preserveAspectRatio="xMidYMid" viewBox="0 0 664 404" width="333" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="view-img-color__form view-img-color__form_circle"><path d="M663.982,285.000 C663.232,350.767 514.894,404.000 332.000,404.000 C149.106,404.000 0.768,350.767 0.018,285.000 L-0.000,285.000 L-0.000,117.000 L0.153,117.000 C2.218,90.353 27.692,63.441 70.000,44.000 C95.377,32.339 124.570,26.120 160.000,18.000 C166.338,16.547 173.711,12.174 184.000,10.000 C213.736,3.716 271.089,-0.188 327.000,-0.000 C329.975,0.010 340.044,-0.028 343.000,-0.000 C357.351,0.136 369.370,1.642 383.211,2.413 C403.887,3.565 423.931,5.404 443.160,7.863 C451.875,8.977 465.638,8.637 474.000,10.000 C533.118,19.634 575.459,33.458 610.000,53.000 C617.783,57.403 627.109,65.446 633.264,70.216 C651.703,84.504 662.522,100.324 663.855,117.000 L664.000,117.000 L664.000,285.000 L663.982,285.000 Z" fill="currentColor"></path></svg>'
      +'<svg height="164" preserveAspectRatio="xMidYMid" viewBox="0 0 663 327" width="332" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="view-img-color__form view-img-color__form_square"><path d="M663.000,322.000 C663.000,324.761 660.761,327.000 658.000,327.000 L5.000,327.000 C2.239,327.000 -0.000,324.761 -0.000,322.000 L-0.000,183.000 C-0.000,186.072 -0.963,173.812 7.000,164.000 L133.000,5.000 C135.396,1.030 140.572,-0.000 144.000,-0.000 L292.000,-0.000 L371.000,-0.000 L519.000,-0.000 C522.428,-0.000 527.604,1.030 530.000,5.000 L656.000,164.000 C663.963,173.812 663.000,186.072 663.000,183.000 L663.000,322.000 Z" fill="currentColor"></path></svg></div>'
	 	+ '<div class="constructor-view__img view-img-extra-2 view-img-decor-2 decoration-image"></div>';

	var level_3 = '<div class="constructor-view__img view-img-extra-3 view-img-form-3"></div>'
	 	+ '<div class="constructor-view__img view-img-extra-3 view-img-filling-3"></div>'
	 	+ '<div class="constructor-view__img view-img-extra-3 view-img-cover-3"></div>'      
	 	+ '<div class="constructor-view__img view-img-extra-3 view-img-color-3 color-image">'
	 		+'<svg height="202" preserveAspectRatio="xMidYMid" viewBox="0 0 664 404" width="333" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="view-img-color__form view-img-color__form_circle"><path d="M663.982,285.000 C663.232,350.767 514.894,404.000 332.000,404.000 C149.106,404.000 0.768,350.767 0.018,285.000 L-0.000,285.000 L-0.000,117.000 L0.153,117.000 C2.218,90.353 27.692,63.441 70.000,44.000 C95.377,32.339 124.570,26.120 160.000,18.000 C166.338,16.547 173.711,12.174 184.000,10.000 C213.736,3.716 271.089,-0.188 327.000,-0.000 C329.975,0.010 340.044,-0.028 343.000,-0.000 C357.351,0.136 369.370,1.642 383.211,2.413 C403.887,3.565 423.931,5.404 443.160,7.863 C451.875,8.977 465.638,8.637 474.000,10.000 C533.118,19.634 575.459,33.458 610.000,53.000 C617.783,57.403 627.109,65.446 633.264,70.216 C651.703,84.504 662.522,100.324 663.855,117.000 L664.000,117.000 L664.000,285.000 L663.982,285.000 Z" fill="currentColor"></path></svg>'
      +'<svg height="164" preserveAspectRatio="xMidYMid" viewBox="0 0 663 327" width="332" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" class="view-img-color__form view-img-color__form_square"><path d="M663.000,322.000 C663.000,324.761 660.761,327.000 658.000,327.000 L5.000,327.000 C2.239,327.000 -0.000,324.761 -0.000,322.000 L-0.000,183.000 C-0.000,186.072 -0.963,173.812 7.000,164.000 L133.000,5.000 C135.396,1.030 140.572,-0.000 144.000,-0.000 L292.000,-0.000 L371.000,-0.000 L519.000,-0.000 C522.428,-0.000 527.604,1.030 530.000,5.000 L656.000,164.000 C663.963,173.812 663.000,186.072 663.000,183.000 L663.000,322.000 Z" fill="currentColor"></path></svg></div>'
	 	+ '<div class="constructor-view__img view-img-extra-3 view-img-decor-3 decoration-image"></div>';

	$('.constructor-content__level-item:nth-child(1)').addClass('active');

	$('.constructor-content__level-item').on('click', function(e){
		firstFilling = $('.view-img-filling').css("background-image");
		firstCover = $('.view-img-cover').css("background-image");
		firstColor = $('.view-img-color').css("color");
		firstDecor = $('.view-img-decor').css("background-image");
	});

	$('.constructor-content__level-item:nth-child(1)').on('click', function(e){
		if (!$(this).hasClass('active')) {
			$('.info-levels').html('Количество уровней: 1');
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
			$('.view-img-extra-2, .view-img-extra-3').remove();
		}
	});

	$('.constructor-content__level-item:nth-child(2)').on('click', function(e){
		if (!$(this).hasClass('active')) {
			$('.info-levels').html('Количество уровней: 2');
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
			$('.view-img-extra-2, .view-img-extra-3').remove();
			$(level_2).appendTo('.constructor-view__block');
			$('.view-img-form-2').css("background-image", "url('img/forms/" + formStr + "_base.png')");
			if (fillingWasSelected) {
				$('.view-img-filling-2').css("background-image", firstFilling);
			}
			if (coverWasSelected) {
				$('.view-img-cover-2').css("background-image", firstCover);
				determineSvg();
				$('.view-img-color-2').css("color", firstColor);
			}
			if (decorWasSelected) {
				$('.view-img-decor-2').css("background-image", firstDecor);
			}
		}
	});

	$('.constructor-content__level-item:nth-child(3)').on('click', function(e){	
		if (!$(this).hasClass('active')) {
			$('.info-levels').html('Количество уровней: 3');
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
			$('.view-img-extra-2, .view-img-extra-3').remove();
			$(level_2).appendTo('.constructor-view__block');
			$(level_3).appendTo('.constructor-view__block');
			$('.view-img-form-2').css("background-image", "url('img/forms/" + formStr + "_base.png')");
			$('.view-img-form-3').css("background-image", "url('img/forms/" + formStr + "_base.png')");
			if (fillingWasSelected) {
				$('.view-img-filling-2').css("background-image", firstFilling);
				$('.view-img-filling-3').css("background-image", firstFilling);
			}
			if (coverWasSelected) {
				$('.view-img-cover-2').css("background-image", firstCover);
				determineSvg();
				$('.view-img-color-2').css("color", firstColor);
				$('.view-img-cover-3').css("background-image", firstCover);
				$('.view-img-color-3').css("color", firstColor);
			}
			if (decorWasSelected) {
				$('.view-img-decor-2').css("background-image", firstDecor);
				$('.view-img-decor-3').css("background-image", firstDecor);
			}
		}
	});
});

//открытие блока начинки
$(function(){
	$('.fill').on('click', function(e) {
		e.preventDefault();

		if (!fillingWasSelected) {
			$(fillingText[bulletActiveNum]).addClass('active');
		}
		$('.filling-wrapper').addClass('active');
	});
});

//закрытие блока начинки
$(function(){
	$('.close-fill-btn').on('click', function(e) {
		e.preventDefault();
		$('.filling-wrapper').removeClass('active');
	});
});

//выбор вариантов начинки
$(function(){

	$(sliderItems[0]).addClass('active');

	$('.filling-slider__list').on('click', '.filling-slider__item', function(e) {
		e.preventDefault();

		$(this).addClass('active');
		$(this).siblings().removeClass('active');
		
		var itemNum = $(e.target).closest('.filling-slider__block').attr('data-go-to-slide');
		
		mySwiper.slideTo(itemNum);
	});

	$('.swiper-pagination-bullet').on('click', function(e) {
		var bulletNum = $(this).index();
		sliderItems.siblings().removeClass('active');
		$(sliderItems[bulletNum]).addClass('active');
	});
});

//выбор начинки
$(function(){	

	$('.filling-slider__image_main-img, .filling-text__btn').on('click', function(){

		var fillingTitle = $('.filling-text__wrapper.active').find('.filling-text__title').html();

		$('.info-filling').html('Начинка: ' + fillingTitle);
		fillingWasSelected = true;
		bulletActiveNum = $('.swiper-pagination-bullet-active').index();

		$('.view-img-filling, .view-img-filling-2, .view-img-filling-3').css("background-image", "url('img/fillings/" + bulletActiveNum + "_" + formStr + ".png')");
		$('.filling-wrapper').removeClass('active');
	});
});

//выбор покрытия
$(function(){
	$('.cover-item').on('click', function(e) {
		e.preventDefault();
		coverWasSelected = true;

		if (!$(this).hasClass('active')) {
			$('.info-cover').html('Покрытие: ' + $(this).find('.block-elem').html());
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
		}

		var coverActiveNum = $('.cover-item.active').index();
		
		$('.view-img-cover, .view-img-cover-2, .view-img-cover-3').css("background-image", "url('img/covers/" + coverActiveNum + "_" + formStr + ".png')");

		determineSvg();
	});
});

//присвоение цвета по умолчанию для покрытия и генерация цветовых вариантов покрытия в сайдбаре
$(function(){
	var colorList = $('.constructor-content__color');

	$('.cover-item_souffle').on('click', function(e) {
		e.preventDefault();
		$('.color-image').css("color", "rgb(252, 254, 204)");
		colorList.empty();
		colorsForSouffle.forEach(generateColors);
	});

	$('.cover-item_chocolate').on('click', function(e) {
		e.preventDefault();
		$('.color-image').css("color", "rgb(52, 23, 0)");
		colorList.empty();
		colorsForChocolate.forEach(generateColors);
	});

	$('.cover-item_mastic').on('click', function(e) {
		e.preventDefault();
		$('.color-image').css("color", "rgb(238, 112, 168)");
		colorList.empty();
		colorsForMastic.forEach(generateColors);
	});

	$('.cover-item_cream').on('click', function(e) {
		e.preventDefault();
		$('.color-image').css("color", "rgb(255, 255, 255)");
		colorList.empty();
		colorsForCream.forEach(generateColors);
	});
});

//выбор цвета
$('.constructor-content__color').on('click', '.constructor-content__color-item', function(e) {
	e.preventDefault();

	$('.info-color').html('Цвет: ' + $(this).html());

	var colorBlock = $(this).find('.color-item__block');
	$('.color-image').css("color", $(e.target).css('background-color'));
	$(this).siblings().removeClass('active');
	$(this).addClass('active');
});

//открытие блока украшений
$(function(){
	$('.decor').on('click', function(e) {
		e.preventDefault();

		if (!decorWasSelected) {
			$('.decor-images__item:last-child').addClass('active').siblings().removeClass('active');
		} else {
			$('.decor-images__item').eq(currentDecorNum).addClass('active').siblings().removeClass('active');
		}

		var constructorView = $('.constructor-view').html();

		$('.decor-view').html('').append($(constructorView).html()).append('<button class="decor-btn">Выбрать</button>');

		$('.decor-view').find('.view-img-form').css("background-image", "url('img/forms/" + formStr + "_base.png')");

		$('.decor-wrapper').addClass('active');
	});
});

//просмотр украшений
$(function(){
	$('.decor-images__list').on('click', '.decor-images__item', function(){
		decorNum = $(this).index();

		$(this).addClass('active');
		$(this).siblings().removeClass('active');
				
		$('.decor-view').find('.decoration-image').css("background-image", "url('img/decor/" + decorNum + "_" + formStr + ".png')");

		if(decorNum == $('.decor-images__item').length - 1) {
			$('.view-img-decor').css("background-image", "");
		}
	});

	//выбор украшения
	$('.decor-view').on('click', '.decor-btn', function() {
		decorWasSelected = true;
		currentDecorNum = decorNum;

		$('.decoration-image').css("background-image", "url('img/decor/" + decorNum + "_" + formStr + ".png')");
		
		$('.info-decor').html('Украшение: ' + $('.decor-images__item.active').find('.decor-images__title').html());
		$('.decor-wrapper').removeClass('active');
	});
});

//закрытие блока украшений
$(function(){
	$('.close-decor-btn').on('click', function(e){
		e.preventDefault();
		$('.decor-wrapper').removeClass('active');
	});
});

//выбор веса
$(function(){
	$('.range-input__number').eq(1).addClass('active');
	$('.info-weight').html('Вес: ' + $('.range-input__number.active').html() + ' кг');
	
	$('.range').on('click mousemove', function() {
		var value = $('.range').val();
		$('.range-input__number').removeClass('active');
		$('.range-input__number').eq(value - 1).addClass('active');
		$('.info-weight').html('Вес: ' + $('.range-input__number.active').html() + ' кг');
	});
});

//swiper
var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  spaceBetween: 15,
  loop: false,
  pagination: {
  	el: '.swiper-pagination',
  	type: 'bullets',
  	clickable: true
	},
});

mySwiper.on('slideChange', function () {
  bulletActiveNum = $('.swiper-pagination-bullet-active').index();
	sliderItems.siblings().removeClass('active');
	$(sliderItems[bulletActiveNum]).addClass('active');

	$(fillingText).siblings().removeClass('active');
	$(fillingText[bulletActiveNum]).addClass('active');
});

var colorsForSouffle = [
"rgb(248, 113, 8)",
"rgb(251, 192, 34)",
"rgb(248, 82, 11)",
"rgb(252, 254, 204)",
"rgb(205, 215, 104)",
"rgb(120, 134, 21)",
"rgb(236, 220, 247)",
"rgb(144, 98, 170)",
"rgb(54, 11, 80)",
"rgb(139, 197, 247)"
];

var colorsForCream = [
"rgb(205, 215, 104)",
"rgb(120, 134, 21)",
"rgb(236, 220, 247)",
"rgb(144, 98, 170)",
"rgb(54, 11, 80)",
"rgb(139, 197, 247)"
];

var colorsForMastic = [
"rgb(248, 113, 8)",
"rgb(251, 192, 34)",
"rgb(248, 82, 11)",
"rgb(252, 254, 204)",
"rgb(205, 215, 104)"
];

var colorsForChocolate = [
"rgb(255, 255, 255)",
"rgb(52, 23, 0)"
];

function generateColors(i, el){
	$('.constructor-content__color').append('<li class="constructor-content__color-item"><span class="color-item__block" style="background-color:' + i +';"></span></li>');	
}

function determineSvg(){
	if ($('.constructor-content__form-item.circle').hasClass('active')) {
		$('.view-img-color__form_circle').addClass('active');
		$('.view-img-color__form_square').removeClass('active');
	}

	if ($('.constructor-content__form-item.square').hasClass('active')) {
		$('.view-img-color__form_square').addClass('active');
		$('.view-img-color__form_circle').removeClass('active');
	}
}