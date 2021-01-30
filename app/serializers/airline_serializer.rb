# frozen_string_literal: false

# :nodoc:
class AirlineSerializer
  include JSONAPI::Serializer
  attributes :name, :image_url, :slug

  has_many :reviews
end
