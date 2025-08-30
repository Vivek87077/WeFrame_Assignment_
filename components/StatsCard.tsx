export function StatsCard({ title, value, subtitle, badgeText }: { title: string; value: string | number; subtitle?: string; badgeText?: string }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm">
      <div className="text-xs font-medium">{title}</div>
      <div className="flex items-center justify-between mt-2">
        <div>
          <div className="text-2xl font-semibold">{value}</div>
          {subtitle && <div className="text-xs text-gray-500">{subtitle}</div>}
        </div>
        {badgeText && <div className="text-xs bg-green-100 px-2 py-1 rounded">{badgeText}</div>}
      </div>
    </div>
  )
}
