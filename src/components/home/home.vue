<template>
	
	<div class="container">
		<!-- 公共组件/头部定位 -->
		<common ></common>


			<!-- 轮播图 -->
		<van-swipe :autoplay="3000" :height="150" indicator-color="red">
		  <van-swipe-item v-for="val in lis" :key="val.id"  >
		  		<router-link :to=val.jump>
		  			<img :src=val.url />
		  		</router-link>	
			  
		  </van-swipe-item>
		</van-swipe>
		<!-- ---------九宫格 ---------->
		<div class="jiugong">
			<span>
				<router-link to="/Integral_mall">
					<img src="src/images/1.png" alt="">
					<p>积分商城</p>
				</router-link>
			</span>
			<span>
				<router-link to="/Media">
					<img src="src/images/2.png" alt="">
					<p>影音天地</p>
				</router-link>
			</span>
			<span>
				<router-link to="/Birthday_zone">
					<img src="src/images/3.png" alt="">
					<p>生日专区</p>
				</router-link>
			</span>
			<span>
				<router-link to="/Orchard_fragrance">
					<img src="src/images/4.png" alt="">
					<p>果园飘香</p>
				</router-link>
			</span>
			<span>
				<a href="#">
					<img src="src/images/5.png" alt="">
					<p>关爱健康</p>
				</a>
			</span>
			<span>
				<a href="#">
					<img src="src/images/6.png" alt="">
					<p>应季甄选</p>
				</a>
			</span>
			<span>
				<a href="#">
					<img src="src/images/7.png" alt="">
					<p>轻松出行</p>
				</a>
			</span>
			<span>
				<a href="#">
					<img src="src/images/8.png" alt="">
					<p>景点门票</p>
				</a>
			</span>
			
		</div>


		<!------------ 资讯-------- -->
       <div class="zx">
				<i></i>
       			<van-notice-bar text="广告招标------广告招标------广告招标----广告招标----广告招标" left-icon="volume-o"/>
        </div>


	<!-------------- 最新 上映 (sy)首字母组合------------>

	<div class="sy">

		<div  class="sy-a">
			<span>
			</span>
			<van-cell title="最新上映" is-link value="查看更多" to="/Media" />
		</div>


		<div  class="sy-b">
			<div>
				<router-link to="/Media">
					<img src="src/images/move/move_05.png" alt="">
				</router-link>
				<span>美国队长</span> <span>5.0</span>
			</div>
			<div>
				<router-link to="/Media">
					<img src="src/images/move/move2.png" alt="">
				</router-link>
				<span>霍比特人</span> <span>8.0</span>
			</div>
			<div>
				<router-link to="/Media">
					<img src="src/images/move/move3.png" alt="">
				</router-link>
				<span>简爱</span> <span>7.9</span>
			</div>
		</div>

		<div  class="sy-c">
			<span>
				<a href="#">
					<img src="src/images/base/birthday.png" alt="">
				</a>
				
			</span>
		</div>
	</div>



	<!-------------- 生日专区 ----------->
	<div class="borthday">

			<!-- 引用上映的模板头 -->
			<div class="sy"> 
				<div  class="sy-a">
					<span>
					</span>
					<van-cell title="生日专区" is-link value="查看更多" to="/Birthday_zone" />
				</div>
			</div>

		   
		<div class="borthday-a">
			<div class="borthday-a-l">
				<router-link to="/Birthday_zone">
					<img src="src/images/birthday/fuirt.png" alt="">
				</router-link>
			</div>
			<div class="borthday-a-r">
				<div class="borthday-a-r-1">
					<span>
						<router-link to="/Birthday_zone">
							<img src="src/images/birthday/friut2.png" alt="">
					</router-link>
					</span>
					
				</div>
				<div class="borthday-a-r-2">
					<span>
						<router-link to="/Birthday_zone">
							<img src="src/images/birthday/birth3.png" alt="">
					</router-link>
					</span>
					<span>
						<router-link to="/Birthday_zone">
							<img src="src/images/birthday/birth3-07.png" alt="">
						</router-link>
					</span>
				</div>
			</div>
		</div>   

	</div>
			<!---------------- 果园飘香 ---------------->
		<div class="gy">
				<!-- 引用上映的模板头 -->
			<div class="sy"> 
				<div  class="sy-a">
					<span></span>
					<van-cell title="果园飘香" is-link value="查看更多" to="/Orchard_fragrance" />
				</div>
			</div>

				<div class="gy-a">
					<div class="gy-a-l">
						<router-link  to="/Orchard_fragrance">
							<img src="src/images/furit/fuirt-08.png" alt="">
						</router-link>
					</div>
					<div class="gy-a-r">
						<div class="gy-a-r-1">
							<span>
								<router-link  to="/Orchard_fragrance">
									<img src="src/images/furit/friut2-09.png" alt="">
								</router-link>
							</span>
							
						</div>
						<div class="gy-a-r-2">
							<span>
								<router-link  to="/Orchard_fragrance">
									<img src="src/images/furit/friut2-10.png" alt="">
								</router-link>
							</span>
						</div>
					</div>
				</div> 
		</div>
		<!-------------------- 积分商城----------- -->
		<div class="jf">
					<!-- 引用上映的模板头 -->
			<div class="sy"> 
				<div  class="sy-a">
					<span></span>
					<van-cell title="积分商城" is-link value="查看更多" to="/Integral_mall"/>
				</div>
			</div>


		<div class="jf-a">
			<span>
				<router-link to="/Integral_mall">
					<img src="src/images/integral/jf-13.png" alt="">
				</router-link>
			</span>
			<span>
				<router-link to="/Integral_mall">
					<img src="src/images/integral/jf.png" alt="">
				</router-link>
			</span>
			<span>
				<router-link to="/Integral_mall">
					<img src="src/images/integral/jf-14.png" alt="">
				</router-link>
			</span>
			<span>
				<router-link to="/Integral_mall">
					<img src="src/images/integral/jf-15.png" alt="">
				</router-link>
			</span>
		</div>

		</div>


	</div>

