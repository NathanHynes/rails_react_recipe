class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.text :ingredients, null: false
      t.text :instruction, null: false
      t.string :image, default: 'https://raw.githubusercontent.com/do-community/react_rails_recipe/master/app/assets/images/Sammy_Meal.jpg'
      t.timestamps
    end
  end
end
#
# This migration file contains a Ruby class with a change method,
#  and a command to create a table called recipes along with the columns and their data types.
#   You also updated 20190407161357_create_recipes.rb with a NOT NULL constraint on the name,
#   ingredients, and instruction columns by adding null: false, ensuring that these columns have
#    a value before changing the database. Finally, you added a default image URL for your image column;
#     this could be another URL if you wanted to use a different image.
