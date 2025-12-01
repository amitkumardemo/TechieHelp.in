import React, { useState, useRef } from 'react';
import { db } from '../../firebase';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { useAuth } from '../../contexts/AuthContext';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Award, Download, Share2 } from 'lucide-react';

const CertificateGenerator = ({ courseId, courseTitle, onCertificateGenerated }) => {
  const { user, userProfile } = useAuth();
  const certificateRef = useRef(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [certificateUrl, setCertificateUrl] = useState(null);
  const [certificateId, setCertificateId] = useState(null);

  const generateCertificate = async () => {
    if (!user || !courseId) return;

    setIsGenerating(true);
    try {
      // Generate certificate data
      const certificateData = {
        userId: user.uid,
        userName: userProfile?.displayName || user.displayName || 'Student',
        courseId,
        courseTitle,
        completionDate: new Date(),
        certificateId: `CERT-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`
      };

      // Save to Firestore
      const certRef = doc(db, 'certificates', certificateData.certificateId);
      await setDoc(certRef, certificateData);

      // Update user progress
      const progressRef = doc(db, 'progress', `${user.uid}_${courseId}`);
      await updateDoc(progressRef, {
        certificateGenerated: true,
        certificateId: certificateData.certificateId
      });

      setCertificateId(certificateData.certificateId);

      // Generate PDF
      const canvas = await html2canvas(certificateRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      });

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('landscape', 'mm', 'a4');

      const imgWidth = 297; // A4 landscape width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      const pdfBlob = pdf.output('blob');
      const pdfUrl = URL.createObjectURL(pdfBlob);

      setCertificateUrl(pdfUrl);

      onCertificateGenerated && onCertificateGenerated(pdfUrl, certificateData.certificateId);
    } catch (error) {
      console.error('Error generating certificate:', error);
    } finally {
      setIsGenerating(false);
    }
  };

  const downloadCertificate = () => {
    if (certificateUrl) {
      const link = document.createElement('a');
      link.href = certificateUrl;
      link.download = `${courseTitle.replace(/\s+/g, '_')}_Certificate.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const shareCertificate = () => {
    if (navigator.share && certificateUrl) {
      navigator.share({
        title: 'Course Completion Certificate',
        text: `I completed the ${courseTitle} course!`,
        url: certificateUrl
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <Award className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Congratulations!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          You have successfully completed the {courseTitle} course.
        </p>

        {!certificateUrl ? (
          <button
            onClick={generateCertificate}
            disabled={isGenerating}
            className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium flex items-center space-x-2 mx-auto disabled:opacity-50"
          >
            <Award className="h-5 w-5" />
            <span>{isGenerating ? 'Generating Certificate...' : 'Generate Certificate'}</span>
          </button>
        ) : (
          <div className="flex justify-center space-x-4">
            <button
              onClick={downloadCertificate}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
            >
              <Download className="h-4 w-4" />
              <span>Download</span>
            </button>
            {navigator.share && (
              <button
                onClick={shareCertificate}
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
              >
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </button>
            )}
          </div>
        )}
      </div>

      {/* Certificate Preview */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg">
        <div
          ref={certificateRef}
          className="certificate-preview bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-800 p-12 rounded-lg border-4 border-yellow-400"
          style={{ minHeight: '400px' }}
        >
          <div className="text-center">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                Certificate of Completion
              </h1>
              <div className="w-24 h-1 bg-yellow-400 mx-auto"></div>
            </div>

            <div className="mb-8">
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">This is to certify that</p>
              <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                {userProfile?.displayName || user?.displayName || 'Student Name'}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">has successfully completed the course</p>
              <h3 className="text-2xl font-semibold text-purple-600 dark:text-purple-400 mb-6">
                {courseTitle}
              </h3>
            </div>

            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">Date of Completion</p>
                <p className="font-semibold text-gray-800 dark:text-white">
                  {new Date().toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              {certificateId && (
                <div className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400">Certificate ID</p>
                  <p className="font-semibold text-gray-800 dark:text-white text-sm">
                    {certificateId}
                  </p>
                </div>
              )}
            </div>

            <div className="flex justify-center space-x-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">TechieHelp LMS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateGenerator;
