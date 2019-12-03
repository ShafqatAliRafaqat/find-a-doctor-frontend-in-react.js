import MainHome from './Components/Home/main';
import NotFound from './Components/404/404NotFound';
import DoctorDetails from './Components/Doctor/general-info';
import CenterDetails from './Components/Clinic/detail';
import DoctorList from './Components/Doctor/doctor-list';
import TreatmentDetails from './Components/Specialization/detail';
import Booking from './Components/Booking/booking-page';
import Login from './Components/Login/login';
import Register from './Components/Login/register';
import Specialization from './Components/Specialization/specialization-list';
import BottomTopSpecializations from './Components/Specialization/bottom_top_specializations';
import Clinic from './Components/Clinic/clinic-list';
import FAQ from './Components/FAQ/faq';
import BottomFaq from './Components/FAQ/bottom_faq';
import DoctorFaq from './Components/FAQ/doctor_faq';
import Contacts from './Components/ContactUs/contact';
import About from './Components/ContactUs/about';
import PrivacyPolicy from './Components/ContactUs/privacy-policy';
import TermsAndConditions from './Components/ContactUs/terms-and-conditions';
import Blog from './Components/Blog/blog';
import BlogPage from './Components/Blog/blog-page';
import DoctorSignIn from './Components/Doctor/doctor_sign_in';
import JoinDoctor from './Components/Doctor/join_doctor';
import Confirm from './Components/Booking/confirm';
import logout from './Components/Login/logout';
import CustomerProfile from './Components/CustomerProfile/Profile/profile';
import ApprovedAppointment from './Components/CustomerProfile/Appointments/approved-appointments';
import PendingAppointment from './Components/CustomerProfile/Appointments/pending-appointments';
import AppointmentHistory from './Components/CustomerProfile/Appointments/history';
import CurrentLabTest from './Components/CustomerProfile/LabTest/lab-test';
import LabTestHistory from './Components/CustomerProfile/LabTest/history';
import AllergyNotes from './Components/CustomerProfile/CustomerNotes/allergy-notes';
import RiskFactorNotes from './Components/CustomerProfile/CustomerNotes/riskfactor-notes';
import DoctorNotes from './Components/CustomerProfile/CustomerNotes/doctor-notes';

export default [
  { path: "/", exact: true,name:"Layout", Component: MainHome },
  { path: "/doctor_detail/:doctorId", name:"Genral Detail", Component: DoctorDetails },
  { path: "/center_detail/:centerId", name:"Genral Detail", Component: CenterDetails },
  { path: "/treatment_detail/:treatmentId", name:"Genral Detail", Component: TreatmentDetails },
  // { path: "/get_treatment/:treatmentName", name:"Genral Detail", Component: TreatmentDetails },
  { path: "/doctor_list", name:"Genral List", Component: DoctorList },      
  { path: "/booking", name:"Booking", Component: Booking },      
  { path: "/clinic_list", name:"Clinic", Component: Clinic },      
  { path: "/specialization_list", name:"Specialization", Component: Specialization },
  { path: "/bottom_top_special",  name:"BottomTopSpecializations", Component: BottomTopSpecializations },      
  { path: "/login", name:"Login", Component: Login },      
  { path: "/logout", name:"Logout", Component: logout },      
  { path: "/register", name:"Register", Component: Register },
  { path: "/faq", name:"FAQ", Component: FAQ },
  { path: "/bottom_faq", name:"BottomFaq", Component: BottomFaq},                  
  { path: "/doctor_faq", name:"DoctorFaq", Component: DoctorFaq},                  
  { path: "/about_us", name:"AboutUs", Component: About },                  
  { path: "/privacy-policy", name:"PrivacyPolicy", Component: PrivacyPolicy },                  
  { path: "/terms-and-conditions", name:"TermsAndConditions", Component: TermsAndConditions },                  
  { path: "/blog", name:"Blog", Component: Blog},                  
  { path: "/blog-page", name:"Blog Page", Component: BlogPage},                  
  { path: "/join_doctor", name:"Join Doctor", Component: JoinDoctor},                  
  { path: "/doctor_signin", name:"Doctor Sign In", Component: DoctorSignIn},                  
  { path: "/confirm", name:"Confirm", Component: Confirm },                  
  { path: "/contacts", name:"Contacts", Component: Contacts},             
  { path: "/customer_profile", name:"Customer Profile", Component: CustomerProfile},             
  { path: "/approved_appointments", name:"Approved Appointment", Component: ApprovedAppointment},            
  { path: "/pending_appointments", name:"Pending Appointment", Component: PendingAppointment},            
  { path: "/appointment_history", name:"Appointment History", Component: AppointmentHistory},             
  { path: "/current_lab_test", name:"Customer Lab test", Component: CurrentLabTest},             
  { path: "/lab_test_history", name:"Customer Lab test History", Component: LabTestHistory},             
  { path: "/allergy_notes", name:"Allergy Notes", Component: AllergyNotes},             
  { path: "/riskfactor_notes", name:"Risk Factor Notes", Component: RiskFactorNotes},             
  { path: "/doctor_notes", name:"Doctor Notes", Component: DoctorNotes},             
  { path: "/404_not_found", name:"404 Not Found", Component: NotFound },
];
