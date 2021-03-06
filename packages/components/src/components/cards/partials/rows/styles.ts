import _ from 'lodash'
import { StyleSheet } from 'react-native'

import { contentPadding } from '../../../../styles/variables'

export const innerCardSpacing = contentPadding / 3
export const topCardMargin = contentPadding * (2 / 3)

export const cardRowStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexGrow: 1,
    overflow: 'hidden',
  },

  container__margin: {
    marginTop: topCardMargin,
  },

  mainContentContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    maxWidth: '100%',
  },
})
