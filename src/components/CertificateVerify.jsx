import React, { useState } from 'react';
import styles from '../style';

const CertificateVerify = () => {
    const [certIdInput, setCertIdInput] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [certData, setCertData] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    // New GAS URL provided by the user
    const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyHlcmEOufh2oqh5LEvzkrPYZ9xHOC0yDeeyJA08U0Ym5scez-yqQ6uYqJiCK_1ZUW7/exec';

    const onVerify = async (e) => {
        if (e) e.preventDefault();

        const id = certIdInput.trim();
        if (!id) {
            setErrorMessage('Please enter a Certificate ID.');
            setStatus('error');
            return;

        }

        // Validation: User must enter only the ID (e.g. TECHIE1234)
        if (id.toLowerCase().endsWith('.pdf')) {
            setErrorMessage('Please enter the ID only (without .pdf)');
            setStatus('error');
            return;
        }

        setStatus('loading');
        setErrorMessage('');
        setCertData(null);

        try {
            // Robust parameter passing using encodeURIComponent
            const fetchUrl = `${GAS_WEB_APP_URL}?id=${encodeURIComponent(id)}`;

            const response = await fetch(fetchUrl, {
                method: 'GET',
                // mode: 'cors' is default but good to be explicit for GAS
                mode: 'cors',
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Verification Backend Response:', result);

            if (result.status === 'success') {
                const data = {
                    previewUrl: result.preview,
                    downloadUrl: result.download,
                    fileName: certIdInput.trim() + '.pdf'
                };
                setCertData(data);
                setStatus('success');
            } else {
                setErrorMessage(result.message || 'Certificate not found. Please check the ID.');
                setStatus('error');
            }
        } catch (error) {
            console.error('Core Verification Error:', error);
            setErrorMessage('Verification failed. Please check your connection or ensures the Drive folder is public.');
            setStatus('error');
        }
    };

    return (
        <div className="bg-primary w-full overflow-hidden min-h-screen relative">
            <div className={`${styles.paddingX} ${styles.flexCenter} pt-32 pb-20`}>
                <div className={`${styles.boxWidth} flex flex-col items-center relative z-[5]`}>
                    <h1 className={styles.heading2 + " text-center mb-10"}>
                        Certificate <span className="text-gradient">Verification</span>
                    </h1>

                    <div className="w-full max-w-[700px] glass-morphism p-8 rounded-2xl shadow-xl">
                        <p className={`${styles.paragraph} mb-8 text-center`}>
                            Validate your TechieHelp internship certificate by entering your Certificate ID below.
                        </p>

                        <form onSubmit={onVerify} className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="text"
                                placeholder="Enter Certificate ID (e.g. TECHIE1234)"
                                value={certIdInput}
                                onChange={(e) => setCertIdInput(e.target.value)}
                                className="flex-1 bg-black-gradient-2 text-white border border-gray-700 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-secondary font-poppins"
                                required
                            />
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className={`py-4 px-10 font-poppins font-semibold text-[18px] text-primary bg-blue-gradient rounded-xl transition-all ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 active:scale-95'}`}
                            >
                                {status === 'loading' ? 'Verifying...' : 'Verify'}
                            </button>
                        </form>

                        {status === 'error' && (
                            <div className="mt-6 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-500 text-center font-poppins" role="alert">
                                {errorMessage}
                            </div>
                        )}
                    </div>

                    {status === 'success' && certData && (
                        <div className="w-full max-w-[850px] mt-16 flex flex-col items-center animate-slide-top text-center">
                            <div className="mb-10">
                                <h2 className="text-white font-poppins font-extrabold text-[32px] sm:text-[40px] mb-2">
                                    <span className="text-gradient">Congratulations!</span> Certificate Verified
                                </h2>
                                <p className={`${styles.paragraph}`}>
                                    Your certificate has been successfully validated.
                                </p>
                            </div>

                            <div className="w-full bg-black-gradient-2 p-4 rounded-3xl shadow-2xl border border-gray-800 mb-10 overflow-hidden group">
                                <div className="relative w-full aspect-[1.414/1] rounded-2xl overflow-hidden bg-gray-900">
                                    <iframe
                                        src={certData.previewUrl}
                                        className="absolute inset-0 w-full h-full border-0"
                                        title="Certificate Preview"
                                    ></iframe>

                                    {/* Fallback Overlay if Iframe stays empty/blocked */}
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                        <p className="text-white font-poppins text-sm bg-black/60 px-4 py-2 rounded-full">
                                            Showing preview from Google Drive
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-4 flex justify-center">
                                    <a
                                        href={certData.previewUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-secondary hover:underline font-poppins text-sm"
                                    >
                                        Preview not loading? Click here to open in new tab.
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-6">
                                <a
                                    href={certData.downloadUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="py-5 px-12 font-poppins font-bold text-[20px] text-primary bg-blue-gradient rounded-2xl shadow-glow transition-all hover:-translate-y-1 active:translate-y-0 flex items-center gap-3"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a2 2 0 002 2h12a2 2 0 002-2v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Download Certificate
                                </a>

                                <div className="text-dimWhite font-poppins text-[14px]">
                                    <p>Certificate ID: <span className="text-white font-semibold">{certData.fileName?.replace('.pdf', '') || certIdInput.trim()}</span></p>
                                    <p className="mt-2 text-xs opacity-60">
                                        If download fails, please ensure you are logged into Google or the file is shared publicly.
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Background gradients for aesthetics */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient opacity-20 pointer-events-none" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40 opacity-10 pointer-events-none" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient opacity-20 pointer-events-none" />
        </div>
    );
};

export default CertificateVerify;
