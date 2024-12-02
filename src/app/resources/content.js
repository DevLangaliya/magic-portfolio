import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Dev',
    lastName:  'Langaliya',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Student',
    avatar:    '/images/avatar.jpg',
    location:  'Champaign, Illinois',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: false,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/DevLangaliya',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/dev-langaliya/',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:devl2@illinois.edu',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Dev Langaliya<br /><br /></>,
    subline: <>I'm a Student at the University of Illinois Urbana-Champaign, where I am studying<br /> Statistics and Computer Science.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: false
    },
    avatar: {
        display: false
    },
    calendar: {
        display: false,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I'm {person.name}, a {person.role} from {person.location}.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Motorola Solutions',
                timeframe: 'May 2025 - August 2025',
                role: 'AI Solution Engineer Intern',
                achievements: [
                    <>Selected to collaborate with Motorola Solutions IT team to support technology initiatives.</>,
                ],
                images: [ ]
            },
            {
                company: 'Fantasy Trading Room',
                timeframe: 'September 2024 - December 2024',
                role: 'Student Mobile Developer',
                achievements: [
                    <>Collaborated with a team of 6 to design, develop, and launch a mobile interface for fftradingroom.com.</>,
                    <>Integrated 2 new features with existing APIs for seamless interaction with trade data across iOS and Android devices.</>
                ],
                images: [ ]
            },
            {
                company: 'Motorola Solutions',
                timeframe: 'May 2024 - August 2024',
                role: 'Data Science Intern',
                achievements: [
                    <>Engineered a full stack web tool to manage a catalog of 1,000+ tables, with RESTful APIs for real-time data access and updates.</>,
                    <>Trained a predictive model with 86% accuracy on 7,000+ queries to estimate query run time, delivering actionable insights to
                        support corporate decisions.</>
                ],
                images: [ ]
            }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'University of Illinois Urbana-Champaign',
                description: <>B.S. in Statistics, Minor in Computer Science | GPA: 3.54/4.0</>,
            }
        ]
    },
    technical: {
        display: true, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Programming Languages',
                description: <>Python, TypeScript, JavaScript, SQL, R, Swift, C++, Java</>,
                images: []
            },
            {
                title: 'Frameworks & Libraries',
                description: <>React Native, Flask, scikit-learn, pandas, NumPy, Matplotlib, Hugging Face, React</>,
                images: []
            },
            {
                title: 'Developer Tools',
                description: <>Git, Docker, VS Code, AWS Redshift, RESTful APIs, PostgreSQL, Supabase</>,
                images: []
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };