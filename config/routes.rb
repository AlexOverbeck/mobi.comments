Rails.application.routes.draw do
  mount ActionCable.server => '/cable'
  root 'comments#index'
  resources :comments
end
