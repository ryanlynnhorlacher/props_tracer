class ContactController < ApplicationController
  def create
  	ContactMailer.contact_email(params[:name], params[:email],
  	                            params[:phone], params[:comment]).deliver_now
  	render json: {message: 'Email Sent!'}
  end
end
