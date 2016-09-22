Rails.application.routes.draw do
  
	root 'home#index'

  devise_for :users, controllers: 
      {sessions: 'sessions', registrations: 'registrations'}

  resources :customers do 
    resources :estimates, shallow: true
  end

  resources :materials do 
    resources :heights, shallow: true
    resources :gate_types, shallow: true
  end

  get '*unmatched_route', to: 'home#index'

end
