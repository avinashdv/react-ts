import ReactDOM from "react-dom/client";
// import GuestList from "./state/GuestList";
// import UserSearch from "./state/UserSearch";
// import EventComponent from "./events/EventComponent";
// import UserSearch from "./refs/UserSearch";
// import Tabs from "./tabs/TabsDynamic";
// import ExpenseTrackerDashboard from "./expensetracker/ExpenseTrackerDashboard";
// import ProductsListSortFilter from "./productslist/ProductsListSortFilter";
// import NotificationToast from "./notification/NotificationToast";
// import NotificationToast from "./notification/NotificationToast";
// import ThemeToggle from "./themetoggle/ThemeToggle";
// import FaqAccordion from "./faqaccordion/FaqAccordion";
// import ImageGalleryModal from "./imagegallery/ImageGalleryModal";
import MultiStepForm from "./multistepform/MultiStepForm";

import "./index.css";
const el = document.getElementById("root");

const root = ReactDOM.createRoot(el!);

const App = () => {
  return (
    <div>
      <MultiStepForm />
    </div>
  );
};

root.render(<App />);
