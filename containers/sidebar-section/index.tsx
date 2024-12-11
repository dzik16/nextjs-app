import AppSidebar from "../../components/Sidebar"
import { SidebarProvider, SidebarTrigger } from "../../components/ui/sidebar"

const SidebarSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

export default SidebarSection
