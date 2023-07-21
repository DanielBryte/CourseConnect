import Post from "@models/resource";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const resource = await Post.findById(params.id).populate('creator')
        if (!resource) return new Response("Post Not Found", { status: 404 });

        return new Response(JSON.stringify(resource), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

export const PATCH = async (request, { params }) => {
    const { resource, tag } = await request.json();

    try {
        await connectToDB();

        // Find the existing post by ID
        const existingPost = await Post.findById(params.id);

        if (!existingPost) {
            return new Response("Resource not found", { status: 404 });
        }

        // Update the post with new data
        existingPost.resource = resource;
        existingPost.tag = tag;

        await existingPost.save();

        return new Response("Successfully updated", { status: 200 });
    } catch (error) {
        return new Response("Error Updating", { status: 500 });
    }
};

export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();

        // Find the post by ID and remove it
        await Post.findByIdAndRemove(params.id);

        return new Response("Resource deleted successfully", { status: 200 });
    } catch (error) {
        return new Response("Error deleting post", { status: 500 });
    }
};