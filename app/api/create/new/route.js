import Post from "@models/resource";
import { connectToDB } from "@utils/database";

export const POST = async (request) => {
    const { userId, resource, tag } = await request.json();

    try {
        await connectToDB();
        const newPost = new Post({ creator: userId, resource, tag });

        await newPost.save();
        return new Response(JSON.stringify(newPost), { status: 201 })
    } catch (error) {
        return new Response("Failed to create a new resource", { status: 500 });
    }
}