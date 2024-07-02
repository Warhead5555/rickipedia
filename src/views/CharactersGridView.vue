<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
import { useCharacters } from '@/queries/character-queries'
import type { IServerSideDatasource, IServerSideGetRowsParams } from '@ag-grid-community/core'
import { getCharacters } from 'rickmortyapi'
import type { Character } from 'rickmortyapi/dist/interfaces'
import { computed, ref } from 'vue'

const characters = useCharacters()

const page = characters.page

const colDefs = ref([
  { field: 'id' },
  { field: 'name' },
  { field: 'status' },
  { field: 'species' },
  { field: 'gender' },
  { field: 'type' },
  { field: 'location.name' },
  { field: 'origin.name' }
])

// Create a timeout promise to simulate a delay
const timeout = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

const fakeDataSrc = ref({
  getRows: async (params: IServerSideGetRowsParams<Character>) => {
    const page = (params.request.startRow ?? 20) / 20 + 1
    const fakeData = () => Array.from({ length: 20 }, (_, i) => i + 1).map((i) => {
      const id = (page - 1) * 20 + i
      return {
        name: `Name ${id}`,
        status: `Status ${id}`,
        species: `Species ${id}`,
      }
    })
    await timeout(1000)
    params.success({
      rowData: fakeData(),
      rowCount: 80503,
    })
  }
} as IServerSideDatasource)

const characterDataSrc = ref({
  getRows: async (params: IServerSideGetRowsParams<Character>) => {
    const page = (params.request.startRow ?? 20) / 20 + 1
    const { data } = await getCharacters({ page })
    params.success({
      rowData: data.results || [],
      rowCount: data.info?.count,
    })
  }
} as IServerSideDatasource)



</script>

<template>
  <button @click="page--">
    Prev
  </button>
  <button @click="page++">
    Next
  </button>
  <br>

  <div
    class="ag-grid"
    style="width: 1200px"
  >
    <AgGridVue
      row-model-type="serverSide"
      :server-side-datasource="characterDataSrc"
      :column-defs="colDefs"
      :pagination="true"
      :pagination-page-size="20"
      :cache-block-size="45"
      :pagination-page-size-selector="[20, 50, 100]"
      style="height: 500px"
      class="ag-theme-quartz-dark"
      suppress-cell-focus
      debug
    />
  </div>


  <div class="grid-container" />
</template>

<style lang="scss" scoped>
// .grid-container {
//   display: grid;
//   grid-template-columns: repeat(5, 1fr); /* Always 6 columns */
//   gap: 10px;
//   width: 100%
// }

// .character-list {
//   padding: 0;
//   list-style: none;
//   display: contents;
// }

// .character-item {
//   border: 1px solid #ccc;
//   padding: 10px;
//   border-radius: 5px;
// }

// .character-image {
//   width: 100%;
//   height: auto;
// }
</style>