import { Route, Routes } from "react-router-dom";

import IndexPage from "@/pages/index";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import NotFound from "@/pages/notFound/notFound";
import Login from "./pages/auth/login";
import StudentDashboard from "./pages/dashboards/studentDashboard";
import GroupAppointment from "./pages/forms/Appointments/groupAppointment";
import SchedulesPage from "@/pages/SchedulesPage";
import 'react-datepicker/dist/react-datepicker.css'; 

function App() {
  //MI COMENTARIO G
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/nosotros" />
      <Route element={<Login />} path="/login" />
      <Route element={<GroupAppointment />} path="/group_appointment" />
      <Route element={<StudentDashboard />} path="/student_dashboard" />
      <Route element={<SchedulesPage />} path="/schedules" />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

