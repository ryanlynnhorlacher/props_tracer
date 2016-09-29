class ContactMailer < ApplicationMailer
	include SendGrid
	default from: 'customercontact@daprops.com'

	def contact_email(name, email, phone, comment) 
		@name = name
		@email = email
		@phone = phone
		@comment = comment
		mail(to: 'proptracer@gmail.com', subject: 'customer contact')
	end
end
