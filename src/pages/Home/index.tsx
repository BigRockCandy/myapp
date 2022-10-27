import Guide from '@/components/Guide';
import { trim } from '@/utils/format';
import BaseGrid from '@base/components/BaseGrid';
import { PageContainer } from '@ant-design/pro-components';
import { useModel } from '@umijs/max';
import './index.less';

const HomePage: React.FC = () => {
  const { name } = useModel('global');
  return (
    <PageContainer ghost>
      <div className={'container'}>
        <BaseGrid config={[]} link={'aaa'}></BaseGrid>
        <Guide name={trim(name)} />
      </div>
    </PageContainer>
  );
};

export default HomePage;
