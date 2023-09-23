import {
  AdjustmentsVerticalIcon,
  ArchiveBoxIcon,
  BoltIcon,
  HeartIcon,
  InformationCircleIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";

export const Dashboard = () => (
  <div className="flex flex-row gap-20">
    <div className="stats stats-vertical w-2/5 shadow grow-0">
      <div className="stat">
        <div className="stat-figure text-primary">
          <HeartIcon className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title">Total Likes</div>
        <div className="stat-value text-primary">25.6K</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <BoltIcon className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title">Page Views</div>
        <div className="stat-value text-secondary">2.6M</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <InformationCircleIcon className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title">Downloads</div>
        <div className="stat-value">31K</div>
        <div className="stat-desc">Jan 1st - Feb 1st</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <AdjustmentsVerticalIcon className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title">New Users</div>
        <div className="stat-value">4,200</div>
        <div className="stat-desc">↗︎ 400 (22%)</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <ArchiveBoxIcon className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-title">New Registers</div>
        <div className="stat-value">1,200</div>
        <div className="stat-desc">↘︎ 90 (14%)</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <RectangleStackIcon className="inline-block w-8 h-8 stroke-current" />
        </div>
        <div className="stat-value">86%</div>
        <div className="stat-title">Tasks done</div>
        <div className="stat-desc text-secondary">31 tasks remaining</div>
      </div>
    </div>
    <div className="grow card w-full bg-base-100 shadow">
      <figure>
        <svg
          viewBox="0 0 2000 1400"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M0 1386.093c21-6.624 63-19.758 105-33.116 42-13.359 63 .43 105-33.675 42-34.106 63-109.957 105-136.853 42-26.896 63 28.086 105 2.372s63-109.305 105-130.942 63 26.917 105 22.757 63-10.259 105-43.554 63-84.278 105-122.923c42-38.645 63-57.35 105-70.304s63 19.66 105 5.532 63-17.506 105-76.17c42-58.666 63-240.299 105-217.156 42 23.142 63 350.572 105 332.868 42-17.703 63-313.383 105-421.386 42-108.002 63-95.975 105-118.627 42-22.653 63-75.996 105 5.362 42 81.359 63 333.051 105 401.428 42 68.377 63 60.6 105-59.542s84-432.932 105-541.165L2000 1400H0Z"
            fill="#444cf71a"
          />
          <path
            d="M0 1386.093c21-6.624 63-19.758 105-33.116 42-13.359 63 .43 105-33.675 42-34.106 63-109.957 105-136.853 42-26.896 63 28.086 105 2.372s63-109.305 105-130.942 63 26.917 105 22.757 63-10.259 105-43.554 63-84.278 105-122.923c42-38.645 63-57.35 105-70.304s63 19.66 105 5.532 63-17.506 105-76.17c42-58.666 63-240.299 105-217.156 42 23.142 63 350.572 105 332.868 42-17.703 63-313.383 105-421.386 42-108.002 63-95.975 105-118.627 42-22.653 63-75.996 105 5.362 42 81.359 63 333.051 105 401.428 42 68.377 63 60.6 105-59.542s84-432.932 105-541.165"
            fill="none" 
            stroke="#444cf7"
            strokeWidth="4"
          />
          <g fill="#444cf7">
            <circle cy="1386.093" r="8" />
            <circle cx="105" cy="1352.977" r="8" />
            <circle cx="210" cy="1319.302" r="8" />
            <circle cx="315" cy="1182.449" r="8" />
            <circle cx="420" cy="1184.821" r="8" />
            <circle cx="525" cy="1053.879" r="8" />
            <circle cx="630" cy="1076.636" r="8" />
            <circle cx="735" cy="1033.082" r="8" />
            <circle cx="840" cy="910.159" r="8" />
            <circle cx="945" cy="839.855" r="8" />
            <circle cx="1050" cy="845.387" r="8" />
            <circle cx="1155" cy="769.216" r="8" />
            <circle cx="1260" cy="552.061" r="8" />
            <circle cx="1365" cy="884.929" r="8" />
            <circle cx="1470" cy="463.543" r="8" />
            <circle cx="1575" cy="344.916" r="8" />
            <circle cx="1680" cy="350.278" r="8" />
            <circle cx="1785" cy="751.706" r="8" />
            <circle cx="1890" cy="692.164" r="8" />
            <circle cx="1995" cy="150.999" r="8" />
          </g>
        </svg>
      </figure>
    </div>
  </div>
);
