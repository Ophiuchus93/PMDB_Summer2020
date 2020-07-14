require 'test_helper'

class Api::MoviesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_movies_index_url
    assert_response :success
  end

  test "should get show" do
    get api_movies_show_url
    assert_response :success
  end

  test "should get create" do
    get api_movies_create_url
    assert_response :success
  end

  test "should get edit" do
    get api_movies_edit_url
    assert_response :success
  end

  test "should get destroy" do
    get api_movies_destroy_url
    assert_response :success
  end

end
