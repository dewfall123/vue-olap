import CompositionApi from '@vue/composition-api';

export default ({
  Vue, // VuePress 正在使用的 Vue 构造函数
}) => {
  Vue.use(CompositionApi);
};
