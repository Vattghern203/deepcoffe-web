import { lazy } from 'react';

import ResultRoot from './ResultRoot'
import ResultList from './ResultList'
import ResultImageSection from './ResultImageSection'
import ResultDataSection from './ResultDataSection'
import ResultSave from './ResultSave'

const ResultImage = lazy(() => import('./ResultImage'))
const ResultItem = lazy(() => import('./ResultItem'))

const Result = {
  Root: ResultRoot,
  List: ResultList,
  Item: ResultItem,
  ImageSection: ResultImageSection,
  Image: ResultImage,
  DataSection: ResultDataSection,
  SaveButton: ResultSave
}

export default Result