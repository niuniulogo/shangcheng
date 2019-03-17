<template>
	
	
		<div id="wrapper">
			<div class="int_title"><span class="int_pic"  @click="btn"><img src="static/images/jifen/left.png"/></span>确认订单</div>
			<div class="m_pwd topline">
				<div class="confirm">
					<div class="con_txt">
						<span class="con_title con_maig">美国队长3</span>
						<span class="con_title">今天05-31 15:28</span>
						<span class="con_title">万达国际影城</span>
						<span class="con_title">6号厅 (5排5号，5排6号)</span>
						<span class="con_title">接收取票短信手机号：1393699999<a href="#"><img src="static/images/marge/icon_03.png"/></a></span>
					</div>
					<div class="con_top topline">
						<img src="static/images/marge/bc.png" />
						<p class="con_int">
							<span class="con_left">总价：46积分</span>
							<span class="con_right">影票由万福网提供</span>
						</p>
					</div>
				</div>
				<div class="con_list">
					<div class="con_content">
						<span class="c_lit">注意事项</span>
						<span>1.每笔订单最多可选购4张电影票；情侣座不单卖；</span>
						<span>2.选座时，请尽量选择相邻座位，请不要留下单个座位；</span>
						<span>3.部分影院3D眼镜需要押金，请观影前准备好现金；</span>
						<span>4.进入付款页面后，请15分钟内完成支付</span>
						<span>5.选座购票为特殊商品，出票成功后不得退换；</span>
						<span>6.客服电话400-096-0730。</span>
					</div>
				</div>
				<div class="aa ">
					<span class="">总金额：46积分</span>
					<span>
						<router-link to="/Success_order">确认提交</router-link>
					</span>
					
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