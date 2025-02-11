import React, { PropsWithChildren, useCallback, useMemo, useRef } from 'react'
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'

export default (props: PropsWithChildren & { handleVisibility: () => void }) => {
  const bottomSheetRef = useRef<BottomSheet>(null)
  const snapPoints = useMemo(() => ['1%', '45%'], [])

  const handleSheetChanges = useCallback(
    (index: number) => {
      if (index === 0) props.handleVisibility()
    },
    [props],
  )

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={1}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backgroundStyle={{ backgroundColor: '#f2f2f2' }}
      animateOnMount={true}>
      {props.children}
    </BottomSheet>
  )
}
