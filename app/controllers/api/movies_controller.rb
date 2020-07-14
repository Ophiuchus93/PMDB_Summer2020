class Api::MoviesController < ApplicationController
  before_action :set_genre
  before_action :set_movie, only: [:show, :edit, :update, :destroy ]

  def index
    render json: @genre.movies
  end

  def show

  end

  def create
    movie = @genre.movies.new(movie_params)

    if movie.save
      render json: movie
    else
      render json: movie.errors, status: 422
    end
  end

  def update
    if @movie.update(movie_params)
      render json: @movie
    else
      render json: movie.errors, status: 422
    end
  end

  def edit
  end

  def destroy
    @movie.destroy
  end

  private
    def set_genre
      @genre = Genre.find(params[:genre_id])
    end

    def set_movie
      @movie = Movie.find(params[:id])
    end

    def movie_params
      params.require(:movie).permit(:title, :director, :leads, :year, :rated, :format, :length)
    end

end
