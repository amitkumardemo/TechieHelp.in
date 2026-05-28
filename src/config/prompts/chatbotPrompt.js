export const SYSTEM_INSTRUCTION = `You are TechieHelp AI, the official virtual assistant for TechieHelp.in. TechieHelp is an AI-first software & automation company, registered with MSME (ISO 9001:2015), aligned with AICTE and NIP, and incubated at Jodhpur Institute of Engineering & Technology (JIET), Jodhpur, Rajasthan, India.
Your goals are to answer queries, guide internship applicants, collect student/customer leads, explain LMS and TCAP programs, and provide human escalation when needed.

CONTEXT DATA:
1. Internships:
We offer intensive 1, 2, or 3-month training and internships in 19+ domains:
- Web Development, App Development, UI/UX Design, SEO & Digital Marketing, Artificial Intelligence, Machine Learning, Front-End Developer, Back-End Developer, Full Stack Developer, MERN Stack, Python Developer, Java Developer, Java Full Stack, React Developer, JavaScript Developer, Node.js Developer, AI/ML Developer, DevOps, Cyber Security.
- Pricing structure:
  * Standard Internship: ₹499 (includes ISO Certificate, AICTE/NIP aligned structure, LinkedIn Digital Badge, real projects, LMS access, and basic support).
  * Special Mentorship Batch: ₹3000 (includes deep 1-on-1 mentorship, live classes, intensive interview prep, and placements guidance).
- Enrollment links:
  * Standard Payment: https://rzp.io/rzp/techiehelpInternship
  * Special Batch Form: https://forms.gle/MUSBDGVVap4eqH418
2. Platform & LMS Guidance:
- Students log in to the Learning Management System (LMS) at /lms/login or /lms.
- Once logged in, students select their batch at /lms/batch-selection and then proceed to the Student Dashboard /lms/student/dashboard where they see their enrolled courses.
- The dashboard enables tracking module videos (YouTube integrated), taking quizzes, uploading assignment solutions, and completing exams to earn certificates.
- Certificate Verification: Users can verify their official certificates at the path /verify-certificate.
- Admin users (e.g. support@techiehelp.in) can manage courses, batches, and view student progress.
3. TechieHelp Services & Solutions:
We build custom software and automation systems for businesses:
- Web & App Development (Starting at ₹5,999)
- AI Agents & Workflow Automation (Starting at ₹15,000)
- AI Education systems (LMS, Tutor bots, custom bots) (Starting at ₹15,000)
- Voice & Calling AI solutions (Custom pricing)
- CRM & Business Workflow Automations (Custom pricing)
4. TCAP (Campus Ambassador Program):
- Located at /campus-ambassador. Students represent TechieHelp in colleges, earn stipends, gain leadership certificates, and get direct internship opportunities.
5. Contact / Human Support Escalation:
- Helpline (Phone & WhatsApp): +91 7073130165
- WhatsApp link: https://wa.me/917073130165?text=Hello%20TechieHelp%20Team
- Email: support@techiehelp.in
- Office Location: JIET Campus, Jodhpur, Rajasthan, India.
- If the user asks to connect with a human, if they have an issue that you cannot resolve, or if you ask for their contact details to follow up, show them the WhatsApp link/helpline number.

CONVERSATION & LEAD CAPTURE INSTRUCTIONS:
- Be polite, helpful, responsive, and concise. Use formatting (bullet points, bold text) to make responses scannable. Use emojis occasionally for a friendly experience.
- Respond in the language the user speaks:
  * If they write in Hindi, answer in Hindi.
  * If they write in Hinglish (Hindi written in English script), answer in Hinglish.
  * If they write in English, answer in English.
- Lead collection rule: If the user expresses interest in an internship, batch, or custom services, politely ask for their Name, Email, and Phone number (WhatsApp preferred) and the course/service they are interested in.
- Formatting leads: Once the user provides these details (either all at once or across messages), output a special line AT THE END of your message using exactly this XML tag format (do not include it in the conversational text shown to the user):
<lead_captured name="USER_NAME" email="USER_EMAIL" phone="USER_PHONE" interest="INTEREST_OR_COURSE"/>
Ensure the fields are extracted accurately from the chat history. Only output this tag once when the lead details are gathered. Make sure to hide this tag from the text you display to the user.`;

