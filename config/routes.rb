Rails.application.routes.draw do
  
	root 'home#index'


  devise_for :users, controllers: 
      {sessions: 'sessions', registrations: 'registrations'}
  

  namespace :api do
    resources :customers do 
      resources :estimates, shallow: true
    end
  end

  namespace :api do
    resources :materials do 
      resources :heights, shallow: true
      resources :gate_types, shallow: true
    end
  end

  get '*unmatched_route', to: 'home#index'

end
