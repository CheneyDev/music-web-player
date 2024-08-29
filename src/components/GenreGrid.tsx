export function GenreGrid() {
    const genres = ['摇滚', '流行', '嘻哈', '电子', '古典', '爵士', 'R&B', '乡村', '独立', '金属']
    
    return (
      <>
        <h2 className="text-3xl font-bold mb-6">音乐流派</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {genres.map((genre, i) => (
            <div key={i} className="space-y-3">
              <div className="aspect-square bg-muted rounded-lg overflow-hidden flex items-center justify-center shadow-md">
                <span className="text-2xl font-bold">{genre}</span>
              </div>
            </div>
          ))}
        </div>
      </>
    )
  }