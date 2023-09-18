import Banner from "@/components/banner"
import GridPattern from "@/components/magicui/grid-pattern"
import { SiteFooter } from "@/components/site-footer"
import { cn } from "@/lib/utils"

interface MarketingLayoutProps {
  children: React.ReactNode
}

export default async function MarketingLayout({
  children,
}: MarketingLayoutProps) {
  // const user = await getCurrentUser()

  return (
    <>
      <Banner />
      {/* <SiteHeader user={user} /> */}
      <main className="flex-1 container">{children}</main>
      <SiteFooter />
      <GridPattern
        width={40}
        height={40}
        x={-1}
        y={-1}
        className={cn(
          "-z-10 stroke-gray-300/30 [mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] "
        )}
      />
    </>
  )
}
