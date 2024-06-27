import { useQuery } from '@tanstack/vue-query'
import { getCharacters } from 'rickmortyapi'
import { ref } from 'vue'

export const useCharacters = (init = {
  page: 1
}) => {
  const _page = ref(init.page)
  return {
    page: _page,
    ...useQuery({
      queryKey: ['characters',{ page: _page }],
      queryFn: async () => (await getCharacters({ page: _page.value }))?.data,
      staleTime: 1000 * 10, // 10 seconds
    })
  }
}