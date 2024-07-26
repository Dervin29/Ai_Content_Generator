export default [{
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
}, {
    name: "Product Description",
    desc: "An AI tool that will generate a description for your product",
    category: "E-commerce",
    icon: "/product.png",
    aiPrompt: "Write a description for your product",
    slug: "generate-product-description",
    form: [
        {
            label: 'Enter product name',
            field: 'input',
            name: 'productName',
            required: true
        },
        {
            label: 'Enter product details',
            field: 'textarea',
            name: 'productDetails'
        }
    ]
}, {
    name: "Email Subject Line",
    desc: "An AI tool that will generate a subject line for your email",
    category: "Email",
    icon: "/email.png",
    aiPrompt: "Write a subject line for your email",
    slug: "generate-email-subject-line",
    form: [
        {
            label: 'Enter email content',
            field: 'textarea',
            name: 'emailContent',
            required: true
        }
    ]
}, {
    name: "Social Media Post",
    desc: "An AI tool that will generate content for social media posts",
    category: "Social Media",
    icon: "/social.png",
    aiPrompt: "Write content for your social media post",
    slug: "generate-social-media-post",
    form: [
        {
            label: 'Enter post content',
            field: 'textarea',
            name: 'postContent',
            required: true
        },
        {
            label: 'Enter hashtags',
            field: 'input',
            name: 'hashtags'
        }
    ]
}, {
    name: "Landing Page Headline",
    desc: "An AI tool that will generate a headline for your landing page",
    category: "Website",
    icon: "/website.png",
    aiPrompt: "Write a headline for your landing page",
    slug: "generate-landing-page-headline",
    form: [
        {
            label: 'Enter page description',
            field: 'textarea',
            name: 'pageDescription',
            required: true
        }
    ]
}, {
    name: "Ad Copy",
    desc: "An AI tool that will generate copy for your advertisement",
    category: "Marketing",
    icon: "/ad.png",
    aiPrompt: "Write copy for your advertisement",
    slug: "generate-ad-copy",
    form: [
        {
            label: 'Enter ad headline',
            field: 'input',
            name: 'adHeadline',
            required: true
        },
        {
            label: 'Enter ad description',
            field: 'textarea',
            name: 'adDescription'
        }
    ]
}, {
    name: "SEO Meta Description",
    desc: "An AI tool that will generate SEO meta descriptions for your web pages",
    category: "SEO",
    icon: "/seo.png",
    aiPrompt: "Write an SEO meta description for your web page",
    slug: "generate-seo-meta-description",
    form: [
        {
            label: 'Enter page content',
            field: 'textarea',
            name: 'pageContent',
            required: true
        }
    ]
}, {
    name: "YouTube Video Title",
    desc: "An AI tool that will generate a title for your YouTube video",
    category: "Video",
    icon: "/youtube.png",
    aiPrompt: "Write a title for your YouTube video",
    slug: "generate-youtube-video-title",
    form: [
        {
            label: 'Enter video description',
            field: 'textarea',
            name: 'videoDescription',
            required: true
        }
    ]
}, {
    name: "Press Release",
    desc: "An AI tool that will generate a press release for your announcement",
    category: "Public Relations",
    icon: "/press.png",
    aiPrompt: "Write a press release for your announcement",
    slug: "generate-press-release",
    form: [
        {
            label: 'Enter announcement details',
            field: 'textarea',
            name: 'announcementDetails',
            required: true
        }
    ]
}, {
    name: "LinkedIn Post",
    desc: "An AI tool that will generate content for your LinkedIn post",
    category: "Social Media",
    icon: "/linkedin.png",
    aiPrompt: "Write content for your LinkedIn post",
    slug: "generate-linkedin-post",
    form: [
        {
            label: 'Enter post content',
            field: 'textarea',
            name: 'postContent',
            required: true
        },
        {
            label: 'Enter hashtags',
            field: 'input',
            name: 'hashtags'
        }
    ]
}, {
    name: "Instagram Caption",
    desc: "An AI tool that will generate a caption for your Instagram post",
    category: "Social Media",
    icon: "/instagram.png",
    aiPrompt: "Write a caption for your Instagram post",
    slug: "generate-instagram-caption",
    form: [
        {
            label: 'Enter post content',
            field: 'textarea',
            name: 'postContent',
            required: true
        },
        {
            label: 'Enter hashtags',
            field: 'input',
            name: 'hashtags'
        }
    ]
}, {
    name: "Twitter Tweet",
    desc: "An AI tool that will generate a tweet for your Twitter account",
    category: "Social Media",
    icon: "/twitter.png",
    aiPrompt: "Write a tweet for your Twitter account",
    slug: "generate-twitter-tweet",
    form: [
        {
            label: 'Enter tweet content',
            field: 'textarea',
            name: 'tweetContent',
            required: true
        },
        {
            label: 'Enter hashtags',
            field: 'input',
            name: 'hashtags'
        }
    ]
}, {
    name: "Facebook Post",
    desc: "An AI tool that will generate content for your Facebook post",
    category: "Social Media",
    icon: "/facebook.png",
    aiPrompt: "Write content for your Facebook post",
    slug: "generate-facebook-post",
    form: [
        {
            label: 'Enter post content',
            field: 'textarea',
            name: 'postContent',
            required: true
        },
        {
            label: 'Enter hashtags',
            field: 'input',
            name: 'hashtags'
        }
    ]
}, {
    name: "Newsletter Content",
    desc: "An AI tool that will generate content for your newsletter",
    category: "Email",
    icon: "/newsletter.png",
    aiPrompt: "Write content for your newsletter",
    slug: "generate-newsletter-content",
    form: [
        {
            label: 'Enter newsletter topic',
            field: 'input',
            name: 'newsletterTopic',
            required: true
        },
        {
            label: 'Enter newsletter details',
            field: 'textarea',
            name: 'newsletterDetails'
        }
    ]
}, {
    name: "Resume Bullet Points",
    desc: "An AI tool that will generate bullet points for your resume",
    category: "Career",
    icon: "/cover-letter.png",
    aiPrompt: "Write bullet points for your resume",
    slug: "generate-resume-bullet-points",
    form: [
        {
            label: 'Enter job title',
            field: 'input',
            name: 'jobTitle',
            required: true
        },
        {
            label: 'Enter job description',
            field: 'textarea',
            name: 'jobDescription'
        }
    ]
}, {
    name: "Cover Letter",
    desc: "An AI tool that will generate a cover letter for your job application",
    category: "Career",
    icon: "/resume.png",
    aiPrompt: "Write a cover letter for your job application",
    slug: "generate-cover-letter",
    form: [
        {
            label: 'Enter job title',
            field: 'input',
            name: 'jobTitle',
            required: true
        },
        {
            label: 'Enter job description',
            field: 'textarea',
            name: 'jobDescription'
        }
    ]
}]