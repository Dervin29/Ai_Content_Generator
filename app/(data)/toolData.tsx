// featureData.ts
const features = [
  {
    name: "Blog Title",
    desc: "An AI tool that will generate a title for your blog",
    category: "Blog",
    icon: "/blog.png",
    aiPrompt: "Write a title for your blog",
    slug: "generate-blog-title",
    form: [
      {
        label: 'Enter your blog title',
        field: 'input',
        name: 'demo',
        required: true
      },
      {
        label: 'Enter blog description',
        field: 'textarea',
        name: 'outline'
      }
    ]
  },
  // ... include all other features similarly
];

export default features;
