import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import NotFound from "@/pages/notFound/notFound";
import Login from "./pages/auth/login";


import StudentDashboard from "./pages/dashboards/StudentDashboard";
import DocenteDashboard from "./pages/dashboards/DocenteDashboard";
import AdministradorDashboard from "./pages/dashboards/AdministradorDashboard";

import GroupAppointment from "./pages/forms/Appointments/groupAppointment";
import SingleAppointment from "./pages/forms/Appointments/singleAppointment";
import AssignStudents from "./pages/test_jhoan/assignStudents";//AssignStudents
import InfPersonalDocente from "./pages/test_jhoan/infPersonalDocente";//InfPersonalDocente
import PruebaServer from "./pages/test_jhoan/TestServer";//__PruebaServer

import MainAuth from "./pages/auth/MainAuth";


import TestStudentForm from "./pages/test_jhoan/studentForm";
import Forms from "./pages/test_jhoan/forms";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/nosotros" />
      <Route element={<Login />} path="/login" />
      <Route element={<GroupAppointment />} path="/group_appointment" />
      <Route element={<SingleAppointment />} path="/single_appointment" />
      <Route element={<AssignStudents />} path="/assign_student" />
      <Route element={<PruebaServer />} path="/test_server" />

      <Route element={<StudentDashboard />} path="/student_dashboard" />
      <Route element={<DocenteDashboard />} path="/docente_dashboard" />
      <Route element={<AdministradorDashboard />} path="/administrador_dashboard" />


      <Route element={<TestStudentForm />} path="/form_info_student" />
      <Route element={<MainAuth />} path="/main_auth" />

      <Route element={<InfPersonalDocente />} path="/form_info_personal_professor" />
      <Route element={<Forms />} path="/forms" />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;