<template>
  <div>
    <VueG2Charts :data="cube" :config="config"></VueG2Charts>
    <!-- {{ cube }} -->
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, Ref } from '@vue/composition-api';
import VueG2Charts from 'vue-g2-charts';
import {
  useOLAP,
  SourceData,
  Columns,
  Options,
  CubeSettings,
} from '@dewfall/vhooks-vue2';
import { DataSchema } from './demo/data';

export default defineComponent({
  components: {
    VueG2Charts,
  },
  props: {
    data: { type: Array, default: () => [] },
    columns: { type: Object, default: () => {} },
    options: { type: Object, default: () => {} },
    defaultValues: { type: Object, default: () => {} },
  },
  setup(props) {
    const dataSource = computed(() => props.data) as Ref<DataSchema[]>;
    const columns = computed(() => props.columns) as Columns<DataSchema>;
    const options = props.options as Options;
    const defaultValues = props.defaultValues as CubeSettings<DataSchema>;

    const { cube } = useOLAP<DataSchema>(dataSource, {
      columns,
      options,
      defaultValues,
    });

    return {
      cube,
    };
  },
});

// export default defineComponent({
//   components: {
//     VueG2Charts,
//   },
//   props: {
//     data: { type: Array, default: () => [] },
//     columns: { type: Object, default: () => {} },
//     options: { type: Object, default: () => {} },
//     defaultValues: { type: Object, default: () => {} },
//   },
//   setup(props) {
//     const dataSource = computed(() => props.data) as dataSourceRef;
//     const columns = computed(() => props.columns) as ColumnsRef;
//     const options = props.options as Options;
//     const defaultValues = props.defaultValues as CubeSettings;

//     const {
//       cube,
//     } = useCube(dataSource, {
//       columns,
//       options,
//       defaultValues,
//     });

//     const { config } = useConfig(cubeSettings);

//     return {
//       cube,
//       config,
//     };
//   },
// });
</script>
