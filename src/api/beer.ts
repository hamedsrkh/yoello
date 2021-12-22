import Axios from './index'

export const getBeers = async (payload: any) => {
    const [_, food, page] = payload.queryKey

    const params = {
        food, page, per_page: 50
    }
    food === "all" && delete params.food

    const response = await Axios.get('/beers', {params})
    return response.data
}