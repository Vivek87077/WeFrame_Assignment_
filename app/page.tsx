import Sidebar from '@/components/Sidebar'
import DashboardHeader from '@/components/DashboardHeader'
import UploadsTable from '@/components/UploadsTable'

export default function Page() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-72 sticky top-0 h-screen">
        <Sidebar />
      </aside>

      <main className="flex-1 p-6">
        <div className="max-w-[1200px] mx-auto">
          <DashboardHeader />

          <section className="mt-8 bg-white rounded-2xl shadow-sm p-6">
            <h3 className="font-medium mb-4">My Uploads</h3>
            <UploadsTable />
          </section>
        </div>
      </main>
    </div>
  )
}
