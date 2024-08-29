import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {  Home as HomeIcon,Search, Library, ChevronLeft, ChevronRight, Play, SkipBack, SkipForward, Repeat, Shuffle, Volume2, Heart, Clock, Plus } from "lucide-react"
import { Player } from "@/components/Player"

const albumImage = "https://i.pinimg.com/474x/22/f8/2b/22f82b664e622cbb98df16ad4afe6374.jpg"

export default function Home() {
  return (
    <div className="h-screen flex">
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
            <li>
              <Button variant="ghost" className="w-full justify-start">我的播放列表 #1</Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">收藏夹</Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">摇滚经典</Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">轻松氛围</Button>
            </li>
            <li>
              <Button variant="ghost" className="w-full justify-start">健身音乐</Button>
            </li>
          </ul>
        </div>
      </aside>
      <main className="flex-1 flex flex-col">
        <div className="flex-1 overflow-auto">
          <ScrollArea className="h-full">
            <div className="p-8">
              <Tabs defaultValue="featured" className="mb-8">
                <TabsList className="mb-6">
                  <TabsTrigger value="featured" className="text-l">精选</TabsTrigger>
                  <TabsTrigger value="genres" className="text-l">流派</TabsTrigger>
                  <TabsTrigger value="new" className="text-l">新发行</TabsTrigger>
                  <TabsTrigger value="charts" className="text-l">排行榜</TabsTrigger>
                </TabsList>
                <TabsContent value="featured">
                  <h2 className="text-3xl font-bold mb-6">精选专辑</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="space-y-3">
                        <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-md">
                          <img
                            src={albumImage}
                            alt={`专辑 ${i + 1}`}
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <h3 className="font-medium text-lg">精选专辑 {i + 1}</h3>
                        <p className="text-sm text-muted-foreground">艺术家名称</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="genres">
                  <h2 className="text-3xl font-bold mb-6">音乐流派</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {['摇滚', '流行', '嘻哈', '电子', '古典', '爵士', 'R&B', '乡村', '独立', '金属'].map((genre, i) => (
                      <div key={i} className="space-y-3">
                        <div className="aspect-square bg-muted rounded-lg overflow-hidden flex items-center justify-center shadow-md">
                          <span className="text-2xl font-bold">{genre}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="new">
                  <h2 className="text-3xl font-bold mb-6">新发行</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                    {[...Array(10)].map((_, i) => (
                      <div key={i} className="space-y-3">
                        <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-md">
                          <img
                            src={albumImage}
                            alt={`新专辑 ${i + 1}`}
                            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                          />
                        </div>
                        <h3 className="font-medium text-lg">新发行 {i + 1}</h3>
                        <p className="text-sm text-muted-foreground">艺术家名称</p>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="charts">
                  <h2 className="text-3xl font-bold mb-6">热门排行榜</h2>
                  <div className="space-y-6">
                    {['全球热门', '国内热门', '新歌榜', '飙升榜'].map((chart, i) => (
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
                </TabsContent>
              </Tabs>
              
              <h2 className="text-3xl font-bold mb-6 mt-10">最近播放</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-3">
                    <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-md">
                      <img
                        src={albumImage}
                        alt={`最近专辑 ${i + 1}`}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <h3 className="font-medium text-lg">最近专辑 {i + 1}</h3>
                    <p className="text-sm text-muted-foreground">艺术家名称</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-10">为你推荐</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-3">
                    <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-md">
                      <img
                        src={albumImage}
                        alt={`推荐专辑 ${i + 1}`}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <h3 className="font-medium text-lg">你的歌单 {i + 1}</h3>
                    <p className="text-sm text-muted-foreground">根据你的收听习惯</p>
                  </div>
                ))}
              </div>

              <h2 className="text-3xl font-bold mb-6 mt-10">热门播客</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="space-y-3">
                    <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-md">
                      <img
                        src={albumImage}
                        alt={`播客 ${i + 1}`}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <h3 className="font-medium text-lg">热门播客 {i + 1}</h3>
                    <p className="text-sm text-muted-foreground">主持人名称</p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollArea>
        </div>
        <Player />
      </main>
    </div>
  )
}