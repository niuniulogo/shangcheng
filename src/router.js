import Router from 'vue-router';
import home from './components/home/home.vue';
import fenlei from './components/fenlei/fenlei.vue'
import user from './components/user/user.vue'
import Orchard_fragrance from './components/home/Orchard_fragrance.vue'
import Birthday_zone from './components/home/Birthday_zone.vue'
import Integral_mall from './components/home/Integral_mall.vue'
import Media from './components/home/Media.vue'
import Fill_name from './components/home/Fill_name.vue'
import Ticket_details from './components/home/Ticket_details.vue'
import Online_selection from './components/home/Online_selection.vue'
import Confirm_order from './components/home/Confirm_order.vue'
import Success_order from './components/home/Success_order.vue'
import Shopping_Cart from './components/car/Shopping_Cart.vue'
import Fill_order from './components/car/Fill_order.vue'
import Payment_success from './components/car/Payment_success.vue'
import Order_details from './components/car/Order_details.vue'

export default new Router({
		// mode: 'history',
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/Orchard_fragrance',component:Orchard_fragrance},
		{path:'/Birthday_zone',component:Birthday_zone},
		{path:'/Integral_mall',component:Integral_mall},
		{path:'/Fill_name',component:Fill_name},
		{path:'/Ticket_details',component:Ticket_details},
		{path:'/Online_selection',component:Online_selection},
		{path:'/Confirm_order',component:Confirm_order},
		{path:'/Success_order',component:Success_order},
		{path:'/shopcar',component:Shopping_Cart},
		{path:'/Fill_order',component:Fill_order},
		{path:'/Payment_success',component:Payment_success},
		{path:'/Order_details',component:Order_details},
		{path:'/Media',component:Media},
		{path:'/fenlei',component:fenlei},
		{path:'/user',component:user},

	]
})