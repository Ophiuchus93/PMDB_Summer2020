Rails.application.routes.draw do
  namespace :api do
    resources :genres do
      resources :movies
    end
  end
end
