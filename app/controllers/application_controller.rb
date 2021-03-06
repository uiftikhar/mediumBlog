class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  before_action :configure_permitted_parameters, if: :devise_controller?

  def current_user?(user)
    current_user.id == user.id
  end

  helper_method :current_user?

  protected
  	def configure_permitted_parameters
  		devise_parameter_sanitizer.for(:sign_up) { |u|  u.permit(:username, :email, :password, :password_conformation, :remember_me)}
  		devise_parameter_sanitizer.for(:sign_in) { |u|  u.permit(:login, :username, :password, :email, :remember_me)}
  		devise_parameter_sanitizer.for(:account_update) { |u|  u.permit(:username, :email, :password, :password_conformation, :current_password)}
  	end

end
