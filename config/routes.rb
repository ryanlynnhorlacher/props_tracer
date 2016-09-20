Rails.application.routes.draw do

  resources :customers do 
    resources :estimates, shallow: true
  end

  resources :materials do 
    resources :heights, shallow: true
    resources :gate_types, shallow: true
  end

end
