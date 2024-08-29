import { albumImage } from "@/constants"

interface AlbumGridProps {
  title: string
  count: number
  itemTitle: (index: number) => string
  subtitle?: string
}

export function AlbumGrid({ title, count, itemTitle, subtitle }: AlbumGridProps) {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {[...Array(count)].map((_, i) => (
          <div key={i} className="space-y-3">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden shadow-md">
              <img
                src={albumImage}
                alt={`${itemTitle(i + 1)}`}
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
              />
            </div>
            <h3 className="font-medium text-lg">{itemTitle(i + 1)}</h3>
            {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
          </div>
        ))}
      </div>
    </>
  )
}