import React from "react";
import { Student } from "@/app/page";
import { Mail, Award, FileText } from "lucide-react";

interface StudentTableProps {
  students: Student[];
  selectedIds: Set<string>;
  setSelectedIds: React.Dispatch<React.SetStateAction<Set<string>>>;
  onAction: (action: string, student: Student) => void;
}

export function StudentTable({ students, selectedIds, setSelectedIds, onAction }: StudentTableProps) {
  const toggleAll = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setSelectedIds(new Set(students.map(s => s.ID)));
    } else {
      setSelectedIds(new Set());
    }
  };

  const toggleOne = (id: string) => {
    const next = new Set(selectedIds);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelectedIds(next);
  };

  const getStatusBadge = (status: string) => {
    switch (status?.toLowerCase()) {
      case 'selected':
        return <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs font-medium border border-green-200">Selected</span>;
      case 'applied':
        return <span className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium border border-blue-200">Applied</span>;
      case 'completed':
        return <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium border border-purple-200">Completed</span>;
      default:
        return <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium border border-slate-200">{status || 'Unknown'}</span>;
    }
  };

  return (
    <table className="w-full text-left text-sm text-slate-600 whitespace-nowrap">
      <thead className="bg-slate-50 text-slate-500 uppercase text-[11px] font-bold sticky top-0 z-10 border-b border-slate-200 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
        <tr>
          <th className="px-5 py-4 w-10">
            <input 
              type="checkbox" 
              className="rounded border-slate-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
              checked={students.length > 0 && selectedIds.size === students.length}
              onChange={toggleAll}
            />
          </th>
          <th className="px-5 py-4 tracking-wider">Candidate info</th>
          <th className="px-5 py-4 tracking-wider">Education</th>
          <th className="px-5 py-4 tracking-wider">Role & Status</th>
          <th className="px-5 py-4 tracking-wider">Docs & Links</th>
          <th className="px-5 py-4 tracking-wider text-right">Actions</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-100">
        {students.map((s) => (
          <tr key={s.ID} className="hover:bg-slate-50/80 transition-colors group">
            <td className="px-5 py-3">
              <input 
                type="checkbox" 
                className="rounded border-slate-300 text-primary-600 focus:ring-primary-500 cursor-pointer"
                checked={selectedIds.has(s.ID)}
                onChange={() => toggleOne(s.ID)}
              />
            </td>
            <td className="px-5 py-3">
              <div className="font-semibold text-slate-900">{s.Name}</div>
              <div className="text-slate-500 text-xs mt-0.5">{s.Email}</div>
              <div className="text-slate-400 text-[10px] mt-0.5">{s.Phone}</div>
            </td>
            <td className="px-5 py-3">
              <div className="font-medium text-slate-800 text-sm whitespace-normal max-w-xs">{s.College}</div>
              <div className="text-slate-500 text-xs mt-1">{s.Course} {s.Year ? `• ${s.Year}` : ''}</div>
            </td>
            <td className="px-5 py-3">
              <div className="font-medium text-slate-800 mb-1">{s.Role}</div>
              <div className="flex items-center gap-2 mt-1">
                {getStatusBadge(s.Status)}
                <span className="inline-flex items-center rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-medium text-slate-600 border border-slate-200 shadow-sm">
                  {s.Batch === 'Pending' ? 'Batch: Pending' : s.Batch}
                </span>
              </div>
              <div className="text-slate-400 text-[10px] mt-1">{s.Timestamp ? `Applied: ${s.Timestamp}` : ''}</div>
            </td>
            <td className="px-5 py-3">
              <div className="flex flex-col gap-1 text-xs">
                {s.Resume ? <a href={s.Resume} target="_blank" rel="noreferrer" className="text-primary-600 hover:underline">Resume / CV</a> : <span className="text-slate-400">No resume</span>}
                {s.LinkedIn ? <a href={s.LinkedIn} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">LinkedIn</a> : <span className="text-slate-400">No LinkedIn</span>}
                {s.GitHub ? <a href={s.GitHub} target="_blank" rel="noreferrer" className="text-slate-700 hover:underline">GitHub</a> : null}
              </div>
            </td>
            <td className="px-5 py-3 text-right">
              <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={() => onAction('Email', s)}
                  className="p-1.5 text-slate-400 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => onAction('Offer Letter', s)}
                  className="p-1.5 text-slate-400 hover:text-green-600 hover:bg-green-50 rounded-md transition-colors"
                  title="Generate Offer Letter"
                >
                  <FileText className="w-4 h-4" />
                </button>
                <button 
                  onClick={() => onAction('Certificate', s)}
                  className="p-1.5 text-slate-400 hover:text-purple-600 hover:bg-purple-50 rounded-md transition-colors"
                  title="Generate Certificate"
                >
                  <Award className="w-4 h-4" />
                </button>
              </div>
            </td>
          </tr>
        ))}
        {students.length === 0 && (
          <tr>
            <td colSpan={5} className="py-12 text-center text-slate-500 bg-white">
              <div className="flex flex-col items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-slate-100 flex items-center justify-center mb-3">
                  <FileText className="w-6 h-6 text-slate-400" />
                </div>
                <p className="font-medium text-slate-900">No students found</p>
                <p className="text-sm mt-1">Try adjusting your filters or search term.</p>
              </div>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
