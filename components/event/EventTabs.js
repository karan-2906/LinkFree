import Link from "@components/Link";
import Select from "@components/form/Select";
import { classNames } from "utils/functions/classNames";
export function EventTabs({ tabs, eventType, setEventType }) {
  const changeTab = (e, value) => {
    e.preventDefault();
    setEventType(value);
    if (!value) {
      setEventType(tabs.find((tab) => tab.title === e.target.value).key);
    }
  };

  return (
    <div>
      <div className="sm:hidden">
        <Select
          id="tabs"
          label="Select a tab"
          value={tabs.find((tab) => tab.key === eventType)?.title}
          onChange={(e) => changeTab(e)}
          className="block w-full rounded-md border-primary-medium-low dark:bg-primary-medium dark:focus:border-secondary-low dark:focus:ring-secondary-low  focus:border-secondary-low focus:ring-secondary-low"
          options={tabs.map((tab) => ({ label: tab.title, value: tab.title }))}
        />
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-primary-low">
          <nav className="-mb-px flex" aria-label="Tabs">
            {tabs.map((tab) => (
              <Link
                key={tab.key}
                href=""
                onClick={(e) => changeTab(e, tab.key)}
                className={classNames(
                  tab.key === eventType
                    ? "border-secondary-high dark:border-secondary-low text-secondary-high dark:text-secondary-low"
                    : "border-transparent text-primary-medium dark:text-primary-low-high dark:hover:text-primary-low-high hover:text-primary-medium hover:border-primary-medium-low",
                  "w-1/4 py-4 px-1 text-center border-b-2 font-medium text-sm flex justify-center items-center gap-2 cursor-pointer"
                )}
                aria-current={tab.key === eventType ? "page" : undefined}
              >
                {
                  <tab.icon
                    className={`${
                      tab.key === "all" || tab.key === "cfpOpen"
                        ? "text-lg"
                        : "text-xl"
                    }`}
                  />
                }
                <span>
                  {tab.title} ({tab.total})
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
