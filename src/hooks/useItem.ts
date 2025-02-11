import { useCallback, useEffect, useState } from 'react'
import useSnackbar from '../providers/hooks/useSnackbar'
import { useNavigation } from '@react-navigation/native'
import { StatusResponse } from '../services/types'

type ItemServiceOperation<TData> = (id: string | number) => Promise<StatusResponse<TData>>

type Props<TData> = {
  service: ItemServiceOperation<TData>
  id: string | number
}

const useItem = <TData>({ service, id = '' }: Props<TData>) => {
  const [isLoading, setIsLoading] = useState(false)
  const { showErrorSnackbar } = useSnackbar()
  const [item, setItem] = useState<TData>({} as TData)
  const navigation = useNavigation()

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    try {
      const { data } = await service(id)
      if (data) setItem(data.data as TData)
    } catch (e) {
      showErrorSnackbar(e.response.data.message)
    } finally {
      setIsLoading(false)
    }
  }, [id, service, showErrorSnackbar])

  useEffect(() => {
    return (
      navigation.addListener('focus', () => fetchData()), navigation.addListener('blur', () => setItem({} as TData))
    )
  }, [fetchData, navigation])

  return { isLoading, item, setItem, fetchData }
}

export default useItem
