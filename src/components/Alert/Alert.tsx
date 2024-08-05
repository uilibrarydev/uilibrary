import React, { ReactElement } from 'react'
import { ICONS_MAPPING, TYPE_MAPPING } from './consts'
import classnames from 'classnames'
import { Text } from '../Text'
import { Button } from '../Button'
import { TAlertProps } from './types'
import IconDismissFilled from '../SVGIcons/IconDismissFilled'
import { IconDynamicComponent } from '../../helperComponents'

export const Alert = (props: TAlertProps): ReactElement => {
  const {
    buttonProps,
    type = 'information',
    position = 'inline',
    text,
    subtext,
    closeIcon,
    onClose,
    className = ''
  } = props

  return (
    <div className={classnames('alert', `alert--${type} alert--${position}`, className)}>
      <div className="alert__content">
        <IconDynamicComponent
          componentName={ICONS_MAPPING[type]}
          size="small"
          type={TYPE_MAPPING[type]}
        />
        <div className="alert__text pl-8">
          <div>
            <Text type="primary" size="standard" weight="regular" lineHeight="large">
              {text}
            </Text>
            {subtext ? (
              <Text
                className={'mt-4'}
                type="secondary"
                size="small"
                weight="regular"
                lineHeight="large"
              >
                {subtext}
              </Text>
            ) : null}
          </div>
          {buttonProps ? (
            <div className="alert__actions">
              {buttonProps.confirm && (
                <Button size="medium" type="secondary" {...buttonProps.confirm} />
              )}
              {buttonProps.cancel && (
                <Button size="medium" type="tertiary" className="ml-12" {...buttonProps.cancel} />
              )}
            </div>
          ) : null}
        </div>
        {closeIcon ? (
          <IconDismissFilled
            type={TYPE_MAPPING[type]}
            size="xsmall"
            className="ml-12 pointer"
            onClick={onClose}
          />
        ) : null}
      </div>
    </div>
  )
}
