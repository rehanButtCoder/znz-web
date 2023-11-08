
import React from "react";
import Home from "./pages/home/HomePage";
import ContactUsPage from "./pages/contactUs/ContactUsPage";
import Layout from "./layouts/Layout";
import { HashRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/errorPage/ErrorPage";
import About from "./pages/about/AboutPage";
import PrivicyPolicy from "./pages/Privacy Policy/Privicy_poloicy";
import TermsOfServices from "./pages/Terms of services/TermsOfServices";
import UserPledge from "./pages/User Pledge/UserPledge";
import LogMain from "./pages/LoginMianPage/LoginMain";
import TestPage from "./pages/testPage/Test";
import SignupPage from "./pages/signupPage/SignupPage";
import SellerProfilePage from "./pages/sellerProfilePage/SellerProfilePage";
import JobDetailPage from "./pages/jobDetailPage/JobDetailPage";
import PasswordReset from "./pages/passReset/PasswordReset";
import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
import SubmitProposal from "./pages/submitProposal/SubmitProposal";
import SellerByerMain from "./pages/sellerByer/SellerByerMain";
import SideBar from "./components/sidebr/SideBar";
import FeedBackPage from "./pages/feedbackPage/FeedBackPage";
import Loadr from "./pages/Loader/LoaderPage";
import ResendEmailPage from "./pages/signupPage/ResendEmailPage";
import DashboardLayout from "./layouts/DashboardLayout";
import JobForYou from "./pages/jobforYouPage/JobForYou";
import AllnotificationMain from "./pages/all_Notifications/All_notificationMain";
import AllProposals from "./pages/my-proposals/AllProposals";
import ClientProfilePage from "./pages/client-profile/ClientProfiePage";
import CreateATask from "./pages/create-task/CreateATask";
import ViewStudents from "./pages/viewStudents/ViewStudents";
import PrivateSellerRoute from "./components/privateRoutes/PrivateSellerRoute";
import PrivateBuyerRoute from "./components/privateRoutes/PrivateBuyerRoute";
import ChatPage from "./pages/chat-page/ChatPage";
import MyTaskPage from "./pages/my-task-page/MyTaskPage";
import OrderDetailPage from "./pages/order-detail-page/OrderDetailPage";
import Rehan from "./components/rehan/Rehan";
const routes = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index path="/" element={<Home />} />
            <Route path="/contact" element={<ContactUsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/privicyPolicy" element={<PrivicyPolicy />} />
            <Route path="/termsOfServices" element={<TermsOfServices />} />
            <Route path="/pserPledge" element={<UserPledge />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<PasswordReset />} />
            <Route path="/test-page" element={<TestPage />} />
            <Route path="/sellerBuyer" element={<SellerByerMain />} />
            <Route path="/sideBar" element={<SideBar />} />
            <Route path="/feedbackpage" element={<FeedBackPage />} />
            <Route path="/resend-email" element={<ResendEmailPage />} />
            <Route path="/jobforyou" element={<JobForYou />} />
            <Route path="/allproposals" element={<AllProposals />} />
            <Route path="/orderdetail" element={<OrderDetailPage />} />

            <Route path="/viewallstudent" element={<ViewStudents />} />
            <Route path="/rehan" element={<Rehan/>} />

            {/* seller/freelancer */}
            <Route path="/jobdetail" element={<PrivateSellerRoute><JobDetailPage /></PrivateSellerRoute>} />
            <Route path="/submitproposal" element={<PrivateSellerRoute><SubmitProposal /></PrivateSellerRoute>} />

            <Route path="*" element={<ErrorPage />} />
            {/* checking new branch  */}
          </Route>
          <Route element={<DashboardLayout />}>
            <Route path="/seller-profile" element={<PrivateSellerRoute><SellerProfilePage /></PrivateSellerRoute>} />
            <Route path="/createtask" element={<PrivateBuyerRoute><CreateATask /></PrivateBuyerRoute>} />
            <Route path="/clientprofilepage" element={<PrivateBuyerRoute><ClientProfilePage /></PrivateBuyerRoute>} />
            <Route path="/mytaskproposal" element={<PrivateBuyerRoute><MyTaskPage /></PrivateBuyerRoute>} />

            <Route path="/all-notification" element={<AllnotificationMain />} />
            <Route path="/chat" element={<ChatPage />} />

          </Route>
          <Route path="/loading/:id" element={<Loadr />} />
          <Route path="/login" element={<LogMain />} />
          <Route path="/signup" element={<SignupPage />} />


        </Routes>
      </HashRouter>
    </>
  );
};

export default routes;

