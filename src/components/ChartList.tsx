import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { albumImage } from "@/constants"

export function ChartList() {
  const charts = ['全球热门', '国内热门', '新歌榜', '飙升榜']
  
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">热门排行榜</h2>
      <div className="space-y-6">
        {charts.map((chart, i) => (
          <div key={i} className="bg-muted rounded-lg p-6 shadow-md">
            <h3 className="text-xl font-semibold mb-4">{chart}</h3>
            <ul className="space-y-4">
              {[...Array(5)].map((_, j) => (
                <li key={j} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="mr-6 font-bold text-lg">{j + 1}</span>
                    <img src={albumImage} alt={`歌曲 ${j + 1}`} className="w-16 h-16 rounded-lg mr-6 shadow-md" />
                    <div>
                      <p className="font-medium text-lg">热门歌曲 {j + 1}</p>
                      <p className="text-sm text-muted-foreground">艺术家名称</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}