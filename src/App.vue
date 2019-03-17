<template>
	<div class="container">
		<transition   >
			<router-view ></router-view>
		</transition>	


	

		<!-- 底部栏 -->
		<footer class="footer" >
			<span>
				<router-link to="/home" target="a">
					<van-icon name="shop" size="25px"  />
					<p>首页</p>
				</router-link>
			</span>
			<span>
				<router-link to="/fenlei">
					<van-icon name="bars" size="25px" />
					<p>分类</p>
				</router-link>
			</span>
			<span>
				<router-link to="/shopcar">
					<van-icon name="shopping-cart" size="25px" info="9" />
					<p>购物车</p>
				</router-link>
				
			</span>
			<span>
				<router-link to="/user">
					<van-icon name="manager" size="25px"   />
					<p>我的</p>
				</router-link>
				
			</span>
		</footer>
		<!-- 清除页面显示不全 -->
		<div class="foo"></div>
		

	</div>
	

</template>


<script>
	
	export default{
		data(){
			return {
				aa:true
			}
		},
		created(){
			
					
		},
		methods:{
		
			
		},
		watch:{

		}
		
	}
</script>

<style scoped lang="scss">
	.v-enter{
			transform: translateX(100%);
			overflow: hidden;
		}
		.v-leave-to{
			transform: translateX(-100%);
			position:absolute;
			overflow: hidden;
		}
		.v-enter-active,
 		.v-leave-active {
  			transition:  all .3s
		}



		.container{
			width: 100%;
			z-index: -1;
			.footer{
				position: fixed;
				left: 0;
				bottom: 0;
				background-color: #fff;
				width: 100%;
				height: 50px;
				display: flex;
				border-top: 4px solid #DBDBDB;
				span{
					width: 25%;
					height: 100%;
					display: inline-block;
					text-align: center;
					a{
						color: #494949;
					}
					.router-link-active{
						color: red;
					}
				
				}
				}
				.foo{
					width: 100%;
					height: 50px;
				}
		}
	
	
	
</style>