Rails.application.routes.draw do
  root to: 'pages#home'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/realestate", to: "pages#realestate"
  get "/programming", to: "pages#programming"
end
