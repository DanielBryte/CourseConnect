import PostCard from "./PostCard"


const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
return (
            <>
                <section className="app">
                    <div className="profile-div">
                    <h1 className="head_text">
                        <span className="blue">{name} profile</span>
                    </h1>
                    <p className="p-desc">{desc}</p>
                    </div>


                    {/* <div className="flex flex-col md:flex-row justify-between desc gap-2 md:gap-3 border border-gray-400 rounded-lg py-3 px-1.5 -mx-1">
                       <span className="text-xl font-semibold blue">Bio:</span> 
                       <span className="text-gray-600">{bio}</span>
                       {
                       <button className="invisible text-sm bg-gray-400 rounded-md text-white px-1.5 py-1" disabled>Edit bio</button>
                      }
                    </div> */}

                    <div className='mt-6 post_layout'>
                        {data.map((post) => (
                            <PostCard
                                key={post._id}
                                post={post}
                                handleEdit={() => handleEdit && handleEdit(post)}
                                handleDelete={() => handleDelete && handleDelete(post)}
                            />
                        ))}
                    </div>
                </section>
            </>
        );
}

export default Profile