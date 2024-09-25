import {BlinkingTextComponent} from './styles'
import { BlinkingTextProps } from './types'

function BlinkingText({text}: BlinkingTextProps) {
  return <BlinkingTextComponent>{text}</BlinkingTextComponent>
}

export default BlinkingText
