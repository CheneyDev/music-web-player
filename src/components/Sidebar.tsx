import { Button } from "@/components/ui/button"
import { HomeIcon, Search, Library } from "lucide-react"

export function Sidebar() {
  return (
    <aside className="w-64 bg-muted/50 p-5 hidden md:block">
      <nav className="space-y-5">
        <Button variant="ghost" className="w-full justify-start text-lg">
          <HomeIcon className="mr-3 h-5 w-5" />
          主页
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg">
          <Search className="mr-3 h-5 w-5" />
          搜索
        </Button>
        <Button variant="ghost" className="w-full justify-start text-lg">
          <Library className="mr-3 h-5 w-5" />
          你的音乐库
        </Button>
      </nav>
      <div className="mt-6 pt-6 border-t">
        <h2 className="font-semibold mb-3 text-lg">播放列表</h2>
        <ul className="space-y-3">
          {["我的播放列表 #1", "收藏夹", "摇滚经典", "轻松氛围", "健身音乐"].map((playlist, index) => (
            <li key={index}>
              <Button variant="ghost" className="w-full justify-start">{playlist}</Button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}