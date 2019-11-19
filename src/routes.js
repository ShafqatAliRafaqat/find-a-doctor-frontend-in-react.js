import MainHome from './Components/Home/main';
import NotFound from './Components/404/404NotFound';
import DoctorDetails from './Components/Doctor/general-info';
import CenterDetails from './Components/Clinic/detail';
import DoctorList from './Components/Doctor/doctor-list';
import TreatmentDetails from './Components/Specialization/detail';
import Booking from './Components/Booking/booking-page';
import Login from './Components/Login/login';
import Register from './Components/Login/register';
import Specializatoin from './Components/Specialization/specialization-list';
import Clinic from './Components/Clinic/clinic-list';
import FAQ from './Components/FAQ/faq';
import Contacts from './Components/ContactUs/contact';
import Blog from './Components/Blog/blog';
import BlogPage from './Components/Blog/blog-page';
import DoctorSignIn from './Components/Doctor/doctor_sign_in';
import JoinDoctor from './Components/Doctor/join_doctor';
import Confirm from './Components/Booking/confirm';
import logout from './Components/Login/logout';
import CustomerProfile from './Components/CustomerProfile/Profile/profile';
import CurrentAppointment from './Components/CustomerProfile/Appointments/appointments';
import AppointmentHistory from './Components/CustomerProfile/Appointments/history';
import CurrentLabTest from './Components/CustomerProfile/LabTest/lab-test';
import LabTestHistory from './Components/CustomerProfile/LabTest/history';

export default [
  { path: "/", exact: true,name:"Layout", Component: MainHome },
  { path: "/doctor_detail/:doctorId", name:"Genral Detail", Component: DoctorDetails },
  { path: "/center_detail/:centerId", name:"Genral Detail", Component: CenterDetails },
  { path: "/treatment_detail/:treatmentId", name:"Genral Detail", Component: TreatmentDetails },
  // { path: "/get_treatment/:treatmentName", name:"Genral Detail", Component: TreatmentDetails },
  { path: "/doctor_list", name:"Genral List", Component: DoctorList },      
  { path: "/booking", name:"Booking", Component: Booking },      
  { path: "/clinic_list", name:"Clinic", Component: Clinic },      
  { path: "/specialization_list", name:"Specializatoin", Component: Specializatoin },      
  { path: "/login", name:"Login", Component: Login },      
  { path: "/logout", name:"Logout", Component: logout },      
  { path: "/register", name:"Register", Component: Register },
  { path: "/faq", name:"FAQ", Component: FAQ },                  
  { path: "/about_us", name:"about us", Component: Contacts },                  
  { path: "/blog", name:"Blog", Component: Blog},                  
  { path: "/blog-page", name:"Blog Page", Component: BlogPage},                  
  { path: "/join_doctor", name:"Join Doctor", Component: JoinDoctor},                  
  { path: "/doctor_signin", name:"Doctor Sign In", Component: DoctorSignIn},                  
  { path: "/confirm", name:"Confirm", Component: Confirm },                  
  { path: "/contacts", name:"Contacts", Component: Contacts},             
  { path: "/customer_profile", name:"Customer Profile", Component: CustomerProfile},             
  { path: "/current_appointment", name:"Current Appointment", Component: CurrentAppointment},             
  { path: "/appointment_history", name:"Appointment History", Component: AppointmentHistory},             
  { path: "/current_lab_test", name:"Customer Lab test", Component: CurrentLabTest},             
  { path: "/lab_test_history", name:"Customer Lab test History", Component: LabTestHistory},             
  { path: "/404_not_found", name:"404 Not Found", Component: NotFound },
];
