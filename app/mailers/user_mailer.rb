class UserMailer < ApplicationMailer
	 default from: 'proptracer@gmail.com'
 
  def welcome_email(user)
    @user = user
    @url  = 'http://proptracer.com/login'
    mail(to: @user.email, subject: 'Welcome to proptracer')
  end
end