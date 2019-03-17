<template>
	
	<div class="container">
		<div id="wrapper">
			<div class="int_title"><span class="int_pic" @click="bg"><img src="static/images/jifen/left.png"/></span>影音天地</div>
			<!--banner start-->
			<div id="slider" class="integ">
				<div class="swiper-container clearfix">

					<van-swipe :autoplay="3000" :height="150" indicator-color="red" class="swiper-wrapper">
						  	<van-swipe-item   class="swiper-slide">
						  		<router-link to="/Ticket_details">
						  			<img src="static/images/move/banner.png"/>
						  		</router-link>	
						 	 </van-swipe-item>
						 	 <van-swipe-item   class="swiper-slide">
						  		<router-link to="/Ticket_details">
						  			<img src="static/images/move/banner1.jpg"/>
						  		</router-link>	
						 	 </van-swipe-item>
						 	 <van-swipe-item   class="swiper-slide">
						  		<router-link to="/Ticket_details">
						  			<img src="static/images/move/banner2.jpg"/>
						  		</router-link>	
						 	 </van-swipe-item>

						</van-swipe>

					
				</div>
				<div class="swiper-pagination"></div>
			</div>
			<!--banner end-->
				<main class="Media_bottom">
					<div class="floor clearfix">
						<div class="floor-container">
							<div class="title-wrap">
								<span class="sprite-icon secskill-icon fl"></span>
	            				<h2 class="secskill-title fl">最新上映</h2>
	            				<router-link to="/Fill_name">
	            					<div class="secskill-more fr">
											<span >查看更多</span>						
										<span class="sprite-icon"></span>
									</div>
	            				</router-link>
							</div>
							<div class="media clearfix">
								<ul class="swiper-wrapper media_content clearfix">
									<li class="swiper-slide fl">
										<a href="Quick_ticket.html"><img src="static/images/move/index_11.png" /></a>
										<p class="secskill-main clearfix"><span class="secskill-title-con">美国队长3</span><span class="secskill-number">8.0</span></p>
									</li>
									<li class="swiper-slide fl">
										<a href="Quick_ticket.html"><img src="static/images/move/move2.png" /></a>
										<p class="secskill-main clearfix"><span class="secskill-title-con">霍比特人</span><span class="secskill-number">8.0</span></p>
									</li>
									<li class="swiper-slide fl">
										<a href="Quick_ticket.html"><img src="static/images/move/move3.png" /></a>
										<p class="secskill-main clearfix"><span class="secskill-title-con">简爱</span><span class="secskill-number">7.9</span></p>
									</li>
									<li class="swiper-slide fl">
										<a href="Quick_ticket.html"><img src="static/images/move/index_11.png" /></a>
										<p class="secskill-main clearfix"><span class="secskill-title-con">美国队长3</span><span class="secskill-number">8.0</span></p>
									</li>
									<li class="swiper-slide fl">
										<a href="Quick_ticket.html"><img src="static/images/move/index_11.png" /></a>
										<p class="secskill-main clearfix"><span class="secskill-title-con">美国队长3</span><span class="secskill-number">8.0</span></p>
									</li>
									<li class="swiper-slide fl">
										<a href="Quick_ticket.html"><img src="static/images/move/index_11.png" /></a>
										<p class="secskill-main clearfix"><span class="secskill-title-con">美国队长3</span><span class="secskill-number">8.0</span></p>
									</li class="swiper-slide">									
								</ul>
							</div>
						</div>
					</div>
		            <!--floor start-->
		            <div class="floor clearfix">
						<div class="floor-container">
							<div class="title-wrap">
								<span class="sprite-icon secskill-icon fl"></span>
	            				<h2 class="secskill-title fl">演出资讯</h2>
	            				<a href="Performance_information.html">
		            				<div class="secskill-more fr">
										<span>查看更多</span>
										<span class="sprite-icon"></span>
									</div>
	            				</a>
							</div>
			           		<div class="floor-container morencon media_nav">
			           			<a href="Quick_ticket.html">
			           				<div class="left">
			         					<img src="static/images/move/move_08.png"/>
			         					<span class="topline">中国儿童艺术剧院儿童童剧《伊索寓言》</span>
			         					<span>2016.05.23-2016.06.31</span>
			         				</div>
			           			</a>
			           			<a href="Quick_ticket.html">
			           				<div class="right">
			         					<img src="static/images/move/move_08.png"/>
			         					<span class="topline">中国儿童艺术剧院儿童童剧《伊索寓言》</span>
			         					<span>2016.05.23-2016.06.31</span>
			         				</div>
			           			</a>
			           			<a href="Quick_ticket.html">
			           				<div class="left">
			         					<img src="static/images/move/move_08.png"/>
			         					<span class="topline">中国儿童艺术剧院儿童童剧《伊索寓言》</span>
			         					<span>2016.05.23-2016.06.31</span>
			         				</div>
			           			</a>
			           			<a href="Quick_ticket.html">
			           				<div class="right">
			         					<img src="static/images/move/move_08.png"/>
			         					<span class="topline">中国儿童艺术剧院儿童童剧《伊索寓言》</span>
			         					<span>2016.05.23-2016.06.31</span>
			         				</div>
			           			</a>
			           			<a href="Quick_ticket.html">
			           				<div class="left">
			         					<img src="static/images/move/move_08.png"/>
			         					<span class="topline">中国儿童艺术剧院儿童童剧《伊索寓言》</span>
			         					<span>2016.05.23-2016.06.31</span>
			         				</div>
			           			</a>
			           			<a href="Quick_ticket.html">
			           				<div class="right">
			         					<img src="static/images/move/move_08.png"/>
			         					<span class="topline">中国儿童艺术剧院儿童童剧《伊索寓言》</span>
			         					<span>2016.05.23-2016.06.31</span>
			         				</div>
			           			</a>
			            	</div>
						</div>
					</div>
					<!--floor start-->
				</main>
			</div>
			<!--menu  end-->
			<div id="back_top">
				<a href="#"><img src="static/images/xqq/the_top.png" /></a>
			</div>


	</div>

</template>
<script>
	export default{
		data(){
			return{}
		},
		methods:{
			bg(){
				this.$router.go(-1);
			},

		}
	}
</script>
<style scoped lang="scss">	
	
	

</style>