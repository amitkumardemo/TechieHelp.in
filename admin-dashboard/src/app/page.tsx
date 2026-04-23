"use client";
import React, { useEffect, useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { TopNavbar } from "@/components/TopNavbar";
import { StudentTable } from "@/components/StudentTable";
import { FileText, Send, Mail, Award, Search, Menu } from "lucide-react";

export interface Student {
  ID: string;
  Name: string;
  Email: string;
  Phone: string;
  College: string;
  Course: string;
  Year: string;
  Role: string;
  Batch: string;
  Status: string;
  LinkedIn?: string;
  GitHub?: string;
  Resume?: string;
  Timestamp?: string;
  JoinedSocials?: string;
  AcceptedTerms?: string;
  "Offer Letter Sent"?: string;
  "Certificate Sent"?: string;
}

export default function Dashboard() {
  const [students, setStudents] = useState<Student[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterBatch, setFilterBatch] = useState("All");
  const [filterStatus, setFilterStatus] = useState("All");
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [alert, setAlert] = useState<{message: string, type: 'success'|'error'} | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await fetch("https://opensheet.elk.sh/1V2VmQ3GGiYnFC81kiQrjVY4MQr3VdHQxntW5BBbEoek/1");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        // Map exactly based on form entries while preserving fallbacks
        const normalizedData = data.map((d: any, index: number) => ({
          ID: d.ID || d.id || `${index}`,
          Name: d["Full Name"] || d.Name || d.name || "",
          Email: d["Email Address"] || d.Email || d.email || "",
          Phone: d["Phone Number (WhatsApp Preferred)"] || d.Phone || "",
          College: d["College Name"] || d.College || "",
          Course: d["Course / Branch"] || d.Course || d.course || "",
          Year: d["Year of Study"] || d.Year || "",
          Role: d["Preferred Role for Internship"] || d.Role || "",
          Batch: d.Batch || d.batch || "Pending",
          Status: d.Status || d.status || "Applied",
          LinkedIn: d["LinkedIn Profile URL"] || "",
          GitHub: d["GitHub Profile URL"] || "",
          Resume: d["Upload Your Resume"] || "",
          Timestamp: d["Timestamp"] || d.timestamp || d["Timestamp "] || "",
          JoinedSocials: d["Joined our Whatsapp and LinkedIn"] || "",
          AcceptedTerms: d["I have understood the internship details and I hereby acknowledge and accept the terms and conditions of Internship program"] || ""
        }));
        setStudents(normalizedData);
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };
    fetchStudents();
  }, []);

  const showAlert = (message: string, type: 'success'|'error' = 'success') => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 3500);
  };

  const filteredStudents = students.filter(s => {
    if (filterBatch !== "All" && s.Batch !== filterBatch) return false;
    if (filterStatus !== "All" && s.Status !== filterStatus) return false;
    if (searchTerm && !s.Name.toLowerCase().includes(searchTerm.toLowerCase()) && !s.Email.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

  const handleBulkOffer = () => {
    if (selectedIds.size === 0) return;
    showAlert(`Generated & sent offer letters to ${selectedIds.size} students`);
    setSelectedIds(new Set());
  };

  const handleBulkCertificate = () => {
    if (selectedIds.size === 0) return;
    showAlert(`Generated & sent certificates to ${selectedIds.size} students`);
    setSelectedIds(new Set());
  };

  const batches = ["All", ...Array.from(new Set(students.map(s => s.Batch).filter(Boolean)))];
  
  return (
    <div className="flex h-screen bg-slate-50 overflow-hidden font-sans">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0 h-full">
        <TopNavbar />
        <main className="flex-1 overflow-auto p-4 md:p-8 relative">
          {alert && (
            <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-xl font-medium text-sm transition-all flex items-center justify-between min-w-[300px] ${alert.type === 'success' ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-red-50 text-red-800 border border-red-200'}`}>
              <span>{alert.message}</span>
            </div>
          )}

          <div className="mb-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-2xl font-bold text-slate-900 tracking-tight">Students Directory</h1>
                <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-semibold text-primary-700">
                  {filteredStudents.length} entries
                </span>
              </div>
              <p className="text-sm text-slate-500">Manage intern records, filter by batches, and issue official documents seamlessly.</p>
            </div>
            
            <div className="flex items-center gap-3 w-full lg:w-auto mt-2 lg:mt-0">
              <button 
                onClick={handleBulkOffer}
                disabled={selectedIds.size === 0}
                className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-white border border-slate-200 text-slate-700 rounded-lg text-sm font-semibold hover:bg-slate-50 hover:text-slate-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm focus:ring-2 focus:ring-slate-200 focus:outline-none"
              >
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Send Offfer Letter (Batch)</span>
                <span className="sm:hidden">Offer</span>
              </button>
              <button 
                onClick={handleBulkCertificate}
                disabled={selectedIds.size === 0}
                className="flex-1 lg:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg text-sm font-semibold hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-sm focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 focus:outline-none"
              >
                <Award className="w-4 h-4" />
                <span className="hidden sm:inline">Issue Certificate (Batch)</span>
                <span className="sm:hidden">Certificate</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-[0_1px_3px_rgba(0,0,0,0.05)] border border-slate-200 flex flex-col min-h-0 relative z-0">
            <div className="p-4 border-b border-slate-200 bg-white rounded-t-xl flex flex-col md:flex-row gap-3 justify-between md:items-center">
              <div className="flex max-w-md w-full relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                 <input 
                  type="text" 
                  placeholder="Search by intern name or email..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="flex items-center gap-3">
                <select 
                  value={filterBatch}
                  onChange={(e) => setFilterBatch(e.target.value)}
                  className="w-full md:w-auto px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  {batches.map(v => <option key={v} value={v}>{v === 'All' ? 'All Batches' : `Batch: ${v}`}</option>)}
                </select>
                <select 
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full md:w-auto px-3 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-500 bg-slate-50 cursor-pointer hover:bg-slate-100 transition-colors"
                >
                  <option value="All">All Statuses</option>
                  <option value="Applied">Status: Applied</option>
                  <option value="Selected">Status: Selected</option>
                  <option value="Completed">Status: Completed</option>
                  <option value="Pending">Status: Pending</option>
                </select>
              </div>
            </div>

            <div className="flex-1 overflow-auto p-0 min-h-[400px]">
              {loading ? (
                <div className="h-full w-full flex flex-col items-center justify-center p-12 text-slate-500">
                  <div className="w-8 h-8 border-4 border-slate-200 border-t-primary-600 rounded-full animate-spin mb-4"></div>
                  <p className="font-medium text-slate-600">Loading directory...</p>
                </div>
              ) : error ? (
                <div className="h-full w-full flex items-center justify-center p-12 text-red-500 font-medium">
                  Oops! {error}
                </div>
              ) : (
                <StudentTable 
                  students={filteredStudents} 
                  selectedIds={selectedIds}
                  setSelectedIds={setSelectedIds}
                  onAction={(action, student) => showAlert(`${action} triggered successfully for ${student.Name}`)}
                />
              )}
            </div>
            
            <div className="p-4 border-t border-slate-200 text-sm font-medium text-slate-500 bg-slate-50 rounded-b-xl flex items-center justify-between">
              <span>Showing {filteredStudents.length} entries</span>
              {selectedIds.size > 0 && (
                <span className="text-primary-600 font-semibold">{selectedIds.size} row(s) selected</span>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
