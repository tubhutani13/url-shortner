class LinksController < ApplicationController
  before_action :find_link, only: [:show]

  def create
    @link = Link.new(link_params)
    if @link.save
      render json: { short_url: url_for(controller: 'links', action: 'show', id: @link.short_url) }, status: :created
    else
      render json: { error: @link.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def show
    redirect_to @link.original_url, allow_other_host: true
  end

  def index
    links = Link.all.order(created_at: :desc)

    render json: links.map { |link|
      {
        original_url: link.original_url,
        short_url: url_for(controller: 'links', action: 'show', id: link.short_url).to_s,
      }
    }, status: :ok
  end

  private

  def link_params
    params.require(:link).permit(:original_url)
  end

  def find_link
    @link = Link.find_by!(short_url: params[:id])
  rescue ActiveRecord::RecordNotFound
    render json: { error: 'Shortened URL not found' }, status: :not_found
  end
end
