import React from 'react'

import { StyledButton } from './styles'

export type Props = {
  className?: string
  isDisabled?: boolean
  isLoading?: boolean
  label: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  type: 'primary' | 'secondary' | 'text'
  onClick: () => void
}

export default function Button(props: Props) {
  const { className, isDisabled, label, leftIcon, rightIcon, type, onClick } =
    props

  function handleClick(evt: React.MouseEvent<HTMLButtonElement>) {
    if (isDisabled) {
      return
    }

    onClick()
  }

  return (
    <StyledButton
      buttonType={type}
      className={className}
      disabled={isDisabled}
      type="button"
      onClick={handleClick}
    >
      {leftIcon}
      {label}
      {rightIcon}
    </StyledButton>
  )
}
