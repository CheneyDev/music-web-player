import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Heart, Shuffle, SkipBack, Play, SkipForward, Repeat, Volume2 } from "lucide-react"

const albumImage = "https://i.pinimg.com/474x/22/f8/2b/22f82b664e622cbb98df16ad4afe6374.jpg"

export function Player() {
  return (
    <div className="border-t bg-background py-3 px-6">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-4 w-1/4">
          <img
            src={albumImage}
            alt="专辑封面"
            className="w-14 h-14 rounded"
          />
          <div className="hidden sm:block">
            <h4 className="text-sm font-medium">当前歌曲标题</h4>
            <p className="text-xs text-muted-foreground">当前艺术家名称</p>
          </div>
          <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
            <Heart className="h-5 w-5" />
          </Button>
        </div>
        <div className="flex flex-col items-center space-y-2 w-2/4">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Shuffle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <SkipBack className="h-5 w-5" />
            </Button>
            <Button size="icon" className="rounded-full h-10 w-10">
              <Play className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <SkipForward className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:inline-flex">
              <Repeat className="h-5 w-5" />
            </Button>
          </div>
          <div className="flex items-center space-x-2 w-full max-w-md">
            <span className="text-xs text-muted-foreground hidden sm:inline">1:23</span>
            <Slider
              defaultValue={[33]}
              max={100}
              step={1}
              className="w-full"
            />
            <span className="text-xs text-muted-foreground hidden sm:inline">3:45</span>
          </div>
        </div>
        <div className="flex items-center space-x-3 w-1/4 justify-end">
          <Volume2 className="h-5 w-5 hidden sm:block" />
          <Slider
            defaultValue={[66]}
            max={100}
            step={1}
            className="w-[80px] sm:w-[100px]"
          />
        </div>
      </div>
    </div>
  )
}