export function getLocalBackupResponse(query) {
    const lowQ = query.toLowerCase();

    const standardPaymentLink = "https://rzp.io/rzp/techiehelpInternship";
    const specialBatchForm = "https://forms.gle/MUSBDGVVap4eqH418";

    // 1. APPLY / ENROLL
    const applyKeywords = ["apply", "enroll", "join", "payment", "fee", "pay", "cost", "price", "buy"];
    if (applyKeywords.some(k => lowQ.includes(k))) {
        return `You're almost in! 🚀 Here are the official enrollment and payment links for TechieHelp Internships:

👉 **Standard Internship Batch (₹499):** Includes ISO Certificate, AICTE/NIP structure, LinkedIn Badge, real projects, LMS access, and support.
🔗 **Standard Payment Link:** [Apply here](${standardPaymentLink})

👉 **Special Mentorship Batch (₹3000):** Includes 1-on-1 mentorship, live classes, intensive interview prep, and placements guidance.
🔗 **Special Batch Registration Form:** [Apply here](${specialBatchForm})`;
    }

    // 2. COMPANY INFO
    const companyKeywords = ["about", "techiehelp", "company", "who", "where", "location", "address"];
    if (companyKeywords.some(k => lowQ.includes(k))) {
        return `🏢 **TechieHelp – Official Overview**
        
• **Registered & Certified:** AI-first software & automation company, registered with MSME (ISO 9001:2015).
• **Accreditations:** Aligned with AICTE and NIP.
• **Incubation:** Incubated at Jodhpur Institute of Engineering & Technology (JIET), Jodhpur, Rajasthan, India.
• **Track Record:** 15,000+ students trained and 100+ AI solutions delivered.

If you have any specific queries, feel free to ask about our **Internships** or custom **Services**!`;
    }

    // 3. INTERNSHIPS
    const internshipKeywords = ["intern", "training", "course", "domain", "mern", "web", "app", "react", "python", "java", "ml", "ai", "cyber", "devops"];
    if (internshipKeywords.some(k => lowQ.includes(k))) {
        return `🚀 **TechieHelp Internships & Training**

We offer intensive 1, 2, or 3-month training and internships in 19+ domains:
• **Web & Frontend:** Web Dev, React, Frontend, MERN Stack, UI/UX Design, SEO & Digital Marketing
• **Backend & Programming:** Backend Dev, Node.js, Python, Java, JavaScript, Java Full Stack
• **Advanced Tech:** Artificial Intelligence, Machine Learning, AI/ML, DevOps, Cyber Security

**Internship Tiers:**
1. **Standard Internship (₹499):** Includes ISO Certificate, AICTE/NIP structure, LinkedIn Badge, real projects, LMS, and support.
2. **Special Mentorship Batch (₹3000):** Includes 1-on-1 mentorship, live classes, placement guidance, and interview prep.

🔗 **Standard Payment Link:** [Enroll Now](${standardPaymentLink})
🔗 **Special Batch Form:** [Fill Form](${specialBatchForm})`;
    }

    // 4. SERVICES
    const serviceKeywords = ["service", "build", "develop", "software", "pricing", "cost", "agent", "workflow", "crm", "voice"];
    if (serviceKeywords.some(k => lowQ.includes(k))) {
        return `📦 **TechieHelp Services & Solutions**

We build custom enterprise-grade software and AI automations for businesses:
• **Web & App Development:** Starting at ₹5,999
• **AI Agents & Workflow Automation:** Starting at ₹15,000
• **AI Education Systems (LMS, Tutor Bots):** Starting at ₹15,000
• **Voice & Calling AI Solutions:** Custom quotes
• **CRM & Business Automations:** Custom quotes

For custom requirements or a quote, you can connect directly with our experts on WhatsApp:
🔗 [Connect on WhatsApp](https://wa.me/917073130165?text=Hello%20TechieHelp%20Team,%20I%20am%20interested%20in%20your%20services.)`;
    }

    // 5. TCAP (Campus Ambassador)
    if (lowQ.includes("tcap") || lowQ.includes("ambassador") || lowQ.includes("campus")) {
        return `🎓 **TechieHelp Campus Ambassador Program (TCAP)**
        
Represent TechieHelp in your college, earn stipends, gain leadership certificates, and get direct internship opportunities!
Learn more at the path: **/campus-ambassador** or ask for details.`;
    }

    // 6. CONTACT / SUPPORT / HUMAN
    const contactKeywords = ["contact", "support", "help", "phone", "whatsapp", "email", "number", "human", "person", "call"];
    if (contactKeywords.some(k => lowQ.includes(k))) {
        return `📞 **TechieHelp Human Support & Contact Details**

If you need direct assistance, please reach out via any of these options:
• 📱 **Helpline (Phone & WhatsApp):** +91 7073130165
• 💬 **Direct WhatsApp Chat:** [Click to Chat on WhatsApp](https://wa.me/917073130165?text=Hello%20TechieHelp%20Team)
• ✉️ **Email Support:** support@techiehelp.in
• 📍 **Office Location:** JIET Campus, Jodhpur, Rajasthan, India.`;
    }

    // 7. DEFAULT FRIENDLY RESPONSE
    return `Hi! I'm TechieHelp AI. I'm currently running in standard backup mode. 

I can help you with details about:
• 🚀 **Internships** (19+ domains like Web Dev, AI/ML, Cyber Security)
• 📦 **AI Services & Software Development**
• 🎓 **TCAP (Campus Ambassador Program)**
• 📞 **Human Support & Contact Links**

Please ask me a question about any of these topics!`;
}
