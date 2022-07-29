import React from 'react'
import * as S from './styled'
import { colors, fontSize } from '@design-system/tokens'

export interface TextProps {
  value: string
}

export const Text = ({ value }: TextProps) => {
  return (
    <S.CustomText color={colors.black} fontSize={fontSize.large}>
      {value}
    </S.CustomText>
  )
}
