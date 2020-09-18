<template>
  <vue-olap :data="data" :columns="columns" :defaultValues="defaultValues" />
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import VueOLAP from '../';
import Mock from 'mockjs';
import { DataSchema, data, columns } from './data';
import { CubeSettings } from '@dewfall/vhooks-vue2';

export default defineComponent({
  components: {
    VueOLAP,
  },
  setup() {
    const defaultValues = {
      dimension: 'date',
      series: 'name',
      measure: 'score',
      bySeries: true,
    } as CubeSettings<DataSchema>;

    return {
      data,
      columns,
      defaultValues,
    };
  },
});
</script>
