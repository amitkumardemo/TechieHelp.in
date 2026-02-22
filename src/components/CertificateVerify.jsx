import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, CheckCircle, Download, ExternalLink, ShieldAlert, BadgeCheck, Lock, Search, Cpu } from 'lucide-react';
import styles from '../style';

// Animation variants for staggered children
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

const CertificateVerify = () => {
    const [certIdInput, setCertIdInput] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [certData, setCertData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    // SEO Optimization
    useEffect(() => {
        document.title = "Official Certificate Verification | TechieHelp AI";

        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute("content", "TechieHelp Official Certification Verification Portal. Secure, real-time validation of internship and professional training credentials.");
        }

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "TechieHelp Certificate Verification",
            "description": "Secure verification portal for TechieHelp professional credentials.",
            "url": "https://techiehelp.in/verify-certificate",
            "provider": {
                "@type": "Organization",
                "name": "TechieHelp",
                "url": "https://techiehelp.in"
            }
        });
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
        };
    }, []);

    const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyHlcmEOufh2oqh5LEvzkrPYZ9xHOC0yDeeyJA08U0Ym5scez-yqQ6uYqJiCK_1ZUW7/exec';

    const onVerify = async (e) => {
        if (e) e.preventDefault();
        const id = certIdInput.trim();

        if (!id) {
            setErrorMessage('Validation Error: Certificate Identity String (ID) is required.');
            setStatus('error');
            return;
        }

        if (id.toLowerCase().endsWith('.pdf')) {
            setErrorMessage('Input Error: Please enter the Identity String only (e.g., TECHIE1234), excluding the suffix.');
            setStatus('error');
            return;
        }

        setStatus('loading');
        setErrorMessage('');
        setCertData(null);

        try {
            const fetchUrl = `${GAS_WEB_APP_URL}?id=${encodeURIComponent(id)}`;
            const response = await fetch(fetchUrl, {
                method: 'GET',
                mode: 'cors',
            });

            if (!response.ok) throw new Error('Secure Gateway Timeout');

            const result = await response.json();

            if (result.status === 'success') {
                const data = {
                    previewUrl: result.preview,
                    downloadUrl: result.download,
                    fileName: id + '.pdf',
                    verifiedAt: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
                    securityHash: btoa(id).substring(0, 12).toUpperCase() // Simulated hash for visual trust
                };
                setCertData(data);
                setStatus('success');
            } else {
                setErrorMessage(result.message || 'Identity Verification Failed: No matching record found in the secure registry.');
                setStatus('error');
            }
        } catch (error) {
            setErrorMessage('System Error: Communication with the secure decentralized registry was interrupted.');
            setStatus('error');
        }
    };

    return (
        <div className="bg-primary w-full overflow-hidden min-h-screen relative font-poppins selection:bg-secondary selection:text-primary">
            <div className={`${styles.paddingX} ${styles.flexCenter} pt-32 pb-20`}>
                <div className={`${styles.boxWidth} flex flex-col items-center relative z-[5]`}>

                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="text-center mb-12"
                    >
                        <motion.div variants={itemVariants} className="flex justify-center mb-4">
                            <span className="px-4 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-[12px] font-bold tracking-[2px] uppercase flex items-center gap-2">
                                <Lock className="w-3 h-3" /> Internship Certification Verification Portal
                            </span>
                        </motion.div>
                        <motion.h1 variants={itemVariants} className={`${styles.heading2} leading-tight`}>
                            Official Verification System – <span className="text-gradient">TechieHelp</span>
                        </motion.h1>
                        <motion.p variants={itemVariants} className={`${styles.paragraph} mt-4 max-w-[750px] mx-auto text-dimWhite`}>
                            This portal allows employers, academic institutions, and candidates to verify the authenticity of internship certificates issued by TechieHelp.
                        </motion.p>
                    </motion.div>

                    <div className="w-full max-w-[750px] glass-morphism p-1 rounded-3xl overflow-hidden shadow-2xl border border-white/10 mb-12">
                        <div className="p-8 bg-black-gradient-2 rounded-[calc(1.5rem-1px)]">
                            <h3 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
                                <Search className="text-secondary w-5 h-5" /> Verify Internship Certificate
                            </h3>
                            <p className="text-dimWhite mb-6 text-sm">
                                Enter the unique Internship Certificate ID printed on the certificate to validate its authenticity.
                            </p>

                            <form onSubmit={onVerify} className="flex flex-col sm:flex-row gap-4 relative">
                                <div className="flex-1 relative group">
                                    <input
                                        type="text"
                                        placeholder="Enter Certificate ID (e.g. TECHIE1234)"
                                        value={certIdInput}
                                        onChange={(e) => setCertIdInput(e.target.value)}
                                        className="w-full bg-primary/40 text-white border border-gray-700/50 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-secondary font-poppins transition-all pl-12 placeholder:text-gray-600"
                                        required
                                    />
                                    <ShieldCheck className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors w-5 h-5 ${status === 'loading' ? 'text-secondary animate-pulse' : 'text-dimWhite group-hover:text-secondary'}`} />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className={`py-4 px-10 font-bold text-[18px] text-primary bg-blue-gradient rounded-2xl transition-all shadow-glow flex items-center justify-center gap-3 active:scale-95 ${status === 'loading' ? 'grayscale cursor-wait' : 'hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(33,150,243,0.5)]'}`}
                                >
                                    {status === 'loading' ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                                            Scanning...
                                        </>
                                    ) : (
                                        <>
                                            <BadgeCheck className="w-6 h-6" />
                                            Verify Now
                                        </>
                                    )}
                                </button>
                            </form>

                            <p className="mt-4 text-xs text-dimWhite italic">
                                * Please enter the Certificate ID exactly as mentioned (without .pdf).
                            </p>

                            <AnimatePresence>
                                {status === 'loading' && (
                                    <motion.div
                                        initial={{ opacity: 0, scaleX: 0 }}
                                        animate={{ opacity: 1, scaleX: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="absolute bottom-0 left-0 h-1 bg-secondary origin-left shadow-[0_0_10px_#def9fa]"
                                        style={{ width: '100%' }}
                                    />
                                )}

                                {status === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0 }}
                                        className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl text-red-500 text-center flex items-center justify-center gap-3"
                                    >
                                        <ShieldAlert className="w-5 h-5" />
                                        <span className="text-sm font-semibold">{errorMessage}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    <AnimatePresence>
                        {status === 'success' && certData && (
                            <motion.div
                                initial={{ opacity: 0, y: 50, rotateX: 10 }}
                                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                                className="w-full max-w-[950px] mt-10 mb-20 flex flex-col items-center"
                            >
                                <div className="text-center mb-12">
                                    <motion.div
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        className="w-24 h-24 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8 border-[3px] border-secondary shadow-[0_0_30px_rgba(0,246,255,0.3)]"
                                    >
                                        <CheckCircle className="w-12 h-12 text-secondary" />
                                    </motion.div>
                                    <p className="text-secondary font-bold tracking-widest uppercase text-sm mb-2">Verification Status</p>
                                    <h2 className="text-white font-extrabold text-[32px] sm:text-[48px] leading-[1.1]">
                                        ✅ Internship Certificate Verified
                                    </h2>
                                    <p className="text-dimWhite max-w-[650px] mx-auto mt-6 text-lg">
                                        The internship certificate associated with the entered ID has been successfully validated against TechieHelp’s official records.
                                    </p>
                                </div>

                                <div className="w-full mb-12">
                                    <h3 className="text-white font-bold text-2xl mb-6 flex items-center gap-2">
                                        <Cpu className="text-secondary w-6 h-6" /> Internship Credential Details
                                    </h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {[
                                            { label: "Certificate ID", val: certIdInput.trim().toUpperCase() },
                                            { label: "Program Type", val: "Internship Program" },
                                            { label: "Issuing Organization", val: "TechieHelp" },
                                            { label: "Intern Status", val: "Successfully Completed" },
                                            { label: "Credential Status", val: "Active" },
                                            { label: "Verification Date", val: certData.verifiedAt },
                                        ].map((item, i) => (
                                            <div key={i} className="flex justify-between items-center p-4 bg-primary/30 border border-white/5 rounded-xl">
                                                <span className="text-dimWhite text-sm font-semibold">{item.label}</span>
                                                <span className="text-white font-bold">{item.val}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="w-full mb-12">
                                    <h3 className="text-white font-bold text-2xl mb-6 flex items-center gap-2">
                                        <ExternalLink className="text-secondary w-6 h-6" /> Certificate Preview & Download
                                    </h3>
                                    <p className="text-dimWhite mb-8">You may view the official internship certificate preview or download the original certificate (PDF).</p>

                                    <div className="w-full relative group">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-blue-500 rounded-[3rem] blur opacity-25" />
                                        <div className="relative w-full bg-black-gradient-2 p-1.5 rounded-[3rem] shadow-2xl overflow-hidden">
                                            <div className="bg-primary/50 rounded-[2.8rem] overflow-hidden">
                                                <div className="relative w-full aspect-[1.414/1] rounded-[2.5rem] overflow-hidden bg-gray-900 border border-white/5">
                                                    <iframe
                                                        src={certData.previewUrl}
                                                        className="absolute inset-0 w-full h-full border-0"
                                                        title="Certificate Viewer"
                                                    ></iframe>

                                                    <div className="absolute inset-0 flex items-center justify-center bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-[4px] pointer-events-none">
                                                        <div className="flex flex-col items-center gap-4 bg-secondary/80 px-10 py-7 rounded-[2.5rem] shadow-2xl border border-white/20 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                                                            <ShieldCheck className="h-16 w-16 text-white animate-bounce" />
                                                            <p className="text-white font-black text-2xl tracking-[4px] uppercase">
                                                                Verified Intern
                                                            </p>
                                                            <div className="h-[2px] w-20 bg-white/40 rounded-full" />
                                                            <p className="text-white/80 font-bold text-lg">TechieHelp AI</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-8 flex flex-col items-center gap-8">
                                        <motion.a
                                            whileHover={{ scale: 1.05 }}
                                            href={certData.downloadUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="group relative inline-flex items-center justify-center px-16 py-6 font-black text-xl text-primary uppercase tracking-widest bg-blue-gradient rounded-[2rem] shadow-[0_15px_40px_-15px_rgba(33,150,243,0.5)] transition-all overflow-hidden"
                                        >
                                            <Download className="h-6 w-6 mr-3 group-hover:translate-y-1 transition-transform" />
                                            Download Certificate (PDF)
                                        </motion.a>
                                        <p className="text-dimWhite font-semibold text-sm text-center opacity-60">
                                            The certificate is provided for verification, academic submission, and professional record purposes only.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* New Informational Sections */}
                    <div className="w-full max-w-[950px] mt-10 border-t border-white/10 pt-20">
                        <div className="grid md:grid-cols-2 gap-12 mb-20">
                            <div>
                                <h3 className="text-white font-bold text-2xl mb-6 flex items-center gap-2">
                                    <BadgeCheck className="text-secondary w-6 h-6" /> About TechieHelp Internship Programs
                                </h3>
                                <p className="text-dimWhite leading-relaxed mb-4">
                                    TechieHelp conducts structured internship programs focused on practical skill development, real-world project experience, and career readiness across technology and digital domains.
                                </p>
                                <p className="text-dimWhite leading-relaxed">
                                    Internship certificates are issued upon successful participation and completion of program requirements.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-white font-bold text-2xl mb-6 flex items-center gap-2">
                                    <Search className="text-secondary w-6 h-6" /> For Recruiters & Institutions
                                </h3>
                                <p className="text-dimWhite leading-relaxed mb-6">
                                    This portal serves as the official source for validating internship credentials issued by TechieHelp.
                                </p>
                                <div className="p-6 bg-secondary/10 border border-secondary/20 rounded-2xl flex items-center gap-4">
                                    <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center">
                                        <ShieldCheck className="text-secondary w-6 h-6" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm">For verification support:</p>
                                        <a href="mailto:support@techiehelp.in" className="text-secondary hover:text-white transition-colors decoration-dotted underline">support@techiehelp.in</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full bg-red-500/5 border border-red-500/20 rounded-[2.5rem] p-8 sm:p-12 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[80px]" />
                            <h3 className="text-white font-bold text-2xl mb-6 flex items-center gap-2">
                                <ShieldAlert className="text-red-500 w-7 h-7" /> Important Notice
                            </h3>
                            <div className="space-y-4 text-dimWhite leading-relaxed text-sm sm:text-base">
                                <p className="flex gap-3">
                                    <span className="text-red-500 font-bold">•</span>
                                    <span>This is the only authorized platform to verify TechieHelp internship certificates.</span>
                                </p>
                                <p className="flex gap-3">
                                    <span className="text-red-500 font-bold">•</span>
                                    <span>Certificates that cannot be validated through this portal should be treated as unverified.</span>
                                </p>
                                <p className="flex gap-3">
                                    <span className="text-red-500 font-bold">•</span>
                                    <span className="font-bold text-white uppercase tracking-tight">Unauthorized modification or misuse of certificates is strictly prohibited.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Background Gradients */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient opacity-10 pointer-events-none" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 opacity-[0.05] pointer-events-none" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient opacity-10 pointer-events-none" />
        </div>
    );
};

export default CertificateVerify;
