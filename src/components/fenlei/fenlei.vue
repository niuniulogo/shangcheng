
<template>
	
	<div class="container">
		<!-- 公共组件/头部定位 -->
		<common></common>
		<div class="fenlei">

			<div class="fenlei-l">
				<div class="fenlei-l-a">
					<van-badge-group :active-key="activeKey" @change="onChange">
					  <van-badge title="美容护肤" />
					  <van-badge title="影音天地" />
					  <van-badge title="生日专区" />
					  <van-badge title="生活电器" />
					  <van-badge title="应季甄选" />
					  <van-badge title="果园飘香" />
					  <van-badge title="电子数码" />
					  <van-badge title="景点门票" />
					  <van-badge title="文玩空间" />
					  <van-badge title="果园飘香1" />
					  <van-badge title="轻松出行2" />
					  <van-badge title="景点门票3" />
					  <van-badge title="文玩空间4" />
					</van-badge-group>
				</div>
			</div>

			<div class="fenlei-r">
				<div class="fenlei-r-a" id="rr">

					<div class="fenlei-r-a-b" id="0">
						<h4>美容护肤</h4>
						<div class="fenlei-r-a-b-1">
							<span>
								<a href="#">
									<img src="src/images/fenlei/fenlei-05.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/fenlei/fenlei-05.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/fenlei/fenlei-05.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/fenlei/fenlei-05.png" alt="">
								</a>
							</span>
						</div>
					</div>

					<div class="fenlei-r-a-b" id="1">
						<h4>影音天地</h4>
						<div class="fenlei-r-a-b-1">
							<span>
								<a href="#">
									<img src="src/images/move/move2.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/move/move2.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/move/move2.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/move/move2.png" alt="">
								</a>
							</span>
						</div>
					</div>

					<div class="fenlei-r-a-b" id="2">
						<h4>生日专区</h4>
						<div class="fenlei-r-a-b-1">
							<span>
								<a href="#">
									<img src="src/images/birthday/birth-06.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/birthday/birth-06.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/birthday/birth-06.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/birthday/birth-06.png" alt="">
								</a>
							</span>
						</div>
					</div>

					<div class="fenlei-r-a-b" id="3">
						<h4>生活电器</h4>
						<div class="fenlei-r-a-b-1">
							<span>
								<a href="#">
									<img src="src/images/fenlei/fenlei-03.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/fenlei/fenlei-03.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/fenlei/fenlei-03.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/fenlei/fenlei-03.png" alt="">
								</a>
							</span>
						</div>
					</div>


					<div class="fenlei-r-a-b" id="4">
						<h4>应季甄选</h4>
						<div class="fenlei-r-a-b-1">
							<span>
								<a href="#">
									<img src="src/images/friut/fruit_20.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/friut/fruit_20.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/friut/fruit_20.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/friut/fruit_20.png" alt="">
								</a>
							</span>
						</div>
					</div>

					<div class="fenlei-r-a-b" id="5">
						<h4>果园飘香</h4>
						<div class="fenlei-r-a-b-1">
							<span>
								<a href="#">
									<img src="src/images/friut/fruit_16.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/friut/fruit_16.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/friut/fruit_16.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/friut/fruit_16.png" alt="">
								</a>
							</span>
						</div>
					</div>


					<div class="fenlei-r-a-b" id="6">
						<h4>电子数码</h4>
						<div class="fenlei-r-a-b-1">
							<span>
								<a href="#">
									<img src="src/images/fenlei/fenlei-07.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/fenlei/fenlei-07.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/fenlei/fenlei-07.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/fenlei/fenlei-07.png" alt="">
								</a>
							</span>
						</div>
					</div>

					<div class="fenlei-r-a-b" id="7">
						<h4>景点门票</h4>
						<div class="fenlei-r-a-b-1">
							<span>
								<a href="#">
									<img src="src/images/perf/perf.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/perf/perf.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/perf/perf.png" alt="">
								</a>
							</span>
							<span>
								<a href="#">
									<img src="src/images/perf/perf.png" alt="">
								</a>
							</span>
						</div>
					</div>

				</div>

			</div>
		</div>

	</div>
		




</template>
<script>
		import	common from '../common/common.vue'
	export default{
		data(){
			return{
				 activeKey: 0,
				 kai:false,
				 rr1:null,
				 

			}
		},
		components:{
			common
		},
		  methods: {

		    onChange(key) {
		    	if(this.kai){
		    		this.activeKey = key;
		    		this.rr1.style.transition="all .5s";
		    		this.rr1.style.transform="translateY("+(-this.activeKey*270)+"px)";
		    		// this.rr1.style.transform=null;

		    	} 

		    },
	
		  },
	
		  created(){
		  	if(this.kai){

		  	}else{
		  		this.$toast.loading({
				  mask: true,
				  message: '加载中...',
				  duration:"500"
				});
		  	}
		  	 
		  },
		  mounted(){
		  	var rr1=document.getElementById('rr');
		  	this.rr1=rr1;
		  	if(rr1.offsetTop){
		  		this.kai=true;

		  	}else{

		  	}
		  	
		  }

	}
</script>
<style scoped lang="scss">	
	.container{
		.fenlei{
			margin-top: 10px;
			display: flex;
			height: 567px;
			overflow: hidden;
			.fenlei-l{
			overflow: auto;
			width: 120px;
			}
			
			.fenlei-r{
				width: 100%;
				overflow: auto;
				.fenlei-r-a{
					width: 100%;
					height: 800px;
					background: gold;

					.fenlei-r-a-b{
						width: 100%;
						height: 250px;
						box-sizing: border-box;
						margin-bottom: 20px;
						.fenlei-r-a-b-1{
							width: 100%;
							height: 100%;
							display: flex;
							flex-wrap: wrap;
							background-color:blue; 
							span{
								width: 50%;
								height: 50%;
								display: inline-block;
								background-color: green;
								padding:5px;
								box-sizing: border-box;

								img{
									width: 100%;
									height: 100%;
								}
							}
						}
					}
				}

			}
		}
		/*隐藏滚动条，不兼容PC端*/
		.fenlei-l::-webkit-scrollbar {
    			display: none;
				}
		.fenlei-r::-webkit-scrollbar {
    			display: none;
				}
		
	}
	

</style>