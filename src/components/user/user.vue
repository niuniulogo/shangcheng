<template>
	
	<div>

		<van-cell-group>
	  <van-field v-model="username" label="用户名" placeholder="请输入用户名" left-icon="contact" required/>

	  <van-field v-model="password" type="password"  label="密码"  placeholder="请输入密码" required />
	  <van-field v-model="password1" type="password"  label="确认密码"  placeholder="请再次输入密码" required />

    	<van-field v-model="sms" center clearable label="短信验证码" placeholder="请输入短信验证码">
				  <van-button slot="button" size="small" type="primary">发送验证码</van-button>
	  	</van-field>
	  	<van-button size="large" type="primary">注册</van-button>
		</van-cell-group>
		
	</div>

</template>
<script>
	// import areaList from '../../../node_modules/_vant@1.5.9@vant/packages/area/demo/area.js';
	export default{
		data(){
			return{
				sms:'',
				username:'',
				password:'',
				password1:''
				
			}
		}
		  
}
	
</script>
<style scoped lang="scss">	
	
	

</style>