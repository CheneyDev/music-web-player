import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AlbumGridProps {
  title: string;
  albums: any[];
}

export function AlbumGrid({ title, albums }: AlbumGridProps) {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {albums.map((album, i) => (
          <div key={i} className="space-y-3">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-md relative group">
              <img
                src={album.image.large || 'https://via.placeholder.com/300'}
                alt={album.name}
                className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 flex items-center justify-center">
                <Button size="icon" className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play className="h-6 w-6" />
                </Button>
              </div>
            </div>
            <h3 className="font-medium text-lg truncate">{album.name}</h3>
            <p className="text-sm text-muted-foreground truncate">{album.artist.name}</p>
          </div>
        ))}
      </div>
    </>
  )
}