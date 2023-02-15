import BagItem from './BagItem';
import { useContext } from 'react';
import ProductContext from '../../context';
function BagList() {
  const { bag } = useContext(ProductContext);
  return (
    <>
      {bag.map((item) => {
        return <BagItem key={item.id} item={item} />;
      })}
    </>
  );
}

export default BagList;
