import { Schema, model, models } from 'mongoose';

const ResourceSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  resource: {
    type: String,
    required: [true, 'Resource is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  }
});

const Resource = models.Resource || model("Resource", ResourceSchema);

export default Resource;