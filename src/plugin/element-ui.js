// 需要的element-ui组件在此处引入

import Vue from 'vue';
import {
  MessageBox,
  Message,
  Button,
  Loading
} from 'element-ui'

Vue.use(Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
Vue.prototype.$loading = Loading