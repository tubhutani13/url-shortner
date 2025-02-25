class Link < ApplicationRecord
  validates :original_url, presence: true, format: { with: URI::DEFAULT_PARSER.make_regexp }
  before_create :generate_unique_short_url

  private

  def generate_unique_short_url
    loop do
      self.short_url = SecureRandom.alphanumeric(6)
      break unless Link.exists?(short_url: short_url)
    end
  end
end
