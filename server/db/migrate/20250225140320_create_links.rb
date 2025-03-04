class CreateLinks < ActiveRecord::Migration[7.1]
  def change
    create_table :links do |t|
      t.string :original_url
      t.string :short_url

      t.timestamps
    end
    add_index :links, :short_url
  end
end
