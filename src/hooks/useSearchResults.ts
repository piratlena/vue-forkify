import axios from "axios";
import {ref, onMounted, toRefs} from 'vue'


export function useSearchResults() {
    const recipes = ref([])
    const totalPages = ref(0)
    let isLoading = toRefs(true)
    const ApiKey = import.meta.env.VITE_API_KEY


    const fetching = async () => {
        try{
            isLoading = true

            const response = await axios.get(    `https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza&key=${ApiKey}`,
            {
              params: {
                _page: page,
                _limit: limit,
              },
            },)
        }
    }
}