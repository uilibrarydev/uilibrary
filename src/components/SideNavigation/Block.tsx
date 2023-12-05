import Text from '../Text'
import { TBlock } from './types'

const Block = (props: TBlock) => {
  const { children, label, open } = props
  return (
    <div className="side--navigation--block">
      <div className="side--navigation--block--label">
        {open && (
          <Text size="standard" type="tertiary">
            {label}
          </Text>
        )}
      </div>
      {children}
    </div>
  )
}

export default Block
