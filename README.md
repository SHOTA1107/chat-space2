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

## usersテーブル
|column|Type|options|
|------|----|-------|
|name|string|null: false, unique: true, index: true|
|email|string|null: false, unique: true|
|password|string|null: false|


##Association
|column|Type|options|
|------|----|-------|
- has_many :members
- has_many :groups, through: :members
- has_many :messages

## groupsテーブル
|column|Type|options|
|------|----|-------|
|name|stirng|null: false|
|created_at|datetime|null: false|

##Association
|column|Type|options|
|------|----|-------|
- has_many: members
- has_many: users, through: :members
- has_many: messages


## messagesテーブル
|column|Type|options|
|------|----|-------|
|body|text|null: false|
|image|string|
|user_id|integer|null: false|
|group_id|integer|null: false|
|created_at|datetime|null: false|

##Association
|column|Type|options|
|------|----|-------|
- belongs_to :user
- belongs_to :gruop

## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :user
- belongs_to :gruop


