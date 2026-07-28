import {
  Activity,
  BadgeCheck,
  BookOpen,
  BriefcaseBusiness,
  Code2,
  Database,
  FileBadge,
  GitBranch,
  GraduationCap,
  KeyRound,
  Layers3,
  Mail,
  NotebookPen,
  ServerCog,
  Terminal,
  Trophy,
  Workflow
} from "lucide-react";

export const navItems = [
  { id: "opening", label: "Opening", icon: NotebookPen },
  { id: "about", label: "About", icon: BookOpen },
  { id: "skills", label: "Skills", icon: Terminal },
  { id: "projects", label: "Projects", icon: Layers3 },
  { id: "system-design", label: "System Design", icon: Workflow },
  { id: "leetcode", label: "LeetCode", icon: Code2 },
  { id: "blog", label: "Blog", icon: NotebookPen },
  { id: "timeline", label: "Timeline", icon: GitBranch },
  { id: "certificates", label: "Certificates", icon: FileBadge },
  { id: "contact", label: "Contact", icon: Mail }
];

export const aboutNotes = [
  {
    title: "Who I am",
    body: "A Computer Science undergraduate focused on backend engineering, clean API design, authentication systems, and maintainable server-side applications."
  },
  {
    title: "What I enjoy building",
    body: "REST APIs, database-backed products, background job flows, auth systems, dashboards, and tools that make everyday workflows more reliable."
  },
  {
    title: "Current Goals",
    body: "Deepen Django REST Framework patterns, improve deployment confidence, and document project architecture in a way that makes systems easy to understand."
  },
  {
    title: "Career Goals",
    body: "Become a backend engineer who can own product-grade services from schema design to observability, performance, and scale."
  },
  {
    title: "Tech Philosophy",
    body: "Write the smallest useful abstraction, test behavior that matters, make failure modes explicit, and leave notes for the next engineer."
  }
];

export const skillGroups = [
  {
    title: "Backend",
    icon: ServerCog,
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "MySQL",
      "PostgreSQL",
      "Redis",
      "Celery",
      "Docker",
      "Git",
      "GitHub Actions",
      "AWS",
      "REST APIs",
      "Authentication",
      "JWT",
      "OAuth",
      "Testing",
      "Pytest"
    ]
  },
  {
    title: "Frontend",
    icon: Layers3,
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap"]
  },
  {
    title: "Tools",
    icon: Terminal,
    skills: ["Linux", "VS Code", "GitHub", "Postman"]
  }
];

export const projects = [
  {
    title: "Blogify API",
    problem: "Blog platforms need clean content APIs with authorship, permissions, comments, and predictable pagination.",
    solution: "A DRF service with token auth, role-based actions, optimized querysets, and documented endpoints for posts, tags, and comments.",
    stack: ["Python", "Django", "DRF", "PostgreSQL", "JWT", "Pytest"],
    features: ["CRUD posts", "Nested comments", "Tag filters", "Pagination", "Author permissions"],
    challenges: "Avoiding N+1 queries while keeping serializers readable.",
    lessons: "Query planning and serializer boundaries matter as much as endpoint naming.",
    github: "https://github.com/",
    demo: "https://example.com",
    accent: "bg-blue-600"
  },
  {
    title: "Hospital Management System",
    problem: "Hospitals need reliable appointment, patient, doctor, and billing workflows with secure access boundaries.",
    solution: "A modular backend with patient records, schedule management, role-specific dashboards, and normalized relational models.",
    stack: ["Django", "MySQL", "Bootstrap", "Auth", "Admin"],
    features: ["Appointments", "Doctor schedules", "Patient records", "Billing notes", "Admin reports"],
    challenges: "Modeling real-world constraints without making forms painful to use.",
    lessons: "Domain vocabulary should be visible in models, routes, and admin screens.",
    github: "https://github.com/",
    demo: "https://example.com",
    accent: "bg-slate-900"
  },
  {
    title: "Real-Time Chat Application",
    problem: "Messaging needs low-latency delivery, consistent rooms, online presence, and history without duplicating messages.",
    solution: "A WebSocket-driven chat service with room membership, message persistence, presence updates, and async event handling.",
    stack: ["Django Channels", "Redis", "WebSockets", "PostgreSQL"],
    features: ["Rooms", "Presence", "Message history", "Typing signals", "Auth gates"],
    challenges: "Keeping socket state and database state in sync.",
    lessons: "Realtime systems reward clear event contracts and small payloads.",
    github: "https://github.com/",
    demo: "https://example.com",
    accent: "bg-cyan-700"
  },
  {
    title: "URL Shortener",
    problem: "Short links need collision-safe codes, redirects, analytics, expiration, and abuse-resistant validation.",
    solution: "A compact API that creates short codes, records click metadata, and supports custom aliases with uniqueness checks.",
    stack: ["Python", "Django", "Redis", "PostgreSQL", "Docker"],
    features: ["Short codes", "Redirect analytics", "Custom aliases", "Expiry", "Rate limits"],
    challenges: "Designing identifiers that are short, unique, and easy to debug.",
    lessons: "Tiny products still need careful edge-case handling.",
    github: "https://github.com/",
    demo: "https://example.com",
    accent: "bg-indigo-700"
  },
  {
    title: "Notes App",
    problem: "Students need fast capture, tagging, search, and safe sync for learning notes.",
    solution: "A notes backend with ownership-aware APIs, full-text-like filtering, tags, pinned notes, and archive flows.",
    stack: ["DRF", "JWT", "SQLite", "PostgreSQL", "Pytest"],
    features: ["Tags", "Search", "Pins", "Archive", "Private notes"],
    challenges: "Making filters flexible without creating brittle query code.",
    lessons: "Good defaults make simple apps feel polished.",
    github: "https://github.com/",
    demo: "https://example.com",
    accent: "bg-emerald-700"
  },
  {
    title: "Inventory Management API",
    problem: "Inventory systems need accurate stock movement, auditability, and clean reporting under frequent updates.",
    solution: "A backend API for products, suppliers, stock transactions, reorder alerts, and activity logs.",
    stack: ["Django", "DRF", "PostgreSQL", "Celery", "Redis"],
    features: ["Stock ledger", "Suppliers", "Reorder alerts", "CSV export", "Audit logs"],
    challenges: "Preventing stock counts from drifting under concurrent updates.",
    lessons: "Representing movement history beats overwriting totals blindly.",
    github: "https://github.com/",
    demo: "https://example.com",
    accent: "bg-stone-900"
  },
  {
    title: "Authentication System",
    problem: "Apps repeatedly need secure registration, login, password reset, token rotation, and provider-based sign-in.",
    solution: "A reusable auth service with JWT, OAuth-ready models, email verification, permissions, and test coverage.",
    stack: ["Python", "DRF", "JWT", "OAuth", "Pytest", "Docker"],
    features: ["JWT auth", "Refresh rotation", "Email verification", "Password reset", "OAuth foundation"],
    challenges: "Balancing security controls with a simple developer experience.",
    lessons: "Auth code deserves boring clarity, explicit states, and aggressive tests.",
    github: "https://github.com/",
    demo: "https://example.com",
    accent: "bg-blue-800"
  }
];

