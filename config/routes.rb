Rails.application.routes.draw do
  
	root 'home#index'


  devise_for :users, controllers: 
      {sessions: 'sessions', registrations: 'registrations'}

  namespace :api do
    namespace :v1 do
      resources :users
      resources :customers do 
      resources :estimates, shallow: true
    end
      resources :materials do 
        resources :heights, shallow: true
        resources :gate_types, shallow: true
      end
    end
  end
  devise_scope :user do
    get '/users/current', to: 'registrations#get_user_info'
  end
  
  get '/api/v1/customers/search', to: 'customers#search'

  post 'contact_us', to: 'contact#create'

  get '*unmatched_route', to: 'home#index'

end
