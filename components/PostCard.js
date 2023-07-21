"use client";

import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";


const PostCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();


  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${post.creator._id}?name=${post.creator.username}`);
  };


  

  // Regular expression to match URLs with HTTPS protocol
  const httpsLinkRegex = /https:\/\/\S+/g;
  const matches = post.resource.match(httpsLinkRegex);

  // If there are matches, replace them with clickable links
  if (matches) {
    const textParts = post.resource.split(httpsLinkRegex);

    return (
      <div className='prompt_card'>
        <div className='flex justify-between items-start gap-5'>
          <div
            className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
            onClick={handleProfileClick}
          >
            <Image
              alt='user_image'
              width={40}
              height={40}
              className='rounded-full object-contain'
              src={post.creator.image}
            />

            <div className='flex flex-col'>
              <h3 className='font-satoshi font-semibold text-gray-900'>
                {post.creator.username}
              </h3>
              <p className='font-inter text-sm text-gray-500'>{post.bio || `I am ${post.creator.username}`}</p>
            </div>
          </div>

        </div>

        <div className='my-4 font-satoshi text-sm text-gray-700'>
          {textParts.map((part, index) => (
            <p key={index}>
              {part}

              {matches[index] && (
                <a className="pt-0.5 blue break-words" target="_blank" href={matches[index]}>{matches[index]}</a>
              )}
            </p>
          ))}
          </div>

        <p
          className='font-inter text-sm blue cursor-pointer'
          onClick={() => handleTagClick && handleTagClick(post.tag)}
        >
          #{post.tag}
        </p>

        {session?.user.id === post.creator._id && pathName === "/profile" && (
          <div className='mt-5 flex-start gap-3 border-t border-gray-100 pt-3'>
            <p
              className='edit_btn'
              onClick={handleEdit}
            >
              Edit
            </p>
            <p
              className='del_btn'
              onClick={handleDelete}
            >
              Delete
            </p>
          </div>
        )}
      </div>
    );
  }

  // If no HTTPS links are found, render the original text
  return (
    <div className='prompt_card'>
      <div className='flex justify-between items-start gap-5'>
        <div
          className='flex-1 flex justify-start items-center gap-3 cursor-pointer'
          onClick={handleProfileClick}
        >
          <Image
            alt='user_image'
            width={40}
            height={40}
            className='rounded-full object-contain'
            src={post.creator.image}
          />

          <div className='flex flex-col'>
            <h3 className='font-satoshi font-semibold text-gray-900'>
              {post.creator.username}
            </h3>
            <p className='font-inter text-sm text-gray-500'>
              {bio}
            </p>
          </div>
        </div>

      </div>

      <p className='my-4 font-satoshi text-sm text-gray-700'>{post.resources}</p>


      <p
        className='font-inter text-sm blue_gradient cursor-pointer'
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className='mt-5 flex-start gap-3 border-t border-gray-100 pt-3'>
          <p
            className='edit_btn'
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className='del_btn'
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );

};

export default PostCard;