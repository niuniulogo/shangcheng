<template>
	
	<div class="container">
		<div id="wrapper">
			<div class="int_title"><span class="int_pic"><img src="static/images/jifen/left.png"/></span>购票成功</div>
			<div class="m_pwd success_main">
				<div class="success topline">
					<div class="success_boox">
						<p class="s_pic clearfix">
							<span class="s_p_img fl"><img src="static/images/index/dd_03.png"/></span>
							<span class="s_p_txt fr">交易成功!</span>
						</p>
						<div class="s_text">
							<p class="s_t_con">
								您将在15分钟内收到取票短信，请凭短信中的取票密码在影院自助取票机取票。
							</p>
							<p class="s_t_main">
								<span>订单号：111122223333</span>
								<span>影片：疯狂的石头</span>
								<span>影院：朝阳区星美影城</span>
								<span>座位：2张(5排8座 5排9座)</span>
								<span>付款：20积分</span>
							</p>
						</div>
					</div>
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
		created(){
			setTimeout( ()=>{
				this.bg();
			},2000);
		},
		methods:{
			bg(){
				this.$router.push('home')
			}
		}
	}
</script>
<style scoped lang="scss">	
	
	

</style>