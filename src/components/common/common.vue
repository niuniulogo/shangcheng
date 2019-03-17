
<template>
	
	<div class="container"   >
		<!-- 头部固定定位 -->
		<div class="fixed"  v-cloak>
			<van-row class="fixed-a"  v-cloak>
			  <van-col span="4" class="fixed-a-b"  v-cloak>
			  	<a href="#">
			  		<span ></span>
			  	</a>
			  </van-col>
			  <van-col span="16"  v-cloak>
			  	<van-search placeholder="请输入搜索关键词" class="fixed-a-a"  shape="round" background v-model="val"  />
			  </van-col>
			  <van-col span="4"  v-cloak>
			  	<van-cell value="北京" is-link arrow-direction="down" size="large" class="van-cell"/>
			  </van-col>
			</van-row>
		</div>
	
	

	</div>

</template>
<script>
	export default{
		data(){
			return{
				val:'',
			}
		}
	}
</script>
<style scoped lang="scss">	
	
	.container{
		width: 100%;
		height: 40px;
		.fixed{
			height: 40px;
			position: fixed;
			left:50%;
			top: 0;
			max-width: 640px;
			width: 100%;
			transform:translateX(-50%);
			z-index: 999;
			.fixed-a{
				height: 40px;
				overflow: hidden;
				/*background-color: gold;*/
				position: relative;
				left: 50%;
				top: 0;
				transform:translateX(-50%);
				.fixed-a-a{
					height: 40px;

				}
				.fixed-a-b{
					a{
						width: 100%;
						height: 40px;
						display: inline-block;
						/*position: relative;*/
						span{
							position: absolute;
							top: -11px;
							left: 8px;
							width: 60px;
							height: 70px;
							display: inline-block;
							transform: scale(0.5);
							display: inline-block;
							background: url('../../images/jd-sprites.png') no-repeat 1px -213px;
							

						}
					}

				}

			.van-cell{
				padding: 0 ;
				margin:10px 0;
				background: rgba(0,0,0,0);

			}
			
			}

		}
	}

</style>