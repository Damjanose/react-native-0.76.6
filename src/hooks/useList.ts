import { useCallback, useEffect, useState } from 'react'
import useSnackbar from '../providers/hooks/useSnackbar'
import { useNavigation } from '@react-navigation/native'
import { PaginatedResponse } from '../services/types'

export type TableServiceOperation<TData> = (query?: string) => Promise<PaginatedResponse<TData>>

type Props<TData> = {
  service: TableServiceOperation<TData>
  query?: string
  forceFetch?: boolean
}

export default <TData>({ service, query = '', forceFetch = false }: Props<TData>) => {
  const [isLoading, setIsLoading] = useState(false)
  const { showErrorSnackbar } = useSnackbar()
  const [items, setItems] = useState<Array<TData>>([])
  const navigation = useNavigation()

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    try {
      const { data } = await service(query)
      if (data) setItems(data.data as Array<TData>)
    } catch (e) {
      setItems([])
    } finally {
      setIsLoading(false)
    }
  }, [query, service, showErrorSnackbar])

  useEffect(() => {
    if (forceFetch) fetchData()
    return navigation.addListener('focus', () => fetchData()), navigation.addListener('blur', () => setItems([]))
  }, [fetchData, navigation])

  return { isLoading, items, setItems, fetchData }
}
