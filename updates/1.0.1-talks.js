var talks = {
	'2016-02-22 10:00': {
		title: 'Keynote',
		who: 'Nick Schrock',
		company: 'Facebook',
	},
	'2016-02-22 10:30': {
		title: 'How To Use React In A Wedding Gift Without Being A Bad Friend',
		who: 'Keith Poplawski',
		company: 'Namely',
		description:
`As a belated gift, I’ve created a physical, standalone version of Jeopardy. Featuring React as the project’s interface, an Arduino and a node app running on a Raspberry Pi create an engaging and unique user experience. The presentation highlights React’s potential to respond to input beyond the mouse, including touch, physical buttons, and speech recognition.
`
	},
	'2016-02-22 11:30': {
		title: 'Rich Text Editing with React',
		who: 'Isaac Salier-Hellendag',
		company: 'Facebook',
		description:
`Plain text is boring. At Facebook, we want to give our users the ability to add mentions, emoticons, hashtags, styles, and embedded media within the content they share. The result is that nearly every input on Facebook requires rich text features.

As UI engineers, we want to provide our product teams with the tools to implement and expand upon these features without pushing them into the contentEditable pit of despair.

This talk will dive into the details of how we used React, ImmutableJS, and yes, contentEditable, to create an editor framework that enables engineers to build and customize rich text composition experiences across Facebook.
`
	},
	'2016-02-22 12:00': {
		title: 'A Cartoon Guide to the Wilds of Data Handling',
		who: 'Lin Clark',
		company: 'Mozilla',
		description:
`I'm going to walk you through the wilds of data handling in react. I call it “the wilds” because when you first look at the landscape, it seems to be overflowing with an untamed profusion of different options. The boundaries between these options aren't clear, and it's hard to see why you'd want to pick any one in particular.

When you look closer, you'll see that it's actually easier to navigate than you might think. You just need a good guide.
`
	},
	'2016-02-22 14:00': {
		title: 'Demystifying Tech Recruiting',
		who: 'Helena Milosevic',
		company: 'Facebook',
		description:
`The recruiting process employed by major technology companies can often seem like a black box. In a pretty untraditional type of talk for a JavaScript conference, I will dive deep into exactly how the process works at Facebook in order to give you an idea of what to expect and how to prepare if you ever decide to apply for a major technology company.
`
	},
	'2016-02-22 14:30': {
		title: 'Web-like Release Agility for Native Apps',
		who: 'Jonathan Carter',
		company: 'Microsoft',
		description:
`React Native brought the web's enviable debug cycle to mobile, without needing to sacrifice native UI to get there. While this makes for an amazing dev experience, your apps are still ultimately distributed through stores, and therefore, can’t immediately take advantage of the same release agility that is typically associated with web dev. But that doesn't have to be the case!

Whether you are doing distributions within your team, amongst your clients or to your entire consumer base, getting improvements out to users as quickly as possible, and monitoring its impact on usage/satisfaction, can be critical to success. This talk will show how easy it can be to setup an automated build pipeline and release continous app deployments via services like VSTS, HockeyApp and CodePush.
`
	},
	'2016-02-22 15:30': {
		title: 'React, Meet Virtual Reality',
		who: 'Eric Florenzano',
		company: '',
		description:
`After a short moment in the 90s, Virtual Reality faded away. Now in 2016, VR is coming back in a big way. Games are leading the charge, but with millions of headsets pouring into the marketplace over the next few years, how can React web and app developers get involved? Can React even handle the screaming-fast performance requirements of VR? Spoiler: it can.

This talk explores these concepts by incrementally building up a mobile VR engine that can be driven not just with JavaScript, but with React. We'll discover how naive approaches fail, and why game engines are built the way they are. Finally, we'll cover some exiting work with WebVR which intends to bring VR to all browsers.
`
	},
	'2016-02-22 16:00': {
		title: 'Building a Progressive Web App',
		who: 'Aditya Punjani',
		company: 'Flipkart',
		description:
`Flipkart Lite is Progressive Web App built with React, Flux, and Service Workers. This talk will deep dive into how we developed a high-performance mobile web app at scale, by devising a new architecture and taking an unconventional approach to server-side rendering with React.

Hear how React and Flux Stores helped us speed up rendering and how we heavily optimized React Components to achieve 60fps scrolling and interactions. In conjunction with this, learn how we utilized Service Workers to eliminate all network latencies on repeat visits. The result was an immersive and smooth web app that worked seamlessly even on low-end mobile devices and 2g connections.
`
	},
	'2016-02-22 17:00': {
		title: 'Redux, Re-frame, Relay, Om/next, oh my!',
		who: 'Jared Forsyth',
		company: 'Khan Academy',
		description:
`Managing client-side state is pretty easy for TodoMVC, but soon after you move beyond that, your app can quickly get brittle, discouraging re-use and significantly complicating maintenance. I will give an overview of a few of the libraries/frameworks that have appeared recently that try to address this problem, show how each of them looks when used in the React context, and then discuss advantages, disadvantages, common patterns, and what we can learn.
`
	},
	'2016-02-23 10:00': {
		title: 'Team × Technology',
		who: 'James Ide',
		company: 'Exponent',
		description:
`With React Native, mobile developers are able to increase both their productivity and scope of work. The cross-platform technology is fantastic for teams building for Android and iOS, and developers can take ownership of products & features instead of single-platform implementations.

At Exponent we've extended this idea to include both products and infrastructure. I'll talk a bit about how we apply this to our software development and the benefits and challenges of growing full-stack developers into cross-stack mobile developers who are responsible for Android and iOS.
`
	},
	'2016-02-23 10:30': {
		title: 'Universal GL Effects for Web and Native',
		who: 'Gaetan Renaudeau',
		company: 'Project September',
		description:
`gl-react is a universal library for implementing advanced filters and effects on top of images, videos, text or any VDOM Content (such as UI Views) - without having to deal with the imperative and low-level OpenGL and WebGL APIs. Because they are defined as simple React components, complex arrangements can be composed using the VDOM descriptive paradigm.

gl-react hides OpenGL's statefulness and exposes its greatest functional feature: GLSL (an expressive 'functional rendering' language) and its rendering pipeline that runs on the GPU. Effects such as blur, saturation, color rotation and tinting, image composition, noise,... can all be implemented easily. But OpenGL is extremely powerful, unlocking the potential for spectacular effects and UI components: image deformation, localized blur using depth map, normal map effects, and more.
`
	},
	'2016-02-23 11:30': {
		title: 'React: What Lies Ahead',
		who: 'Ben Alpert',
		company: 'Facebook',
		description:
`In the last few years, React has exploded in popularity, now supporting hundreds of thousands of developers on the web. React also lies at the heart of React Native, which has made it easier than ever to build native mobile apps.

On the React team, we're continually making performance and stability improvements so that React can be a strong foundation. But in our role of helping developers build high-quality products quickly, what new opportunities for React do we see in the future? In this talk, hear about the latest challenges we're facing at Facebook, how React might be able to help solve them in the future, and how we think about developing React.
`
	},
	'2016-02-23 14:00': {
		title: 'Performance Without Compromise',
		who: 'Steve McGuire',
		company: 'Netflix',
		description:
`Performance and declarative, functional programming are at odds in the minds of many developers. At Netflix, we have an especially challenging performance target to hit. This talk will explore how we managed to take an unflinching stand on a completely declarative React based architecture while maintaining 100ms key-input and 60fps on the 600mhz single-core devices in your living room.

We'll talk about how and why we adhered to principles like no refs, no observation, no mixins or inheritance, immutable hierarchical state, declarative data via Falcor, and top-down-rendering. While some of these principles can actually help performance, we'll share how we mitigated others in order to hit our tough performance targets without compromising.
`
	},
	'2016-02-23 14:30': {
		title: 'A GraphQL Framework in Non-JS Servers',
		who: 'Syrus Akbary',
		company: 'Graphene',
		description:
`GraphQL is quite powerful, but why create our schemas in JS if our backend is in a different language? (Python, PHP/Hack, Ruby, Scala...)

We will do a quick overview of the different GraphQL implementations and focus on Graphene, the main GraphQL Framework for Python that permits setup a GraphQL server and schema in the blink of an eye.
`
	},
	'2016-02-23 15:30': {
		title: 'Speeding up Startup for Large React Apps',
		who: 'Bhuwan Khattar',
		company: 'Facebook',
		description:
`Applications inevitably get new features over time. While number of features might grow linearly, the increase in coupling across parts of the application is usually exponential and slows down app initialization and degrades performance. We obviously want richer applications, but not necessarily at the cost of performance.

Instead of compromising by choosing one over the other, we've been building abstractions and infrastructure to improve performance, even in the face of increasing complexity. By incrementally loading parts of our application and reducing work required for application initialization, we can significantly simplify and speed up startup. This talk explores some of Facebook's efforts to make initialization faster for large and growing React applications.
`
	},
	'2016-02-23 16:00': {
		title: 'Rethinking All Practices: Building Applications in Elm',
		who: 'Jamison Dance',
		company: 'Kuali',
		description:
`React re-thought best practices for web and native development, but it is limited by the strengths and weaknesses of JavaScript.

Elm takes rethinking best practices even further by asking what a modern language designed for productive development should look like.

Signals and the Elm Architecture help you compose large complex applications out of small, understandable pieces. Elm's powerful type system and emphasis on pure functions and immutable data make refactoring and maintaining large applications faster and easier.

Elm and React share common ideas, and creating a new language helps Elm leverage those ideas in to a better development experience. Learn how Elm can make you a better React developer, and maybe, just maybe, take the plunge in to trying Elm yourself.
`
	},
	'2016-02-23 17:00': {
		title: 'Optimising React Native: Tools and Tips',
		who: 'Tadeu Zagallo',
		company: 'Facebook',
		description:
`React Native has seen an impressive adoption since its open-sourcing. Our goal is to make it easier for developers to write awesome native apps and we believe that performance is a prerequisite for a great user experience. We'll go over some of the tools that we use to find and fix performance issues in React Native code, and share some tips and optimisations that you can use to make your own apps faster.
`
	},
	'2016-02-23 17:30': {
		title: 'Back to React',
		who: 'Andrew Clark',
		company: 'OpenGov',
		description:
`React isn't yet-another-JavaScript-framework — it's a paradigm shift in the way UIs are engineered. If in ten years we're no longer using React, we'll likely be using something similar. You can already see this in how pre-React libraries like Ember and Angular have pivoted in the wake of React's two big innovations: a declarative component model, and unidirectional data flow.

But it's even more clear when looking at the post-React libraries, which use functional programming concepts to provide powerful architectures for state management. In this talk, I'll show how we can steal some of the best ideas from Om, Cycle, and Elm, and use them in our React applications.
`
	},
};

exports.create = {
	Talk: [],
	Person: [],
};

Object.keys(talks).forEach(time => {
	var talk = talks[time];
	var person = talk.who.replace(/\W+/, '');
	exports.create.Talk.push({
		title: talk.title,
		type: 'full',
		time: time,
		person: person,
		description: talk.description,
	});
	exports.create.Person.push({
		'name.full': talk.who,
		company: talk.company,
		__ref: person,
	});
});
