<script setup lang="ts">
import { defineComponent, h, ref } from 'vue'
import type { ColDef } from '@ag-grid-community/core'
import 'ag-grid-community/styles/ag-grid.css'

interface RowData {
  make: string
  model: string
  price: number
  electric: boolean
}

const rowData = ref<RowData[]>([
  { make: 'Tesla', model: 'Model Y', price: 64950, electric: true },
  { make: 'Ford', model: 'F-Series', price: 33850, electric: false },
  { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
  { make: 'Toyota', model: 'Corolla', price: 29600, electric: false },
])

// const CustomButtonComponent = {
//   template: `
//         <div fi>
//             <button v-on:click="buttonClicked">Push Me!</button>
//         </div>
//     `,
//   methods: {
//     buttonClicked() {
//       alert('clicked')
//     },
//   },
// }
const CustomButtonComponent = defineComponent({
  name: 'CustomButtonComponent',
  methods: {
    buttonClicked() {
      alert('clicked')
    },
  },
  render() {
    return h('div', [
      h('button', {
        onClick: this.buttonClicked,
      }, 'Push Me!')
    ])
  },
})

// Column Definitions: Defines the columns to be displayed.
const colDefs = ref([
  { headerName: 'Make & Model', valueGetter: ({ data }) => `${data?.make} ${data?.model}`, flex: 1 },
  { field: 'make', flex: 1 },
  { field: 'model', flex: 1 },
  { field: 'price', valueFormatter: ({ value }) => '£' + value?.toLocaleString() } as ColDef<RowData, number>,
  { field: 'electric' },
  {
    field: 'button',
    cellRenderer: CustomButtonComponent,
    flex: 1
  }
] as ColDef<RowData>[])
</script>

<template>
  <div>
    <CustomButtonComponent />
    <AgGridVue
      :row-data="rowData"
      :column-defs="colDefs"
      style="height: 500px"
      class="ag-theme-quartz-dark"
      suppress-cell-focus
    />
  </div>
</template>