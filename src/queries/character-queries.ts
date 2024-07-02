import { useQuery, keepPreviousData } from '@tanstack/vue-query'
import { getCharacters, type ApiResponse, type Character, type Info } from 'rickmortyapi'
import { ref } from 'vue'


const charactersFetcher = (page: number) => {
  // create a timeout promise of 5 sec
  const timeout = new Promise<ApiResponse<Info<Character[]>>>((resolve) => setTimeout(async () => {
    resolve(await getCharacters({ page }))
  }, 5000))

  return timeout
}

export const useCharacters = (init = {
  page: 1
}) => {
  const _page = ref(init.page)
  return {
    page: _page,
    ...useQuery({
      queryKey: ['characters',{ page: _page }],
      queryFn: async () => (await charactersFetcher(_page.value)),
      //queryFn: async ({ signal }) => (await charactersFetcher(_page.value, signal))?.data,
      staleTime: 1000 * 4, // 4 seconds,
      placeholderData: keepPreviousData, // keep previous data while fetching new data, so the ui doesnt jump around
    })
  }
}