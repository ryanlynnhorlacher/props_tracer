Rails.application.routes.draw do

  get 'home/index'

	 get '*unmatched_route'
end