</template>
<script>
	import	common from '../common/common.vue'
	export default{
		data(){
			return{
				  lis: [
				  	{"id":1,"url":"src/images/base/banner1.png","jump":"/Orchard_fragrance"},
				  	{"id":2,"url":"src/images/base/banner2.jpg","jump":"/Birthday_zone"},
				  	{"id":3,"url":"src/images/base/banner3.jpg","jump":"/Integral_mall"},
			      ]
			}
		},
		components:{
			common
		}
	}
</script>
<style scoped lang="scss">	
	.container{
		width: 100%;
		.van-swipe{
			img{
				width: 100%;
			}
		}
		.jiugong{
			margin-top: 10px;
			display: flex;
			flex-wrap: wrap;
			text-align: center;
			align-items: center;
			span{
				width: 25%;
				height: 96px;
				box-sizing: border-box;
				background-color: #eee;
				padding: 10px 10px;
				a{
					width: 100%;
					height: 100%;
						display: block;
						p{
							font-size: 14px;
							color: #838282;
						}
						img{
							width: 50px;
							height: 50px;
							display: inline-block;
							}
				}
			}
		}

		.zx{
			position: relative;
			height: 40px;
			width: 100%;
			i{
				position:absolute;
						top: 3px;
						left: -10px;
						width: 120px;
						height: 40px;
						display: inline-block;
						transform: scale(0.5);
						display: inline-block;
				background:url("/src/images/jd-sprites.png") no-repeat -72px -262px;
			}
			.van-notice-bar{
				margin-left: 80px;

			}
		}
		.sy{
			.sy-a{
				height: 44px;
				width: 100%;
				position: relative;
				span{
					position: absolute;
					left: 10px;
					top:-5px;
					z-index: 99;
					width: 45px;
					height: 45px;
					transform: scale(0.7);
					display: inline-block;
					background:url("/src/images/jd-sprites.png") no-repeat 1px -281px;

				}
				.van-cell{
					box-sizing: border-box;
					margin-left: 40px;
					padding-right:60px; 
					font-size: 20px;
				}
			}
			.sy-b{
				height: 139px;
				width: 100%;
				display: flex;
				overflow: hidden;
				div{
					flex: 1;
					padding:0 10px;
					box-sizing: border-box;
					position: relative;
					span:nth-child(2){
						position: absolute;
						bottom: 10px;
						font-size: 14px;
						left: 13px;
						color: #fff;
					}
					span:nth-child(3){
						color: gold;
						position: absolute;
						right: 14px;
						bottom: 10px;
					}
					img{
						width: 100%;
					}
				}
			}
			.sy-c{
				margin: 15px 0;
				height: 80px;
				span{
					height: 80px;
					display: block;
					img{
						width: 100%;
						height: 100%;

					}
				}
				
				
			}
			
		}

		.borthday{

			.borthday-a{
						height: 200px;

						display: flex;
					.borthday-a-l{
						flex:2;
						height: 200px;
						img{
							width: 100%;
							height: 100%;
						}
					}
					.borthday-a-r{
						flex: 3;
						display: flex;
						flex-direction:column;
						.borthday-a-r-1{
							flex:1;
							height: 50%;

							span{
								width: 100%;
								height: 100%;
								display: inline-block;
								img{
									width: 100%;
									height: 100%;

								}
							}
							
						}
						.borthday-a-r-2{
							flex:1;
							height: 50%;
							display: flex;
							span{
								width: 100%;
								height: 100%;
								display: inline-block;
								img{
									width: 100%;
									height: 100%;
								}
							}
						}

					}	
			}
	

		}
		.gy{
			.gy-a{
					height: 200px;
					display: flex;
					.gy-a-l{
							flex:2;
							height: 200px;
							img{
								width: 100%;
								height: 100%;
							}
						 }
				.gy-a-r{
						flex: 3;
						display: flex;
						flex-direction:column;
						.gy-a-r-1{
							flex:1;
							height: 50%;
							span{
								width: 100%;
								height: 100%;
								display: inline-block;
								img{
									width: 100%;
									height: 100%;
								}
							}
							
						}
						.gy-a-r-2{
							flex:1;
							height: 50%;
							span{
								width: 100%;
								height: 100%;
								display: inline-block;
								img{
									width: 100%;
									height: 100%;
								}
							}
						}

					}	
			}
		}

	.jf{

		.jf-a{
			display: flex;
			flex-wrap: wrap;
			span{
				width: 50%;
				height: 100px;
				display: inline-block;
				box-sizing: border-box;
				padding:0 10px;
				margin-bottom: 10px;
				img{
					width: 100%;
					height: 100%;
				}

			}
		}
	}	

	}
	

</style>
