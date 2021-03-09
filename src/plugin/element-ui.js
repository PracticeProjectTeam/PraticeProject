// 需要的element-ui组件在此处引入

import Vue from 'vue';
import {
  MessageBox,
  Message,
  Button,
  Checkbox,
  Radio,
  Select,
  Option,
  Input,
  Loading
} from 'element-ui'

Vue.use(Button);
Vue.use(Checkbox);
Vue.use(Radio);
Vue.use(Select);
Vue.use(Option);
Vue.use(Input);
Vue.prototype.$loading = Loading;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$message = Message;
Vue.prototype.$prompt = MessageBox.prompt;
