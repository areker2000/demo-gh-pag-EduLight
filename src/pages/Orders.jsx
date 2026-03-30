import { useEffect, useState } from 'react';
import PageTitle from '../components/PageTitle';
import axios from 'axios';
import { useAuth } from '../context/AuthContext';

const Orders = () => {
  const { API_BASE, API_PATH } = useAuth();
  const [orders, setOrders] = useState(null);

  useEffect(() => {
    const getOrder = async () => {
      try {
        const res = await axios.get(`${API_BASE}/api/${API_PATH}/orders`);
        console.log(res);
        setOrders(res.data.orders);
      } catch (error) {
        console.error('取得訂單失敗', error);
      }
    };
    getOrder();
  }, []);

  return (
    <>
      <PageTitle title={'購課紀錄'} />
    </>
  );
};

export default Orders;
