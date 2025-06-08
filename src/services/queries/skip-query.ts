import { useQuery } from "@tanstack/react-query"
import { fetchSkip } from "../API/handler"

export const useSkipData = () => {
    return useQuery({
        queryKey: ['skip'],
        queryFn: fetchSkip
    })
}