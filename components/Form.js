import Link from "next/link"


const Form = ({ type, post, setPost, submitting, addResource }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue">{type}</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share high quality resources and tech courses to aid others kickstart, transit or build their career in tech.
      </p>

      <form onSubmit={addResource}
        className="mt-10 w-full flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base ">
            Share resources
          </span>

          <textarea
            className="form_textarea"
            value={post.resource}
            onChange={(e) => setPost({
              ...post,
              resource: e.target.value
            })}
            placeholder="Share resource here"
            required
          />
        </label>


        <label>
          <span className="font-satoshi font-semibold text-base ">
            Choose field
            <span> (webdevelopement, ui/ux design...)</span>
          </span>

          <input
            className="form_input"
            value={post.tag}
            onChange={(e) => setPost({
              ...post,
              tag: e.target.value
            })}
            placeholder="#tag"
            required
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            className="form_btn"
            type="submit"
            disabled={submitting}>
            {submitting ? `${type}ing...` : type}
          </button>
        </div>
      </form>
    </section>
  )
}

export default Form