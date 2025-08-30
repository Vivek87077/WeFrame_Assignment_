import { StatsCard } from './StatsCard'

export default function DashboardHeader() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="col-span-1">
        <div className="bg-white rounded-2xl p-4 shadow-sm">
          <div className="text-sm font-medium mb-2">Account Progress</div>
          <div className="flex items-center gap-6">
            <div className="w-36 h-36 rounded-full bg-gradient-to-tr from-blue-200 to-blue-400 flex items-center justify-center text-2xl font-semibold">85%</div>
            <div className="flex-1 space-y-2">
              <div className="text-sm">Steps Completed</div>
              <ul className="text-xs list-disc pl-4 opacity-80">
                <li>Profile Setup</li>
                <li>Initial Training</li>
                <li>Legal Documents</li>
              </ul>
              <div className="text-xs mt-3 text-gray-500">Steps Remaining</div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatsCard title="Total Franchisees Onboard" value="14" badgeText="+7.4%" />
        <StatsCard title="Key Insights & Feedback" value="10%" subtitle="Sales Growth" />
        <StatsCard title="Financial Wellbeing" value="20" subtitle="Total Franchisees" />
        <StatsCard title="Prospect Leads" value="3" subtitle="Active Leads" />
      </div>
    </div>
  )
}