export const systemDesignNotes = [
  { title: "API Architecture", icon: ServerCog, body: "Resource-oriented endpoints, versioned routes, thin views, focused serializers, and clear permission classes." },
  { title: "Database Design", icon: Database, body: "Normalized schemas first, indexes on access patterns, explicit constraints, and migrations treated as product history." },
  { title: "Authentication Flow", icon: KeyRound, body: "Registration, verification, login, refresh rotation, permission checks, and logout invalidation documented as a trace." },
  { title: "Caching", icon: Activity, body: "Redis for hot reads, rate limits, short-lived computed responses, and background task coordination." },
  { title: "Deployment Pipeline", icon: Workflow, body: "Lint, test, build, migrate, deploy, smoke-check, and rollback notes with GitHub Actions as the automation spine." },
  { title: "Background Jobs", icon: BriefcaseBusiness, body: "Celery queues for email, reports, imports, reminders, and scheduled cleanup tasks." },
  { title: "Scalability Notes", icon: GitBranch, body: "Measure first, split reads and writes carefully, add queues before pressure peaks, and keep observability close." }
];

export const leetcodeStats = [
  { label: "Problems Solved", value: "280+", note: "DSA practice across arrays, graphs, DP, trees, and SQL." },
  { label: "Contest Rating", value: "Active", note: "Focused on consistency and post-contest editorials." },
  { label: "Favorite Pattern", value: "Graphs", note: "BFS, DFS, topological sorting, and shortest paths." }
];

export const favoriteProblems = ["LRU Cache", "Course Schedule", "Number of Islands", "Longest Substring Without Repeating Characters", "Coin Change"];
export const algorithms = ["Sliding Window", "Binary Search", "Two Pointers", "BFS / DFS", "Dynamic Programming", "Union Find"];

export const blogEntries = [
  { topic: "Django", title: "How I structure DRF serializers when projects grow", read: "5 min" },
  { topic: "Backend", title: "A checklist for designing stable REST APIs", read: "6 min" },
  { topic: "Python", title: "Small Python habits that make code easier to review", read: "4 min" },
  { topic: "System Design", title: "Caching notes from building API-heavy projects", read: "7 min" },
  { topic: "Learning Notes", title: "What competitive programming taught me about debugging", read: "3 min" }
];

export const timeline = [
  { label: "Education", icon: GraduationCap, body: "Computer Science undergraduate building a strong backend and algorithms foundation." },
  { label: "Projects", icon: Layers3, body: "Built API-first applications across content, healthcare, inventory, notes, auth, and realtime systems." },
  { label: "Achievements", icon: Trophy, body: "Consistent problem solving, project documentation, and backend learning milestones." },
  { label: "Hackathons", icon: Code2, body: "Interested in fast prototyping where backend clarity helps teams ship reliable demos." },
  { label: "Internships", icon: BriefcaseBusiness, body: "Seeking backend internships where Python, Django, APIs, and systems thinking are useful from day one." },
  { label: "Future Goals", icon: BadgeCheck, body: "Own scalable services, contribute to high-quality engineering teams, and keep a visible notebook of what I learn." }
];

export const certificates = [
  { title: "Python Programming", status: "PDF placeholder", file: "/certificates/python-programming.pdf" },
  { title: "Django Backend Development", status: "PDF placeholder", file: "/certificates/django-backend.pdf" },
  { title: "Database Fundamentals", status: "PDF placeholder", file: "/certificates/database-fundamentals.pdf" }
];
