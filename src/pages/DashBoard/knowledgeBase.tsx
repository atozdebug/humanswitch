import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Category from '../../components/KnowledgeBase/Category';
import ContentOutline from '../../components/KnowledgeBase/ContentOutline';
import RecentUpload from '../../components/KnowledgeBase/RecentUpload';
import SideGraphAnalytics from '../../components/KnowledgeBase/SideGraphAnalytics';
import { getDocuments } from '../../services/slices/knowledge_base/document';
import { getFaqs } from '../../services/slices/knowledge_base/faq';
import { getUrls } from '../../services/slices/knowledge_base/urls';
import type { RootState } from '../../services/store/store';
import { Spinner } from 'flowbite-react';

const KnowledgeBase = () => {
  const allDocuments = useSelector(
    (state: RootState) => state.document?.getData
  );

  const allUrls = useSelector((state: RootState) => state.url?.getData);
  const allFaqs = useSelector((state: RootState) => state.faq?.getData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!allDocuments) {
      console.debug(
        'ℹ️ ~ file: knowledgeBase.tsx:25 ~ useEffect ~ allDocuments:',
        allDocuments
      );
      dispatch(getDocuments({ page: 1 }));
    }
  }, [dispatch, allDocuments]);

  useEffect(() => {
    if (!allUrls) {
      dispatch(getUrls({ page: 1 }));
    }
  }, [dispatch, allUrls]);
  useEffect(() => {
    console.info('allFaqs', allFaqs);
    if (!allFaqs) {
      console.info('Enteered', allFaqs);
      dispatch(getFaqs({ page: 1 }));
    }
  }, [dispatch, allFaqs]);

  // Extract the first three items from each list
  const recentDocuments = allDocuments?.data?.slice(0, 3) || [];
  const recentUrls = allUrls?.data?.slice(0, 3) || [];
  const recentFaqs = allFaqs?.data?.slice(0, 3) || [];

  return (
    <>
      {/* max-h-vhcalc92px */}
      <div className='content-right-inner min-h-vhcalc92px overflow-y-auto  lg:px-8 px-4 md:py-7 py-4 bg-lightgray'>
        <div className='knowledge-inner bg-white rounded-[20px] lg:p-6 p-4'>
          <ul className='grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5'>
            <li className='grid-item xl:col-span-3 md:col-span-2'>
              <div className='xl:max-w-p90 max-w-808'>
                <Category />
                {allDocuments && allUrls && allFaqs ? (
                  <RecentUpload
                    recentDocuments={recentDocuments}
                    recentFaqs={recentFaqs}
                    recentUrls={recentUrls}
                  />
                ) : (
                  <div className='flex justify-center my-6'>
                    <Spinner />
                  </div>
                )}

                {/* <ContentOutline /> */}
              </div>
            </li>
            <li className='grid-item xl:col-span-1 md:col-span-2'>
              <SideGraphAnalytics
                totalDocuments={allDocuments ? allDocuments.total : 0}
                totalFaqs={allFaqs ? allFaqs.total : 0}
                totalUrls={allUrls ? allUrls.total : 0}
              />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default KnowledgeBase;
