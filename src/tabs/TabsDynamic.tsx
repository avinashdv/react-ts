import { useState } from "react";
import { Tab } from "../interfaces/TabsDyanmic";

const tabs: Tab[] = [
  {
    id: "home",
    title: "Home",
    content: "Welcome to the Home tab. Here is the main content.",
  },
  {
    id: "about",
    title: "About",
    content: "This is the About tab. Learn more about us here.",
  },
  {
    id: "contact",
    title: "Contact",
    content: "Need help? Reach out to us via the Contact tab.",
  },
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <div>
      <h1>Tabbed Interface</h1>
      <div>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={activeTab === tab.id ? "tab-active" : "tab-inactive"}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div>
        <p>{currentTab?.content}</p>
      </div>
    </div>
  );
};

export default Tabs;
