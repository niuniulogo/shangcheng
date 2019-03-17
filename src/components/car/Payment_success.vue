<template>
	
	<div class="container">
			<div id="wrapper" class="m_pwd">
			<div class="int_title"><span class="int_pic" @click="btn"><img src="static/images/jifen/pay_icon.png"/></span>支付成功<a class="pay_span" href="/">完成</a></div>
			<div class="pay_success topline">
				<div class="pay_s_box">
					<div class="pay_s_b_pic clearfix">
						<p class="pay_pic_img fl">
							<img src="static/images/index/dd_03.png" />
						</p>
						<p class="pay_pic_text fr">
							<span>支付方式 : <font>万福卡支付</font></span>
							<span>订单金额 : <font>680.0积分</font></span>
						</p>
					</div>
					<div class="pay_btn clearfix">
						<router-link to="/Order_details" class="pay_a_btn p_money fl">
							查看订单
						</router-link>
						<a href="/" class="pay_a_btn p_money fr">
							返回首页
						</a>
					</div>
				</div>
			</div>
			<!--banner start-->	
				<main class="pay_top">
					<div class="best_Sellers order_top best_top  clearfix">
						<h3 class="best_title pay_pading"><p>猜您喜欢</p></h3>
						<ul>
							<li class="border_right">
								<img src="static/images/jifen/sp.png" />
								<span>迷你智能电饭煲HYFG-1016</span>
								<span class="int_color">86.0积分</span>
							</li>
							<li>
								<img src="static/images/jifen/sp.png" />
								<span>迷你智能电饭煲HYFG-1016</span>
								<span class="int_color">86.0积分</span>
							</li>
							<li class="border_right">
								<img src="static/images/jifen/sp.png" />
								<span>迷你智能电饭煲HYFG-1016</span>
								<span class="int_color">86.0积分</span>
							</li>
							<li>
								<img src="static/images/jifen/sp.png" />
								<span>迷你智能电饭煲HYFG-1016</span>
								<span class="int_color">86.0积分</span>
							</li>
							<li class="border_right">
								<img src="static/images/jifen/sp.png" />
								<span>迷你智能电饭煲HYFG-1016</span>
								<span class="int_color">86.0积分</span>
							</li>
							<li>
								<img src="static/images/jifen/sp.png" />
								<span>迷你智能电饭煲HYFG-1016</span>
								<span class="int_color">86.0积分</span>
							</li>
							<li class="border_right">
								<img src="static/images/jifen/sp.png" />
								<span>迷你智能电饭煲HYFG-1016</span>
								<span class="int_color">86.0积分</span>
							</li>
							<li>
								<img src="static/images/jifen/sp.png" />
								<span>迷你智能电饭煲HYFG-1016</span>
								<span class="int_color">86.0积分</span>
							</li>
						</ul>
					</div>
					<p class="notice">没有更多商品了！</p>
				</main>
			</div>
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
			btn(){
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped lang="scss">	
	
	

</style>