import { NextResponse } from 'next/server';

const techiehelpContext = `
About TechieHelp:
- TechieHelp is an AI-first software and automation company incubated at Jodhpur Institute of Engineering & Technology (JIET), Jodhpur, Rajasthan.
- Registered with MSME and ISO 9001:2015 certified.
- Aligned with AICTE and National Internship Portal (NIP).
- Has trained over 15,000+ students and successfully delivered 100+ AI solutions.
- Founder & CEO: Amit Kumar.
- Contact Details: Phone: +91-7673825079 or +91-7073130165, Email: support@techiehelp.in, WhatsApp: +91-7073130165.
- Office/Location: Jodhpur Institute of Engineering & Technology, Jodhpur, Rajasthan, India.

Core Services Offered:
1. Web & App Development: Custom web platforms, SaaS development, mobile app development (starting from ₹5,999).
2. AI Agents & Automation: Custom AI agents for qualifications, customer service, operations (starting from ₹15,000).
3. AI Education: LMS platforms, AI tutor bots (starting from ₹15,000).
4. Voice & Calling AI: Custom calling voice bots that qualified leads (Custom Quote).
5. Workflow & CRM Automation: API integrations, Zapier, n8n configurations (Custom Quote).

Training & Internship Programs:
- We offer intensive training & internship programs in 19+ domains.
- Core Domains:
  * Web Development (HTML, CSS, JavaScript, React)
  * App Development (Flutter, React Native, Firebase)
  * UI/UX Design (Figma, Adobe XD, User Research)
  * SEO & Digital Marketing (Google Analytics, SEMrush, Keywords)
  * Artificial Intelligence (Python, TensorFlow, Neural Networks)
  * Machine Learning (Python, Scikit-learn, Regression)
  * Front-End Developer (React, Tailwind, Redux)
  * Back-End Developer (Node.js, MongoDB, Express)
  * Full Stack Developer (MERN or Java Full Stack)
  * MERN Stack (MongoDB, Express, React, Node)
  * Python Developer (Django, Flask, Automation)
  * Java Developer (Spring Boot, Maven, SQL)
  * Java Full Stack (Spring Boot + React)
  * React Developer (Hooks, Context API, Next.js)
  * JavaScript Developer (ES6+, Async, DOM)
  * Node.js Developer (Express, Middleware, Auth)
  * AI/ML Developer (NLP, Computer Vision, Data Sets)
  * DevOps (Docker, Kubernetes, CI/CD)
  * Cyber Security (Ethical Hacking, Linux, Networks)
- Internship Duration: 1 Month, 2 Months, 3 Months, or Custom Duration.
- Pricing Packages:
  * Standard Internship: ₹499 (Includes ISO Certification, LMS, Mentor Support, LinkedIn Badge, Real-world Projects).
  * Special Mentorship Batch: ₹3,000 (Includes live classes, 1-on-1 mentorship, placement referrals, welcome kits).
- Enrollment Links:
  * Standard Payment Link: https://rzp.io/rzp/techiehelpInternship
  * Special Batch Registration Form: https://forms.gle/MUSBDGVVap4eqH418
  * Campus Ambassador Program Form (TCAP): https://forms.gle/1Ui7sxWq3AqwmmZe8
  * Internship Syllabus / Drive Link: https://drive.google.com/file/d/1KMG5JObcneMBHqcKw_JZmCC2l9lEI3s6/view?usp=drive_link

Platform Navigation:
- Home Page: "/" (Overview, business solutions, testimonials, clients)
- About Us Page: "/about-us" (Mission, vision, details about the team, founder Amit Kumar)
- Services Page: "/services" (Overview of all AI and software services)
- Training & Internships: "/careers/training-internships" (Detailed internship pricing and domain selector)
- Career & Job Board: "/careers/jobs" (Open listings for developer jobs)
- Verify Certificate Page: "/verify-certificate" (To verify completion certificate credentials)
- Campus Ambassador Program (TCAP): "/campus-ambassador" (Earn commissions, commissions starting from ₹100 to ₹700 per referral)
- Policy & Terms: "/policy" and "/terms"

Frequently Asked Questions (FAQs):
Q: What credentials will I get on internship completion?
A: You will get an ISO-verified Completion Certificate, a Letter of Recommendation (LOR) for top performers, a LinkedIn digital badge, and public records verification on the TechieHelp website.
Q: Is there any registration fee?
A: Yes, standard batch is ₹499 and the Special Mentorship Batch is ₹3000. TCAP (Ambassador Program) is 100% free to join.
Q: How do we get support during the internship?
A: We provide LMS access, recorded resources, and 24/7 Slack/WhatsApp mentor support to resolve doubts.
`;

export async function POST(request: Request) {
  try {
    const { messages } = await request.json();
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ error: 'Gemini API key is not configured' }, { status: 500 });
    }

    const systemInstruction = `You are a helpful, professional, and friendly AI chatbot for TechieHelp (https://techiehelp.in).

Here is the exact information about TechieHelp:
${techiehelpContext}

CRITICAL RULES:
1. You must ONLY answer questions based on the TechieHelp website information provided above. Do NOT use any external knowledge.
2. Help users with internships, courses, services, pricing, platform navigation, and FAQs.
3. If a question is not about TechieHelp or you do not know the answer based on the provided information, you MUST reply exactly: "Please contact TechieHelp support for more information."
4. Keep responses concise, friendly, and structured using markdown where helpful.`;

    const recentMessages = messages.slice(-6);
    const contents = recentMessages.map((m: any) => ({
      role: m.sender === 'user' ? 'user' : 'model',
      parts: [{ text: m.text }]
    }));

    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents,
        systemInstruction: {
          parts: [{ text: systemInstruction }]
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Gemini API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const botText = data.candidates?.[0]?.content?.parts?.[0]?.text || "Please contact TechieHelp support for more information.";
    
    return NextResponse.json({ text: botText });
  } catch (error: any) {
    console.error('Chatbot API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error', details: error.message }, { status: 500 });
  }
}
