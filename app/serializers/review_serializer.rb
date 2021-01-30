# frozen_string_literal: false

# :nodoc:
class ReviewSerializer
  include JSONAPI::Serializer
  attributes :title, :description, :score, :airline_id
end
