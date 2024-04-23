import { lazy } from 'react';

const ResultRoot = lazy(() => import('./ResultRoot'));
const ResultList = lazy(() => import('./ResultList'));
const ResultItem = lazy(() => import('./ResultItem'));
const ResultImageSection = lazy(() => import('./ResultImageSection'));
const ResultImage = lazy(() => import('./ResultImage'));
const ResultDataSection = lazy(() => import('./ResultDataSection'));
const ResultSave = lazy(() => import('./ResultSave'));

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