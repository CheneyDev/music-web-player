'use client'

import { useState, useEffect } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sidebar } from "@/components/Sidebar"
import { GenreGrid } from "@/components/GenreGrid"
import { ChartList } from "@/components/ChartList"
import { Player } from "@/components/Player"
import { getTopTracks, getTopAlbums } from "@/lib/api"
import { TrackGrid } from "@/components/TrackGrid"
import { AlbumGrid } from "@/components/AlbumGrid"

export default function Home() {
  const [topTracks, setTopTracks] = useState([]);
  const [topAlbums, setTopAlbums] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const tracks = await getTopTracks();
      const albums = await getTopAlbums();
      setTopTracks(tracks);
      setTopAlbums(albums);
    }
    fetchData();
  }, []);

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
                    albums={topAlbums || []}
                  />
                </TabsContent>
                <TabsContent value="genres">
                  <GenreGrid />
                </TabsContent>
                <TabsContent value="new">
                  <AlbumGrid 
                    title="新发行" 
                    albums={(topAlbums || []).slice(0, 5)}
                  />
                </TabsContent>
                <TabsContent value="charts">
                  <ChartList tracks={topTracks} />
                </TabsContent>
              </Tabs>
              
              <TrackGrid 
                title="全球热播" 
                tracks={topTracks} 
              />

              <AlbumGrid 
                title="热门专辑" 
                albums={topAlbums || []}
              />

              <AlbumGrid 
                title="热门播客" 
                albums={Array(6).fill({}).map((_, i) => ({
                  name: `热门播客 ${i + 1}`,
                  artist: { name: "主持人名称" },
                  image: { large: 'https://via.placeholder.com/300' }
                }))}
              />
            </div>
          </ScrollArea>
        </div>
        <Player />
      </main>
    </div>
  )
}