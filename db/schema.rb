# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160920220026) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "customers", force: :cascade do |t|
    t.string   "name",         null: false
    t.string   "email",        null: false
    t.string   "phone_number", null: false
    t.integer  "user_id"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.index ["user_id"], name: "index_customers_on_user_id", using: :btree
  end

  create_table "estimates", force: :cascade do |t|
    t.string   "location",       null: false
    t.float    "distance",       null: false
    t.float    "final_price",    null: false
    t.string   "fence_material", null: false
    t.float    "fence_height",   null: false
    t.integer  "gate_count",     null: false
    t.integer  "customer_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["customer_id"], name: "index_estimates_on_customer_id", using: :btree
  end

  create_table "gate_types", force: :cascade do |t|
    t.float    "gate_price"
    t.integer  "width"
    t.string   "style"
    t.integer  "material_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["material_id"], name: "index_gate_types_on_material_id", using: :btree
  end

  create_table "heights", force: :cascade do |t|
    t.string   "name",           null: false
    t.float    "price_per_foot", null: false
    t.integer  "material_id"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
    t.index ["material_id"], name: "index_heights_on_material_id", using: :btree
  end

  create_table "materials", force: :cascade do |t|
    t.string   "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "first_name",   null: false
    t.string   "last_name",    null: false
    t.string   "email",        null: false
    t.string   "phone_number"
    t.string   "role"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

end
