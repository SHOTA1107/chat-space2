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
|group_id|integer|null: false, foreign_key: true|
|message_id|integer|null: false, foreign_key: true|

##Association
|column|Type|options|
|------|----|-------|
- has_many: messages
- has_many: members
- has_many: groups, through: :members

## groupテーブル
|column|Type|options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|

##Association
|column|Type|options|
|------|----|-------|
- has_many: members
- has_many: users, through: :members
- has_many: messages

## messageテーブル
|column|Type|options|
|------|----|-------|
|body|text|null: false|
|image|string|
|gruop_id|integer|null: false|
|user_id|integer|null: false|

##Association
|column|Type|options|
|------|----|-------|
- belongs_to: user


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


