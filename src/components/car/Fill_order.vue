<template>
	
	<div class="container">
		<div id="wrapper">
			<div class="int_title"><span class="int_pic" @click="btn"><img src="static/images/jifen/left.png"/></span>填写订单</div>
			<div class="m_pwd topline" style="height: auto;">
				<div class="fill_order clearfix">
					<ul class="fill_box">
						<li class="fill_left fill_list fl">
							<span class="fill_span">李某  139****1234</span>
							<p class="fill_pic clearfix">
								<span class="span_pic fl"><img src="static/images/ddxq/icon.png"></span>
								<span class="span_text fr">北京市丰台区北京市丰台区北京市丰台区北京市丰台区北京市丰台区</span>
							</p>
						</li>
						<li class="fill_right fill_list fr">
							<a href="Receipt_info.html#"><img src="static/images/ddxq/right.png" class="fill_img" /></a>
						</li>
					</ul>
				</div>
				<div class="fill_main">
					<dl class="fill_dl clearfix">
						<dt class="fill_p_pic fl">
							<img src="static/images/shoppingcart/inter.png" />
						</dt>
						<dd class="fill_p_text fr">
							<span class="fill_p_con">Dior/迪奥小姐花漾淡香氛50ml 甜心女士淡香EDT 清新甜美</span>
							<p class="fill_p">规格：50ml<span class="f_right fr">x1</span></p>
							<span class="fill_int">1329.0积分</span>
						</dd>
					</dl>
					<dl class="fill_dl clearfix">
						<dt class="fill_p_pic fl">
							<img src="static/images/shoppingcart/inter.png" />
						</dt>
						<dd class="fill_p_text fr">
							<span class="fill_p_con">Dior/迪奥小姐花漾淡香氛50ml 甜心女士淡香EDT 清新甜美</span>
							<p class="fill_p">规格：50ml<span class="f_right fr">x1</span></p>
							<span class="fill_int">1329.0积分</span>
						</dd>
					</dl>
					<dl class="fill_dl clearfix">
						<dt class="fill_p_pic fl">
							<img src="static/images/shoppingcart/inter.png" />
						</dt>
						<dd class="fill_p_text fr">
							<span class="fill_p_con">Dior/迪奥小姐花漾淡香氛50ml 甜心女士淡香EDT 清新甜美</span>
							<p class="fill_p">规格：50ml<span class="f_right fr">x1</span></p>
							<span class="fill_int">1329.0积分</span>
						</dd>
					</dl>
					<dl class="fill_dl clearfix">
						<dt class="fill_p_pic fl">
							<img src="static/images/shoppingcart/inter.png" />
						</dt>
						<dd class="fill_p_text fr">
							<span class="fill_p_con">Dior/迪奥小姐花漾淡香氛50ml 甜心女士淡香EDT 清新甜美</span>
							<p class="fill_p">规格：50ml<span class="f_right fr">x1</span></p>
							<span class="fill_int">1329.0积分</span>
						</dd>
					</dl>
					<dl class="fill_dl clearfix">
						<dt class="fill_p_pic fl">
							<img src="static/images/shoppingcart/inter.png" />
						</dt>
						<dd class="fill_p_text fr">
							<span class="fill_p_con">Dior/迪奥小姐花漾淡香氛50ml 甜心女士淡香EDT 清新甜美</span>
							<p class="fill_p">规格：50ml<span class="f_right fr">x1</span></p>
							<span class="fill_int">1329.0积分</span>
						</dd>
					</dl>
					<dl class="fill_dl con_botton clearfix">
						<div class="fil_back">
							<p class="fill_amount">商品金额<span class="fill_amout_right">500积分</span></p>
						</div>
					</dl>
				</div>
					<div class="aa ">
					<span class="">实付款：2600积分</span>
					<span>
						<router-link to="/Payment_success">确认提交</router-link>
					</span>
					
				</div>

			</div>
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
	
	.aa{
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		font-size: 20px;
		span:nth-child(2){
			a{
				color: #fff;
				width: 100px;
				height: 30px;
				text-align: center;;
				line-height: 30px;
				display: inline-block;
				background: red;
			}
			
		}
	}

</style>