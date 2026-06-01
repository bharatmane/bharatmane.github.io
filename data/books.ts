export interface Book {
  id: number
  coverImage: string
  title: string
  category: string
  description: string
  buyUrl: string
}

export const BOOKS: Book[] = [
  {
    id: 1,
    coverImage: '/assets/images/books/Software-Craftsmanship.jpg',
    title: 'Software Craftsmanship: The New Imperative',
    category: 'Software Craftsmanship',
    description: 'A call to arms for programmers: an impassioned manifesto that restores the developer to a central role in large-scale projects.',
    buyUrl: 'https://www.amazon.com/Software-Craftsmanship-Imperative-Pete-McBreen/dp/0201733862',
  },
  {
    id: 2,
    coverImage: '/assets/images/books/Clean-Code.jpg',
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    category: 'Software Craftsmanship',
    description: 'Even bad code can function. But if code isn\'t clean, it can bring a development organization to its knees.',
    buyUrl: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882',
  },
  {
    id: 3,
    coverImage: '/assets/images/books/The-Software-Craftsman.png',
    title: 'The Software Craftsman: Professionalism, Pragmatism, Pride',
    category: 'Software Craftsmanship',
    description: 'Despite advanced tools and methodologies, software projects continue to fail. Too many developers view development as just another production line.',
    buyUrl: 'https://www.amazon.com/Software-Craftsman-Professionalism-Pragmatism-Robert/dp/0134052501',
  },
  {
    id: 4,
    coverImage: '/assets/images/books/Refactoring.jpg',
    title: 'Refactoring: Improving the Design of Existing Code',
    category: 'Software Craftsmanship',
    description: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    buyUrl: 'https://www.amazon.com/Refactoring-Improving-Existing-Addison-Wesley-Signature/dp/0134757599',
  },
  {
    id: 5,
    coverImage: '/assets/images/books/Working-Effectively-With-Legacy-Code.jpg',
    title: 'Working Effectively with Legacy Code',
    category: 'Software Craftsmanship',
    description: 'Is your code easy to change? Can you get nearly instantaneous feedback when you do change it? If not, you have legacy code.',
    buyUrl: 'https://www.amazon.com/Working-Effectively-Legacy-Michael-Feathers/dp/0131177052',
  },
  {
    id: 6,
    coverImage: '/assets/images/books/tpp.jpg',
    title: 'The Pragmatic Programmer: Your Journey to Mastery',
    category: 'Software Craftsmanship',
    description: 'Cuts through the increasing specialization of modern software development to examine the core process of producing working, maintainable code.',
    buyUrl: 'https://pragprog.com/titles/tpp20/the-pragmatic-programmer-20th-anniversary-edition/',
  },
  {
    id: 7,
    coverImage: '/assets/images/books/Test-Driven-Development-By-Examples.jpg',
    title: 'Test Driven Development: By Example',
    category: 'Software Craftsmanship',
    description: 'Test-driven development is meant to eliminate fear in application development.',
    buyUrl: 'https://www.amazon.com/Test-Driven-Development-Kent-Beck/dp/0321146530',
  },
  {
    id: 8,
    coverImage: '/assets/images/books/Code-Complete.jpg',
    title: 'Code Complete',
    category: 'Software Craftsmanship',
    description: 'Widely considered one of the best practical guides to programming. Helping developers write better software for more than a decade.',
    buyUrl: 'https://www.amazon.com/Code-Complete-Practical-Handbook-Construction/dp/0735619670',
  },
  {
    id: 9,
    coverImage: '/assets/images/books/97-Things-Evey-Programmer-Should-Know.jpg',
    title: '97 Things Every Programmer Should Know',
    category: 'Software Craftsmanship',
    description: 'Tap into the wisdom of experts to learn what every programmer should know, no matter what language you use.',
    buyUrl: 'https://www.amazon.com/Things-Every-Programmer-Should-Know/dp/0596809484',
  },
  {
    id: 10,
    coverImage: '/assets/images/books/Beyond-Legacy-Code.jpg',
    title: 'Beyond Legacy Code',
    category: 'Software Craftsmanship',
    description: 'We\'re losing tens of billions of dollars a year on broken software. But there\'s hope.',
    buyUrl: 'https://pragprog.com/titles/dblegacy/beyond-legacy-code/',
  },
  {
    id: 11,
    coverImage: '/assets/images/books/Soft-Skills.jpg',
    title: 'Soft Skills: The Software Developer\'s Life Manual',
    category: 'Software Craftsmanship',
    description: 'A unique guide offering techniques and practices for a more satisfying life as a professional software developer.',
    buyUrl: 'https://www.amazon.com/Soft-Skills-software-developers-manual/dp/1617292397',
  },
  {
    id: 12,
    coverImage: '/assets/images/books/Refactoring-To-Patterns.jpg',
    title: 'Refactoring to Patterns',
    category: 'Software Craftsmanship',
    description: 'Brings together DESIGN PATTERNS and REFACTORING to introduce an effective process for improving code design.',
    buyUrl: 'https://www.amazon.com/Refactoring-Patterns-Joshua-Kerievsky/dp/0321213351/',
  },
  {
    id: 13,
    coverImage: '/assets/images/books/The Developer\'s Code.jpg',
    title: "The Developer's Code",
    category: 'Software Craftsmanship',
    description: 'Essential practices and mindsets for the modern software developer.',
    buyUrl: 'https://pragprog.com/titles/kcdc/the-developer-s-code/',
  },
  {
    id: 14,
    coverImage: '/assets/images/books/Coders at Work-Reflections on the Craft of Programming.jpg',
    title: 'Coders at Work: Reflections on the Craft of Programming',
    category: 'Software Craftsmanship',
    description: 'A fascinating look at how some of the best programmers in the world do their work.',
    buyUrl: 'https://www.amazon.com/Coders-Work-Reflections-Craft-Programming/dp/1430219483',
  },
  {
    id: 15,
    coverImage: '/assets/images/books/Pragmatic Thinking and Learning.jpg',
    title: 'Pragmatic Thinking and Learning',
    category: 'Software Craftsmanship',
    description: 'Software development happens in your head. Learn how to work with your wetware — your own brain.',
    buyUrl: 'https://pragprog.com/titles/ahptl/pragmatic-thinking-and-learning/',
  },
  {
    id: 16,
    coverImage: '/assets/images/books/Apprenticeship Patterns.jpg',
    title: 'Apprenticeship Patterns: Guidance for the Aspiring Software Craftsman',
    category: 'Software Craftsmanship',
    description: 'Are you doing all you can to further your career as a software developer? Being successful requires more than technical expertise.',
    buyUrl: 'https://www.amazon.com/Apprenticeship-Patterns-Guidance-Aspiring-Craftsman/dp/0596518382',
  },
]
