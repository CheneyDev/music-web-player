import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sidebar } from "@/components/Sidebar"
import { AlbumGrid } from "@/components/AlbumGrid"
import { GenreGrid } from "@/components/GenreGrid"
import { ChartList } from "@/components/ChartList"
import { Player } from "@/components/Player"

export default function Home() {
  return (
    <div className="h-screen flex">
      <Sidebar />
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
                  <AlbumGrid 
                    title="精选专辑" 
                    count={10} 
                    itemTitle={(i) => `精选专辑 ${i}`} 
                    subtitle="艺术家名称" 
                  />
                </TabsContent>
                <TabsContent value="genres">
                  <GenreGrid />
                </TabsContent>
                <TabsContent value="new">
                  <AlbumGrid 
                    title="新发行" 
                    count={10} 
                    itemTitle={(i) => `新发行 ${i}`} 
                    subtitle="艺术家名称" 
                  />
                </TabsContent>
                <TabsContent value="charts">
                  <ChartList />
                </TabsContent>
              </Tabs>
              
              <AlbumGrid 
                title="最近播放" 
                count={6} 
                itemTitle={(i) => `最近专辑 ${i}`} 
                subtitle="艺术家名称" 
              />

              <AlbumGrid 
                title="为你推荐" 
                count={6} 
                itemTitle={(i) => `你的歌单 ${i}`} 
                subtitle="根据你的收听习惯" 
              />

              <AlbumGrid 
                title="热门播客" 
                count={6} 
                itemTitle={(i) => `热门播客 ${i}`} 
                subtitle="主持人名称" 
              />
            </div>
          </ScrollArea>
        </div>
        <Player />
      </main>
    </div>
  )
}