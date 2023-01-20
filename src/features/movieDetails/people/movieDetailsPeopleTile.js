import { MovieName, Name, NameBox, Photo, Poster, Tile } from "./styled"
import emptyPeople from "../../../images/emptyPeople.svg";
export const Cast = ({ name, profile_path, character }) => {
    
    const url_img = "https://image.tmdb.org/t/p/w500"

    return (
        <Tile>
            <Poster href={`https://www.google.com/search?q=${name}`}>
                <Photo src={ (profile_path!==null ? (url_img+profile_path) : emptyPeople)}/>
            </Poster>
            <NameBox>
                <Name href={`https://www.google.com/search?q=${name}`}>{name}</Name>
                <MovieName>{character}</MovieName>
            </NameBox>
        </Tile>
    )
};