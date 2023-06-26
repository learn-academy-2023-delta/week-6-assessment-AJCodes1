# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)Defines a class name for BlogPost
class BlogPostsController < ApplicationController
  def index
    # ---2)BlogPost.all is a mode and is beeing store to a instance variable @posts
    @posts = BlogPost.all
  end

  # ---3)defining a method called show, looks for one item in the database
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)defines the new method, displays a form to the user
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) creates a new BlogPost using the strong params method that is under the keyword private and assigns it to the instance variable @post
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) finds the BlogPost record with a specific id and assigns it to the instance variable @post
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)update the attributes of @post using the parameters from (blog_posst_params)
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)it redirects the user to the index page after a blog post is destroyed.
      redirect_to blog_posts_path
    end
  end

  # ---9)private is a keyword that restricts the scope of where a method can be called/defines the private section of the controller
  private 
  def blog_post_params
    # ---10)uses the params object to access the parameters passed in the request/ only title and content can be updated or created 
    params.require(:blog_post).permit(:title, :content)
  end
end
