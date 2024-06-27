<!-- eslint-disable vue/no-parsing-error -->
<script setup lang="ts">
import { useCharacters } from '@/queries/character-queries'
import { computed } from 'vue'

const characters = useCharacters()
const characterData = computed(() => characters.data.value?.results)

const page = characters.page
</script>

<template>
  {{ page }}
  <button @click="page--">
    Prev
  </button>
  <button @click="page++">
    Next
  </button>
  <div class="grid-container">
    <div class="character-list">
      <div
        v-for="character in characterData"
        :key="character.id"
        class="character-item"
      >
        <img
          :src="character.image"
          :alt="character.name"
          class="character-image"
        >
        <h2>{{ character.name }}</h2>
        <p>{{ character.status }} | {{ character.species }} | #Episodes: {{ character.episode.length }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(5, 1fr); /* Always 6 columns */
  gap: 10px;
  width: 100%
}

.character-list {
  padding: 0;
  list-style: none;
  display: contents;
}

.character-item {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
}

.character-image {
  width: 100%;
  height: auto;
}
</style>