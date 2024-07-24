import { Post } from "@/types/posts";

const posts: Post[] = [
  {
    id: "1",
    title: "Introduction to TypeScript",
    body: "TypeScript adds optional types, classes, and modules to JavaScript...",
    author: "Jane Doe",
    date: "2023-04-01",
    comments: [
      {
        id: "c1",
        text: "Great article!",
        userName: "JohnDoe123",
      },
      {
        id: "c2",
        text: "Very informative. Thanks!",
        userName: "SarahConnor",
      },
    ],
  },
  {
    id: "2",
    title: "Advanced TypeScript Features",
    body: "In this post, we'll explore some of the more advanced features of TypeScript...",
    author: "John Smith",
    date: "2023-04-05",
    comments: [
      {
        id: "c3",
        text: "This was a bit over my head, but interesting.",
        userName: "TechNewbie",
      },
      {
        id: "c4",
        text: "Can you provide more examples?",
        userName: "CodeMaster",
      },
    ],
  },
  {
    id: "3",
    title: "TypeScript vs. JavaScript: A Comparison",
    body: "While JavaScript is a scripting language that helps you create interactive web pages...",
    author: "Alice Johnson",
    date: "2023-04-10",
    comments: [
      {
        id: "c5",
        text: "This comparison really clarified things for me, thanks!",
        userName: "DevDude",
      },
      {
        id: "c6",
        text: "I'm still on the fence about switching, but great article.",
        userName: "JSFan",
      },
    ],
  },
  {
    id: "4",
    title: "Getting Started with TypeScript Decorators",
    body: "Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members...",
    author: "Bob Lee",
    date: "2023-04-15",
    comments: [
      {
        id: "c7",
        text: "Decorators are so powerful! Thanks for sharing.",
        userName: "TechGuru",
      },
      {
        id: "c8",
        text: "Can you explain more about metadata reflection?",
        userName: "CuriousDev",
      },
    ],
  },
  {
    id: "5",
    title: "TypeScript Generics: A Practical Guide",
    body: "Generics provide a way to create reusable components. A component can handle values of any type without being limited to a single one...",
    author: "Eva Santos",
    date: "2023-04-20",
    comments: [
      {
        id: "c9",
        text: "Finally, a guide on generics that I can understand!",
        userName: "HappyCoder",
      },
      {
        id: "c10",
        text: "This makes so much sense now, thank you!",
        userName: "TypeScriptFan",
      },
    ],
  },
  {
    id: "6",
    title: "Understanding TypeScript Enums",
    body: "Enums allow a developer to define a set of named constants...",
    author: "Chris Martin",
    date: "2023-04-25",
    comments: [
      {
        id: "c11",
        text: "Enums are so useful, thanks for the explanation!",
        userName: "EnumEnthusiast",
      },
      {
        id: "c12",
        text: "I didn't know about this feature, very cool.",
        userName: "NewToTS",
      },
    ],
  },
  {
    id: "7",
    title: "TypeScript Interfaces vs. Types",
    body: "Both interfaces and types can be used to define the shape of an object...",
    author: "Dana White",
    date: "2023-04-30",
    comments: [
      {
        id: "c13",
        text: "This cleared up a lot of confusion for me, thanks!",
        userName: "ConfusedCoder",
      },
      {
        id: "c14",
        text: "Great comparison, very helpful.",
        userName: "HelpfulDev",
      },
    ],
  },
  {
    id: "8",
    title: "TypeScript and React: A Perfect Match",
    body: "Using TypeScript with React can greatly improve your development experience...",
    author: "Emily Clark",
    date: "2023-05-05",
    comments: [
      {
        id: "c15",
        text: "I've been looking for a guide like this, thanks!",
        userName: "ReactFan",
      },
      {
        id: "c16",
        text: "TypeScript and React really do work well together.",
        userName: "TSReactDev",
      },
    ],
  },
  {
    id: "9",
    title: "TypeScript for Node.js Developers",
    body: "TypeScript can also be used on the server-side with Node.js...",
    author: "Frank Harris",
    date: "2023-05-10",
    comments: [
      {
        id: "c17",
        text: "This is exactly what I needed, thanks!",
        userName: "NodeDev",
      },
      {
        id: "c18",
        text: "Great tips for using TypeScript with Node.js.",
        userName: "ServerSideDev",
      },
    ],
  },
  {
    id: "10",
    title: "TypeScript Utility Types",
    body: "TypeScript provides several utility types to facilitate common type transformations...",
    author: "Grace Lee",
    date: "2023-05-15",
    comments: [
      {
        id: "c19",
        text: "Utility types are so handy, thanks for the guide!",
        userName: "UtilityFan",
      },
      {
        id: "c20",
        text: "I learned a lot from this, thanks!",
        userName: "LearningDev",
      },
    ],
  }
];

export default posts;