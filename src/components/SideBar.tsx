import { GenreResponseProps } from '../App'
import { Button } from './Button'

interface PropsSideBar {
  genres: GenreResponseProps[];
  selectedGenreId: number;
  handle: (id: number) => void;
}

export function SideBar({ genres, selectedGenreId, handle }: PropsSideBar) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handle(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}