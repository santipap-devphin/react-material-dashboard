
import {BrowserRouter , Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import Home from './pages/DashboardAdmin/Home';
import Category from './pages/DashboardAdmin/Category';
import CategoryAdd from './pages/DashboardAdmin/CategoryAdd';
import CategoryEdit from './pages/DashboardAdmin/CategoryEdit';
import Orders from './pages/DashboardAdmin/Orders';
import Coupon from './pages/DashboardAdmin/Coupon';
import Promotion from './pages/DashboardAdmin/Promotion';
import PromotionAdd from './pages/DashboardAdmin/PromotionAdd';
import PromotionEdit from './pages/DashboardAdmin/PromotionEdit';
import Blog from './pages/DashboardAdmin/Blog';
import BlogAdd from './pages/DashboardAdmin/BlogAdd';
import BlogEdit from './pages/DashboardAdmin/BlogEdit';
import Product from './pages/DashboardAdmin/Product';
import Chat from './pages/DashboardAdmin/Chat';
import ReportProduct from './pages/DashboardAdmin/ReportProduct';
import Inbox from './pages/DashboardAdmin/Inbox';
import ReportProSale from './pages/DashboardAdmin/ReportProSale';
import ProductAdd from './pages/DashboardAdmin/ProductAdd';
import ProductEdit from './pages/DashboardAdmin/ProductEdit';
import NotFound from './pages/DashboardAdmin/NotFound';
import SizeProduct from './pages/DashboardAdmin/SizeProduct';
import SizeAdd from './pages/DashboardAdmin/SizeAdd';
import SizeEdit from './pages/DashboardAdmin/SizeEdit';
import Tags from './pages/DashboardAdmin/Tags';
import CouponAdd from './pages/DashboardAdmin/CouponAdd';
import CouponEdit from './pages/DashboardAdmin/CouponEdit';
import Confirm from './pages/DashboardAdmin/Confirm';
import Shipping from './pages/DashboardAdmin/Shipping';
import Supply from './pages/DashboardAdmin/Supply';
import SupplyAdd from './pages/DashboardAdmin/SupplyAdd';
import SupplyEdit from './pages/DashboardAdmin/SupplyEdit';
import Payment from './pages/DashboardAdmin/Payment';
import PaymentAdd from './pages/DashboardAdmin/PaymentAdd';
import PaymentEdit from './pages/DashboardAdmin/PaymentEdit';
import "./assets/styles.css";


function App() {
  return (
    <DataProvider>
      <BrowserRouter>
              <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/category"  element={<Category />} />
                  <Route path="category/add"  element={<CategoryAdd />} />
                  <Route path="category/edit/:id"  element={<CategoryEdit />} />
                  <Route path="/orders"  element={<Orders />} />
                  <Route path="/coupon"  element={<Coupon />} />
                  <Route path="coupon/add"  element={<CouponAdd />} />
                  <Route path="coupon/edit/:id"  element={<CouponEdit />} />
                  <Route path='/inbox' element={<Inbox />} />
                  <Route path="/promotion"  element={<Promotion />} />
                  <Route path="promotion/add"  element={<PromotionAdd />} />
                  <Route path="promotion/edit/:id"  element={<PromotionEdit />} />
                  <Route path="/blog"  element={<Blog />} />
                  <Route path="blog/add"  element={<BlogAdd />} />
                  <Route path="blog/edit/:id"  element={<BlogEdit />} />
                  <Route path="product" element={<Product />} />
                  <Route path="product/add" element={<ProductAdd />} />
                  <Route path="product/edit/:id" element={<ProductEdit />} />
                  <Route path="/chat"  element={<Chat />} />
                  <Route path="/sizeproduct"  element={<SizeProduct />} />
                  <Route path="sizeproduct/add"  element={<SizeAdd />} />
                  <Route path="sizeproduct/edit/:id"  element={<SizeEdit />} />
                  <Route path="/reportproduct"  element={<ReportProduct />} />
                  <Route path="/reportproductsale"  element={<ReportProSale />} />
                  <Route path="/tags"  element={<Tags />} />
                  <Route path="/confirm"  element={<Confirm />} />
                  <Route path="/shipping"  element={<Shipping />} />
                  <Route path="/supply"  element={<Supply />} />
                  <Route path="supply/add"  element={<SupplyAdd />} />
                  <Route path="supply/edit/:id"  element={<SupplyEdit />} />
                  <Route path="/payment"  element={<Payment />} />
                  <Route path="payment/add"  element={<PaymentAdd />} />
                  <Route path="payment/edit/:id"  element={<PaymentEdit />} />
                  <Route path="*"  element={<NotFound />} />
              </Routes>
       </BrowserRouter>
    </DataProvider>
    
  );
}

export default App;
