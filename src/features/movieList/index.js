import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Pagination from "./pagination/index";
import { theme } from "../../theme";
import Movie from "./Movie";
import { fetchGenresList, fetchMovieList, getQuery, selectGenresList, selectMovieList, selectMovieListStatus, selectMovieTotalResults, setCurrentPageAPI } from "./movieListSlice";
import { MovieListPage, MoviesList, PopularMoviesBox, PopularMoviesName } from "./styled";
import { LoadingPage } from "../../common/LoadingPage";
import { ErrorPage } from "../../common/ErrorPage";
import { useQueryParameter } from "../../queryParameters";
import searchQueryParamName from "../../searchQueryParamName";
import NoResultPage from "../../common/NoResultPage";

const MovieList = ({ }) => {
  const dispatch = useDispatch();
  const movies = useSelector(selectMovieList);
  const genres = useSelector(selectGenresList);
  const status = useSelector(selectMovieListStatus);
  const query = useQueryParameter(searchQueryParamName);
  const totalResults = useSelector(selectMovieTotalResults);

  useEffect(() => {
    dispatch(getQuery(query));
    dispatch(fetchMovieList());
    dispatch(fetchGenresList());
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [query, dispatch]);

  return (
    <>
      {status === "loading" ? <LoadingPage title={"Search results for 'Popular Movies'"} />
        : status === "error" ? <ErrorPage />
          : (
            <MovieListPage theme={theme}>
              <PopularMoviesBox>
                <PopularMoviesName>
                  {!query ? "Popular Movies"
                    : totalResults === 0 ? <NoResultPage />
                      : `Search results for "${query}" (${totalResults})`}
                </PopularMoviesName>
                <MoviesList>
                  {(movies.map(movie => <Movie
                    genres={genres}
                    movieTitle={movie.title}
                    key={movie.id}
                    movieRating={movie.vote_average}
                    votesNumber={movie.vote_count}
                    movieTagArray={movie.genre_ids}
                    movieYear={movie.release_date}
                    moviePosterApiLink={movie.poster_path}
                    id={movie.id}
                  >
                  </Movie>))}
                </MoviesList>
                <Pagination />
              </PopularMoviesBox>
            </MovieListPage>
          )}
    </>
  );
};
export default MovieList;