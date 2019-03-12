# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## userテーブル
|column|Type|options|
|------|----|-------|
|name|string|null: false, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false|
|message_id|integer|null: false, foreign_key: true|

##Association
|column|Type|options|
|------|----|-------|
- has_many :members
- has_many :messages, through: :members


## messageテーブル
|column|Type|options|
|------|----|-------|
|body|text|null: false|
|image|string|
|user_id|integer|null: false|


##Association
|column|Type|options|
|------|----|-------|
- has_many :users
- has_many :members, through: :users

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :message


