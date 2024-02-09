import { useTranslation } from 'react-i18next'

export interface MenuItem {
  title: string
  path: string
}

const useMenuItems = (): MenuItem[] => {
  const { t } = useTranslation()

  return [
    {
      title: t('header.top-up'),
      path: '/top-up',
    },
    {
      title: t('header.package'),
      path: '/package',
    },
    {
      title: t('header.register-sim'),
      path: '/activate-sim',
    },
    // {
    //   title: 'E-Service',
    //   path: '/e-service',
    // },
  ]
}

export default useMenuItems
