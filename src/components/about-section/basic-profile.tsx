import React, { Fragment } from 'react'
import {
  Heading,
  Divider,
  Text,
  Mark,
  useColorModeValue,
  Tag,
  Tooltip,
} from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { FaQuestionCircle } from 'react-icons/fa'
import SideNavigation from '../side-navigation'
import TooltipProfile from './tooltip-profile'

export default function BasicProfile(): React.ReactNode {
  const { t } = useTranslation()

  return (
    <Fragment>
      <Heading size="2xl">
        Diaz Linggaputra
        <Divider />
      </Heading>

      <Text
        color={useColorModeValue('black', 'white')}
        align="justify"
        fontSize="xl"
        fontWeight="medium"
      >
        Full-stack Developer {t('basic-profile-0')} Tomei Consolidated Bhd
      </Text>

      <Text color="gray.500" align="justify" flexWrap="wrap">
        <Mark color={useColorModeValue('black', 'white')} fontWeight="bold">
          Software Developer
        </Mark>
        &#8202; at mind, &#8202;
        <Mark color={useColorModeValue('black', 'white')} fontWeight="bold">
          Entrepreneur
        </Mark>
        &#8202; at heart. <br />
        {t('basic-profile-1')}
        <Tooltip label={<TooltipProfile />}>
          <Tag bgColor="transparent" cursor="pointer">
            <FaQuestionCircle />
          </Tag>
        </Tooltip>
      </Text>

      <SideNavigation />
    </Fragment>
  )
}
