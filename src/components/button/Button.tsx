import { ButtonFactory, ButtonJustifyValues, ButtonSizes, ButtonStates, ButtonTypes } from './ButtonFactory.tsx'
import Icon, { Icons } from '../../icons/Icon.tsx'
import { RelativePositionCenter } from '@/types/relative-position.ts'

type Props = {
  size?: ButtonSizes
  type?: ButtonTypes
  text: string
  status?: ButtonStates
  pendingStateText?: string
  handleClick?: () => void
  startIcon?: Icons
  endIcon?: Icons
  justifyItems?: ButtonJustifyValues
  popoverText?: string
  popoverPosition?: RelativePositionCenter
}

export const Button = (props: Props) => {
  const startItem = props.startIcon ? <Icon type={props.startIcon} size={props.size} /> : null
  const endItem = props.endIcon ? <Icon type={props.endIcon} size={props.size} /> : null

  return <ButtonFactory {...props} startItem={startItem} endItem={endItem} />
}
