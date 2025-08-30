import React from 'react'

const links = [
  { label: 'Home', icon: '🏠' },
  { label: 'Stages & Checklist', icon: '📋' },
  { label: 'Upload Docs', icon: '📁' },
  { label: 'Preferred Vendors', icon: '🤝' },
  { label: 'Tech Stack', icon: '🛠️' },
]

export default function Sidebar() {
  return (
    <div className="h-full bg-gradient-to-b from-[#07324C] to-[#0f4a66] text-white px-4 py-6 flex flex-col">
      <div className="mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/10 rounded flex items-center justify-center">WF</div>
          <div>
            <div className="font-semibold">weframetech</div>
            <div className="text-xs opacity-70">Admin</div>
          </div>
        </div>
      </div>

      <nav className="space-y-1 flex-1">
        {links.map((l) => (
          <button key={l.label} className="w-full text-left py-2 px-3 rounded hover:bg-white/5">
            <span className="mr-3">{l.icon}</span>
            {l.label}
          </button>
        ))}
      </nav>

      <div className="mt-4 text-xs opacity-80">
        Logout
      </div>
    </div>
  )
}
