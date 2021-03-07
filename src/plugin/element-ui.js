// 需要的element-ui组件在此处引入

import Vue from 'vue';
import {
  MessageBox,
  Message,
  Button,
  Checkbox,
  Radio
} from 'element-ui'

Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Radio);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;