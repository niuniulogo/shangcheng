<template>
	
	<div>
			<div id="wrapper">
			<div class="int_title"><span class="int_pic"><a href="index.html"><img src="static/images/jifen/left.png"/></a></span>生日专区</div>
			<!--banner start-->
			<div id="slider" class="integ">
				<div class="swiper-container clearfix">
					
						<van-swipe :autoplay="3000" :height="150" indicator-color="red" class="swiper-wrapper">
						  	<van-swipe-item   class="swiper-slide">
						  		<router-link to="#">
						  			<img src="static/images/birthday/banner.jpg"/>
						  		</router-link>	
						 	 </van-swipe-item>
						 	 <van-swipe-item   class="swiper-slide">
						  		<router-link to="#">
						  			<img src="static/images/birthday/banner1.png"/>
						  		</router-link>	
						 	 </van-swipe-item>
						 	 <van-swipe-item   class="swiper-slide">
						  		<router-link to="#">
						  			<img src="static/images/birthday/banner3.png"/>
						  		</router-link>	
						 	 </van-swipe-item>

						</van-swipe>
					
						
					
				</div>
				<!--
				<div class="slider-btn clearfix">
					<span class="active"></span>
					<span></span>
					<span></span>
				</div>
				-->
				<div class="swiper-pagination"></div>
			</div>
			<!--banner end-->
				<main class="Media_bottom">
					<div class="floor clearfix">
						<div class="floor-container">
						<div class="birthay clearfix">
							<div class="birthay_left">
								<a href="Details_zoom.html"><img src="static/images/birthday/jieri.png" /></a>
							</div>
							<div class="birthay_right">
								<a href="Details_zoom.html" class="birthay_bottom"><img src="static/images/birthday/birthday_05.png"/></a>
								<a href="Details_zoom.html"><img src="static/images/birthday/birthday_08.png"/></a>
							</div>
						</div>
						</div>
					</div>
		            <!--floor start-->
		            <div class="floor clearfix">
						<div class="floor-container recommend">
						     <!--为你推荐-->
								<div class="layout">
									<span>为你推荐</span>
							<!--推荐产品-->
						</div>
					</div>
				</div>
					<div class="birthday_content clearfix">
							<a href="Inner_page.html" class="birthday_pic"><img src="static/images/birthday/birth.png"/></a>
							<a href="Inner_page.html" class="birthday_pic"><img src="static/images/birthday/birth-05.png"/></a>
							<a href="Inner_page.html" class="birthday_pic"><img src="static/images/birthday/birth-06.png"/></a>
							<a href="Inner_page.html" class="birthday_pic"><img src="static/images/birthday/birth-07.png"/></a>
							<a href="Inner_page.html" class="birthday_pic"><img src="static/images/birthday/birth-08.png"/></a>
							<a href="Inner_page.html" class="birthday_pic"><img src="static/images/birthday/birth-09.png"/></a>
					</div>
					<!--floor start-->
				</main>
			</div>
			<!--back_top  end-->
			<div id="back_top">
				<a href="#"><img src="static/images/xqq/the_top.png" /></a>
			</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{}
		}
	}
</script>
<style scoped lang="scss">	
	
	

</style>