import { lazy } from 'react'

export const IconComponentMapping: { [key: string]: any } = {
  warningFilled: lazy((): any => import('../../components/SVGIcons/IconWarningFilled')),
  checkmarkCircleFilled: lazy(
    (): any => import('../../components/SVGIcons/IconCheckmarkCircleFilled')
  ),
  errorCircleFilled: lazy((): any => import('../../components/SVGIcons/IconErrorCircleFilled')),
  infoFilled: lazy((): any => import('../../components/SVGIcons/IconInfoFilled')),
  checkMark: lazy((): any => import('../../components/SVGIcons/IconCheckmark')),
}
