import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Register from "./Register";
import Home from "./Home";
import FormRegister from "./FormRegister";
import Workoutstyles from './Workoutstyles';
import Mealplan from './Mealplan';
import MyPlanList from "./MyPlanList";
import MyWorkoutPlan from "./MyWorkoutPlan";
import GeneralPlan from "./GeneralPlan";
import UserMealplan from "./UserMealplan";
import Login from "./Login";
import Profile from "./Profile";
import CreateNewPlan from './CreateNewPlan';
import ShoppingZone from "./ShoppingZone";
import ProductDetails from "./ProductDetails";
import Cart from './Cart';
import PaymentMethod from "./PaymentMethod";
import PaymentDetails from "./PaymentDetails";

import StoreRegister from "./usertype2/StoreRegister";
import SelectLocation from './usertype2/SelectLocation';
import CreateAccount from "./usertype2/CreateAccount";
import StoreHomepage from './usertype2/StoreHomepage';
import AddProduct from "./usertype2/AddProduct";
import ProductList from "./usertype2/ProductList";
import StorePaymentMethod from "./usertype2/StorePaymentMethod";
import StorePaymentDetails from "./usertype2/StorePaymentDetails";
import StoreAccount from "./usertype2/StoreAccount";
import StoreEditProduct from "./usertype2/StoreEditProduct";
import StoreLogin from "./usertype2/StoreLogin";

const AnimateRoutes = () => {
  const location = useLocation();

  return (

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register/form" element={<FormRegister />}/>
        <Route path="/register/workout-styles" element={<Workoutstyles />}/>
        <Route path="/register/meal-plan" element={<Mealplan />}/>
        <Route path="/myplan-list" element={<MyPlanList />}/>
        <Route path="/my-workout-plan" element={<MyWorkoutPlan />}/>
        <Route path="/general-plan" element={<GeneralPlan />}/>
        <Route path="/user-meal-plan" element={<UserMealplan />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/create-new-plan" element={<CreateNewPlan/>}/>
        <Route path="/shopping" element={<ShoppingZone/>}/>
        <Route path="/shopping/product-details/:id" element={<ProductDetails/>}/>
        <Route path="/shopping/cart" element={<Cart/>}/>
        <Route path="/shopping/payment-method" element={<PaymentMethod/>}/>
        <Route path="/shopping/payment-details" element={<PaymentDetails/>}/>

         {/* user type 2 */}
        <Route path="/store/register" element={<StoreRegister/>}/>
        <Route path="/store/register/select-location" element={<SelectLocation/>}/>
        <Route path="/store/register/create-account" element={<CreateAccount/>}/>
        <Route path="/store" element={<StoreHomepage/>}/>
        <Route path="/store/add-product" element={<AddProduct/>}/>
        <Route path="/store/product-list" element={<ProductList/>}/>
        <Route path="/store/payment/method" element={<StorePaymentMethod/>}/>
        <Route path="/store/payment/detail" element={<StorePaymentDetails/>}/>
        <Route path="/store/account" element={<StoreAccount/>}/>
        <Route path="/store/edit-product" element={<StoreEditProduct/>}/>
        <Route path="/store/login" element={<StoreLogin/>}/>
      </Routes>

  );
};

export default AnimateRoutes;
