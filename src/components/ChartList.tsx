import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

interface ChartListProps {
  tracks: any[];
}

export function ChartList({ tracks }: ChartListProps) {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">热门排行榜</h2>
      <div className="space-y-6">
        <div className="bg-muted rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-semibold mb-4">全球热门</h3>
          <ul className="space-y-4">
            {tracks.map((track, j) => (
              <li key={j} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="mr-6 font-bold text-lg">{j + 1}</span>
                  <img src={track.image[1]['#text'] || 'https://via.placeholder.com/64'} alt={track.name} className="w-16 h-16 rounded-lg mr-6 shadow-md" />
                  <div>
                    <p className="font-medium text-lg">{track.name}</p>
                    <p className="text-sm text-muted-foreground">{track.artist.name}</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon">
                  <Heart className="h-5 w-5" />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}